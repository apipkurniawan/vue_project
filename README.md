# vue_project

**_ study about vue programming with VueMastery _**

\* Getting-Started

Doc Vue : https://cli.vuejs.org/guide/
-- create project with command line :

1. npm install -g @vue/cli
   (pastikan sudah terinstall node-js version 8.9 or above (8.11.0+ recommended))
2. vue --version
   (cek versi vue nya)
3. vue create real-world-vue
   (real-world-vue adalah nama project (for vue versi 2 to above))
4. lalu pilih manually select features
5. router, vuex, linter/formatter
6. ESlint + Prettier
7. Lint on save
8. in dedicated config files
9. pilih No
10. setelah project selesai dibuat ketik cd real-world-vue
    (masuk ke direktori project)
11. npm run serve
    (untuk menjalankan aplikasi)

-- create project with vue ui :

1. ketik vue ui
2. pilih + create a new project here
3. project folder : real-world-vue
4. package manager : default
5. select a preset : manual
6. pilih router, vuex, linter/formatter
7. pick a linter/formatter config : ESLint + Prettier
8. pick additional lint features : Lint On Save
9. save as a new preset : Continue without saving

\* Customize UI

- List Vue UI Component Libraries : https://www.codeinwp.com/blog/vue-ui-component-libraries/
- Doc Vuetify : https://vuetifyjs.com/en/getting-started/quick-start/
  step :

1. vue add vuetify

\* customize Icons

- Doc Icons : https://vuetifyjs.com/en/customization/icons/
  step :

1. npm install @mdi/font -D
2. masukan code berikut

   // src/plugins/vuetify.js
   import '@mdi/font/css/materialdesignicons.css' // tambah code ini
   import Vue from 'vue'
   import Vuetify from 'vuetify/lib'

   Vue.use(Vuetify)

   export default new Vuetify({
   icons: { // tambah code ini
   iconfont: 'mdi', // tambah code ini
   }, // tambah code ini
   })
