const HEADERS = {
  JSON: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  NONE: {},
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

const handleResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type');
  const responseContent = contentType?.includes('application/json')
    ? await response.json()
    : await response.text();

  if (response.ok) {
    return responseContent;
  } else {
    const message =
      typeof responseContent === 'object' ? responseContent.reason : String(responseContent);
    const error = new Error(message);

    (error as any).response = response;

    throw error;
  }
};

class HTTPTransport {
  public put<TResponse, TBody = unknown>({
    url,
    body,
    headers = 'JSON',
  }: PostProps<TBody>): Promise<TResponse> {
    return fetch(url, {
      method: METHODS.PUT,
      headers: HEADERS[headers],
      credentials: 'include',
      cache: 'no-store',
      body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
    }).then(handleResponse);
  }

  public post<TResponse, TBody = unknown>({
    url,
    body,
    headers = 'JSON',
  }: PostProps<TBody>): Promise<TResponse> {
    return fetch(url, {
      method: METHODS.POST,
      headers: HEADERS[headers],
      credentials: 'include',
      cache: 'reload',
      body: body ? JSON.stringify(body) : null,
    }).then(handleResponse);
  }

  public get<TResponse>({ url }: { url: string }): Promise<TResponse> {
    return fetch(url, {
      credentials: 'include',
      cache: 'reload',
    }).then(handleResponse);
  }
}

export const http = new HTTPTransport();
