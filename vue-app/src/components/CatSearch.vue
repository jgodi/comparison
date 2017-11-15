<template>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img v-bind:src="catImageSrc">
          <span class="card-title">Cat Attack!</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red" v-on:click="generateNewCat"><i class="material-icons">autorenew</i></a>
        </div>
        <div class="card-content">
          <p>Click the refresh to get a new cat image!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatSearch',
  data() {
    return {
      catImageSrc: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    };
  },
  methods: {
    generateNewCat() {
      this.$http.get('https://dog.ceo/api/breeds/image/random').then((response) => {
        this.catImageSrc = response.body.message;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
