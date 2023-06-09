const HEADERS = {
  JSON: {
    'Content-Type':
      'application/json;charset=utf-8',
  },
} as const;

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

class HTTPTransport {
  public post<TBody, TResponse>({
    url,
    body,
    headers = 'JSON',
  }: PostProps<TBody>): Promise<TResponse> {
    return fetch(url, {
      method: METHODS.POST,
      headers: HEADERS[headers],
      body: body ? JSON.stringify(body) : null,
    }).then(async response => {
      const contentType = response.headers.get(
        'content-type'
      );

      if (
        contentType?.includes('application/json')
      ) {
        return response.json();
      } else {
        return response.text();
      }
    });
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

export const http = new HTTPTransport();
