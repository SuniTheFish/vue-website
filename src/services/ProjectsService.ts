import axios from "axios";
import Project from "../interfaces/project";

export default class ProjectsService {
  async getProjects(): Promise<Project[]> {
    try {
      const res = await axios.get<Project[]>(
        "https://api.github.com/users/SuniTheFish/repos"
      );
      return res.data;
    } catch (error) {
      throw new Error(`unable to get projects! error: ${error}`);
    }
  }
}
