import { ServicesModel } from '@core/ServicesContext';
import { StoreModel } from '@core/StoreContext';

export interface Handlers<T = unknown> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export class BaseController {
  protected services: ServicesModel;
  protected store: StoreModel;

  constructor(
    services: ServicesModel,
    store: StoreModel
  ) {
    this.services = services;
    this.store = store;
  }
}
