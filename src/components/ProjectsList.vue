<template>
  <div class="projects-list">
    <v-card
      class="mb-1"
      v-for="project in projects"
      :key="project.id"
      :data-project-id="project.id"
    >
      <v-card-title>
        <a :href="project.htmlUrl" target="_blank" rel="noopener norefferer">
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
    <p class="error red--text"></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "../interfaces/Project";
import Service from "../interfaces/Service";
import { normalizeString } from "../utils/normalize";

export default Vue.extend({
  name: "ProjectsList",
  props: {
    projectsService: {
      type: Object as () => Service<Project[]>
    }
  },
  data() {
    return {
      projects: [] as Project[]
    };
  },
  created() {
    this.projectsService
      .get()
      .then(projects => (this.projects = projects))
      .catch(error => this.showError(error));
  },
  methods: {
    normalizeName: normalizeString,
    showError(err: string): void {
      const errElement = document.querySelector(".error");
      if (errElement) errElement.textContent = err;
    }
  }
});
</script>
