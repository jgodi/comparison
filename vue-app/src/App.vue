<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Cat App</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/list">List</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  .router-link-active {
    background-color: #0000001a;
  }
</style>
