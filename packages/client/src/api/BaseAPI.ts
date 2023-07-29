import { http } from '@workspace/shared/src/core';

export class BaseApi {
  protected http;

  constructor() {
    this.http = http;
  }
}
