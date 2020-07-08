<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          src="@/assets/logo.svg"
          height="60px"
          width="60px"
          contain
        />
        <v-toolbar-title>BenjaminHinchliff.com</v-toolbar-title>
      </div>
      <v-spacer />
      <v-toolbar-items>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/projects">Projects</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>
