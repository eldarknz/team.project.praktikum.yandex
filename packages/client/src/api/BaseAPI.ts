import { http } from '@core/HTTPTransport';

export class BaseApi {
  protected http;

  constructor() {
    this.http = http;
  }
}
