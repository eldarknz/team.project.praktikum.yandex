import { ServicesModel } from '@core/ServicesContext';
import { RootState, RootStore } from '@service/store';

export interface Handlers<T = unknown> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export class BaseController {
  protected services: ServicesModel;
  protected state: RootState;
  protected store: RootStore;

  constructor(services: ServicesModel, store: RootStore) {
    this.services = services;
    this.store = store;
    this.state = store.getState();
  }
}
