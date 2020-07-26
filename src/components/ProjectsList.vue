<template>
  <div class="projects-list">
    <section v-if="error">
      <p class="red--text">Unable to load projects</p>
    </section>
    <section v-else>
      <div v-if="loading" class="text-center">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
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
    </section>
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
    num: {
      type: Number,
      default: -1
    },
    projectsService: Object as () => Service<Project[]>
  },
  data() {
    return {
      projects: [] as Project[],
      error: false,
      loading: true
    };
  },
  mounted() {
    this.projectsService
      .get(this.num)
      .then(projects => (this.projects = projects))
      .catch(() => (this.error = true))
      .finally(() => (this.loading = false));
  },
  methods: {
    normalizeName: normalizeString
  }
});
</script>
