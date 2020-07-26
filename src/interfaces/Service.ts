export default interface Service<T> {
  get: (num: number) => Promise<T>;
}
