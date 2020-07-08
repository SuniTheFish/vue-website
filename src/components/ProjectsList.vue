<template>
  <div class="projects-list">
    <v-card v-for="project in projects" :key="project.id">
      <v-card-title>{{ project.name }}</v-card-title>
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
  }
});
</script>
