export interface Project {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  [key: string]: unknown;
}
