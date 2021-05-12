<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img class="logo" src="./assets/logo.png" alt="Logo">
      </router-link>
      <div class="routes">
        <router-link to="/">Projects</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ProvidesProjectsStore } from '@/mixins/ProjectsStore';
import { ProvidesStatusesStore } from '@/mixins/StatusesStore';

export default {
  mixins: [
    ProvidesProjectsStore, ProvidesStatusesStore,
  ],
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
}

#nav {
  padding: 30px;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  &::after {
    content: '';
  }

  .logo {
    height: 5rem;
  }

  a {
    font-weight: bold;
    color: #6c7c8d;
    text-decoration: none;
    margin-right: 1rem;

    &.router-link-exact-active {
      color: #960405;
    }
  }
}
</style>
