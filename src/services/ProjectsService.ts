import axios from "axios";
import Project from "../interfaces/project";
import Service from "../interfaces/service";

export default class ProjectsService implements Service<Project[]> {
  async get(): Promise<Project[]> {
    try {
      const res = await axios.get<Project[]>(
        "https://api.github.com/users/BenjaminHinchliff/repos?per_page=100"
      );
      return res.data.map((project) => {
        project.htmlUrl = project["html_url"] as string;
        delete project["html_url"];
        return project;
      });
    } catch (error) {
      throw new Error(`unable to get projects! error: ${error}`);
    }
  }
}
