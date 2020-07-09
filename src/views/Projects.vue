<template>
  <div class="projects" key="/projects">
    <h1 class="title">Projects</h1>
    <v-container>
      <projects-list :projectsService="projectsService" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "../components/ProjectsList.vue";
import ProjectsService from "../services/ProjectsService";
export default Vue.extend({
  name: "Projects",
  components: {
    ProjectsList
  },
  data() {
    return {
      projectsService: new ProjectsService()
    };
  }
});
</script>
