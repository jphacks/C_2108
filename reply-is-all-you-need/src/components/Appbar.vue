<template>
  <v-app-bar
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    app
  >
    <template #img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      />
    </template>
    <v-app-bar-title>Reply is All you need</v-app-bar-title>
    <v-spacer />
    <v-btn class="mt-3" text>
      logout
    </v-btn>
  </v-app-bar>
</template>
