<template>
  <div class="row">
    <div class="col s12 m4" v-for="cat in catNames">
      <div class="card">
        <div class="card-image">
          <img src="http://thecatapi.com/api/images/get?format=src&type=gif">
          <span class="card-title">{{ cat }}</span>
        </div>
        <div class="card-content">
          <p>Soft kitty, warm kitty, little ball of fur</p>
        </div>
        <div class="card-action">
          <a href="#">View This Cat!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatList',
  data() {
    return {
      catNames: [
        'Ginger',
        'Sparkles',
        'Mr. Snuffles',
        'Nikita',
        'Mrs. Napper',
        'Nappy McNappyton',
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
