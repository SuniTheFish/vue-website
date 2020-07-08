<template>
  <div class="projects" key="/projects">
    <h1>Projects</h1>
    <v-container>
      <projects-list />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "../components/ProjectsList.vue";
export default Vue.extend({
  name: "Projects",
  components: {
    ProjectsList
  }
});
</script>
