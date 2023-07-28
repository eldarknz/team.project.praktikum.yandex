export abstract class BaseRESTService {
  abstract create?: (...args: any[]) => Promise<any>;
  abstract update?: (...args: any[]) => Promise<any>;
  abstract delete?: (...args: any[]) => Promise<any>;
  abstract find?: (...args: any[]) => Promise<any>;
}
