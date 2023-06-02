const HEADERS = {
  'Content-Type':
    'application/json;charset=utf-8',
};

export class HTTPTransport {
  post({
    url,
    body,
  }: {
    url: string;
    body?: BodyInit | null;
  }) {
    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body,
    });
  }

  get({
    url,
    body,
  }: {
    url: string;
    body?: BodyInit | null;
  }) {
    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
      body,
    });
  }
}
