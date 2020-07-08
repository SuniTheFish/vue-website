export default interface Project {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  homepage?: string;
  [key: string]: unknown;
}
