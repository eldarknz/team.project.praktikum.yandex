export interface QueryHandler<T = void> {
  onSuccess: T extends void ? () => void : (data: T) => void;
  onError: () => void;
}
