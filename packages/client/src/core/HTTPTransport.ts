const HEADERS = {
  JSON: {
    'Content-Type':
      'application/json;charset=utf-8',
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

const handleResponse = async <T>(
  response: Response,
  handler: (response: Response) => Promise<T> | T
) => {
  if (response.ok) {
    return handler(response);
  } else {
    throw new Error(
      (
        (await response.json()) as {
          reason: string;
        }
      ).reason
    );
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
      body:
        body instanceof FormData
          ? body
          : body
          ? JSON.stringify(body)
          : null,
    }).then(async response => {
      return await handleResponse(
        response,
        () => {
          const contentType =
            response.headers.get('content-type');

          if (
            contentType?.includes(
              'application/json'
            )
          ) {
            return response.json();
          } else {
            return response.text();
          }
        }
      );
    });
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
    }).then(async response => {
      return await handleResponse(
        response,
        () => {
          const contentType =
            response.headers.get('content-type');

          if (
            contentType?.includes(
              'application/json'
            )
          ) {
            return response.json();
          } else {
            return response.text();
          }
        }
      );
    });
  }

  public get<TResponse>({
    url,
  }: {
    url: string;
  }): Promise<TResponse> {
    return fetch(url, {
      credentials: 'include',
      cache: 'reload',
    }).then(res =>
      handleResponse(res, r => r.json())
    );
  }
}

export const http = new HTTPTransport();
