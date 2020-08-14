<template>
  <div class="home" key="/">
    <h1>About Me</h1>
    <div class="description d-flex">
      <v-img
        class="rounded mr-2"
        src="../assets/img/portrait.jpg"
        aspect-ratio="1"
        height="100"
        width="100"
        contain=""
      />
      <p>
        Hello! I'm Benjamin, a (largely) independent developer who codes in
        every spare moment I get. This is the website where I post my projects.
        I love to mess around with whatever seems interesting to me at the
        moment, and I'm always trying to improve my skills.
        <span class="text--disabled">
          (Case in point: this site - the
          <a
            href="https://web.archive.org/web/2019*/http://benjaminhinchliff.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            way back machine
          </a>
          for this is pretty interesting (to me))
        </span>
      </p>
      <iframe
        src="https://benjaminhinchliff.github.io/rust-webgl-tetrahedron/"
      />
    </div>
    <h1>Projects</h1>
    <v-container>
      <projects-list :num="5" :projectsService="projectsService" />
      <p class="text-center"><router-link to="/projects">more</router-link></p>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "../components/ProjectsList.vue";
import ProjectsService from "../services/ProjectsService";
export default Vue.extend({
  name: "Home",
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
