<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar absolute color="blue" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Infrapedia</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
        <v-container style="height: 1500px; margin-top:60px;">
          <v-content>
            <HelloWorld />
          </v-content>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
