export default interface Project {
  id: number;
  name: string;
  htmlUrl: string;
  description?: string;
  homepage?: string;
  [key: string]: unknown;
}
