<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <br />
    <v-btn large :disabled="btn">Disabled</v-btn>&nbsp;
    <v-btn
      large
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="info"
      @click="loader = 'loading'"
    >
      Icon Loader
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <p v-if="seen">Now You See Me</p>
    <p>Computed message: "{{ nama }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </v-container>
</template>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    nama: "apip kurniawan",
    alamat: "jakarta",
    a: 1,
    b: 2,
    list: {
      c: "tes"
    },

    btn: false,
    loader: null,
    loading: false,
    seen: false
  }),
  computed: {
    reversedMessage: function() {
      return this.nama
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      if (this.btn == true) {
        setTimeout(() => {
          this[l] = false;
          this.btn = false;
          this.seen = false;
        }, 3000);
      } else {
        setTimeout(() => {
          this[l] = false;
          this.btn = true;
          this.seen = true;
        }, 3000);
      }
      this.loader = null;
    }
  },
  created: function() {
    console.log("initialize");
  }
};
</script>
