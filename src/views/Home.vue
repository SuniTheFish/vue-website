<template>
  <div class="home" key="/">
    <h1>About Me</h1>
    <p>
      Hello! I'm
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <span class="font-weight-bold" v-bind="attrs" v-on="on">
            Benjamin,
          </span>
        </template>
        <v-img src="../assets/img/portrait.jpg" width="20vh" height="20vh" />
      </v-tooltip>
      a (largely) independent developer who codes in every spare moment I get.
      This is the website where I post my projects. I love to mess around with
      whatever seems interesting to me at the moment, and I'm always trying to
      improve my skills.
      <span class="text--disabled">
        (Case in point: this site - the
        <a
          href="https://web.archive.org/web/2019*/http://benjaminhinchliff.com/"
          target="_blank"
          rel="noopener noreferrer"
          >way back machine</a
        >
        for this is pretty interesting (to me))
      </span>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  components: {}
};
</script>
