<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "./components/AppBar.vue";
export default Vue.extend({
  name: "App",
  components: {
    AppBar
  }
});
</script>
