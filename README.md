# vue_project
study about vue programming

Getting-Started
- Doc Vue : https://cli.vuejs.org/guide/
step :
1. npm install -g @vue/cli 
   (pastikan sudah terinstall node-js version 8.9 or above (8.11.0+ recommended))
2. vue --version 
   (cek versi vue nya)
3. vue create hello-world
   (hello-world adalah nama project (for vue versi 2 to above))
4. lalu pilih default
5. setelah project selesai dibuat ketik cd hello-world
   (masuk ke direktori project)
6. npm run serve 
   (untuk menjalankan aplikasi)


customize UI
- List Vue UI Component Libraries : https://www.codeinwp.com/blog/vue-ui-component-libraries/
- Doc Vuetify : https://vuetifyjs.com/en/getting-started/quick-start/
step :
1. vue add vuetify


customize Icons
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
   icons: {  // tambah code ini
      iconfont: 'mdi', // tambah code ini
   }, // tambah code ini
   })