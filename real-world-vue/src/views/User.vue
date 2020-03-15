<template>
  <!-- cara 1 -->
  <!-- <h1>My name is {{ $route.params.username }}</h1> -->
  <!-- cara 2 use props -->
  <h1>My name is {{ username }}</h1>
</template>

<script>
export default {
  props: ['username'] // cara 2
}
</script>

<style></style>
