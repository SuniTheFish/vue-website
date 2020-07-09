export default interface Service<T> {
  get: () => Promise<T>;
}
