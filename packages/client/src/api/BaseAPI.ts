import { http } from '@workspace/shared';

export class BaseApi {
  protected http;

  constructor() {
    this.http = http;
  }
}
