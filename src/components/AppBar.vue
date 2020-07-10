<template>
  <div class="app-bar">
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          src="../assets/img/logo.svg"
          height="60px"
          width="60px"
          contain
        />
        <v-toolbar-title>BenjaminHinchliff.com</v-toolbar-title>
      </div>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = true" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary right>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/projects">
            <v-list-item-icon>
              <v-icon>mdi-book-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App Bar",
  data() {
    return {
      drawer: false
    };
  }
});
</script>
