<template>
  <div class="projects-list">
    <v-card class="mb-1" v-for="project in projects" :key="project.id">
      <v-card-title>
        <a :href="project.html_url" target="_blank" rel="noopener norefferer">
          {{ normalizeName(project.name) }}
        </a>
      </v-card-title>
      <v-card-subtitle v-if="project.homepage">
        <a :href="project.homepage" target="_blank" rel="noopener norefferer">
          (homepage)
        </a>
      </v-card-subtitle>
      <v-card-text>
        {{ project.description || "(no description)" }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsService from "../services/ProjectsService";
import Project from "../interfaces/project";
export default Vue.extend({
  name: "ProjectsList",
  data() {
    return {
      projectsService: new ProjectsService(),
      projects: [] as Project[]
    };
  },
  created() {
    this.projectsService
      .getProjects()
      .then(projects => (this.projects = projects))
      .catch(error => console.error(error));
  },
  methods: {
    normalizeName(name: string): string {
      return name
        .replace(/[-_]/g, " ") // dashes to spaces
        .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase to spaces
        .toLowerCase()
        .split(" ")
        .reduce(
          // capitalize each word
          (str, word) => `${str} ${word[0].toUpperCase()}${word.slice(1)}`,
          ""
        )
        .trim();
    }
  }
});
</script>
