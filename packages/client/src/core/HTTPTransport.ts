const HEADERS = {
  JSON: {
    'Content-Type':
      'application/json;charset=utf-8',
  },
};

const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

type PostProps<T> = {
  url: string;
  body?: T;
  headers?: keyof typeof HEADERS;
};

export class HTTPTransport {
  public post<TBody, TResponse>({
    url,
    body,
    headers = 'JSON',
  }: PostProps<TBody>): Promise<TResponse> {
    return fetch(url, {
      method: METHODS.POST,
      headers: HEADERS[headers],
      body: body ? JSON.stringify(body) : null,
    }).then(response => response.json());
  }

  public get<TResponse>({
    url,
  }: {
    url: string;
  }): Promise<TResponse> {
    return fetch(url).then(response =>
      response.json()
    );
  }
}
