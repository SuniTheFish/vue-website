import { expect } from "chai";
import { stub } from "sinon";
import { shallowMount } from "@vue/test-utils";
import ProjectsList from "@/components/ProjectsList.vue";
import Project from "@/interfaces/project";
import ProjectsService from "@/services/ProjectsService";
import { normalizeString } from "@/utils/normalize";

const projectsServiceData: Project[] = [
  {
    id: 1,
    name: "project-name",
    htmlUrl: "project-html-url"
  },
  {
    id: 2,
    name: "2ndProjectName",
    htmlUrl: "2ndProjectHtmlUrl",
    homepage: "2ndProjectHomepage",
    description: "2ndProjectDescription"
  }
];

const projectsService = new ProjectsService();
stub(projectsService, "get").returns(Promise.resolve(projectsServiceData));

describe("ProjectsList.vue", () => {
  it("renders projects when passed", async () => {
    const wrapper = shallowMount(ProjectsList, {
      propsData: {
        projectsService
      }
    });
    await wrapper.vm.$nextTick();
    projectsServiceData.forEach(
      ({ id, name, htmlUrl, homepage, description }) => {
        const project = wrapper.get(`[data-project-id="${id}"]`);
        const title = project.get("v-card-title-stub a");
        expect(title.text()).to.equal(normalizeString(name));
        expect(title.attributes().href).to.equal(htmlUrl);
        expect(project.get("v-card-text-stub").text()).to.equal(
          description || "(no description)"
        );
        if (homepage) {
          expect(
            project.get("v-card-subtitle-stub a").attributes().href
          ).to.equal(homepage);
        }
      }
    );
  });
});
