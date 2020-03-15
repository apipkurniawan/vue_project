<template>
  <div id="app">
    <div id="nav">
      <!-- a component which creates a link to navigate to a route -->
      <!-- cara 1 -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- cara 2 with binding -->
      <!-- <router-link :to="{ name: 'contact' }">Contact</router-link> -->

      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link> |
      <router-link
        :to="{ name: 'user', params: { username: 'apip kurniawan' } }"
        >User</router-link
      >
    </div>
    <!-- a placeholder which renders the matched component -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
