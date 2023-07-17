import { http } from '@shared/core/HTTPTransport';

export class BaseApi {
  protected http;

  constructor() {
    this.http = http;
  }
}
