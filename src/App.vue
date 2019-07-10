<template>
  <div id="app">
    <h1>{{title}}</h1>

    <form @submit.prevent="formSubmitted()">
      <label for="searchTerm">Search Term</label>
      <input v-model="searchTerm" class="u-full-width" type="text" id="searchTerm">
      <button type="submit">Search</button>
    </form>

    <img v-if="loading" id="loadingImage" src="https://i.imgur.com/LGF1A4S.gif" alt="loading gif">

    <section class="images">
      <img v-for="image in images" :src="image.urls.regular" :key="image.id">
    </section>

  </div>
</template>
 
<script>
import API from './API';

export default {
  name: 'app',
  data() {
    return {
      title: 'Vue Image Search',
      searchTerm: '',
      images: [],
      loading: false
    };
  },
  methods: {
    formSubmitted() {
      this.loading = true;
      this.images = [];
      API.search(this.searchTerm)
        .then(images => {
          this.images = images;
          this.loading = false;
        });
    }
  }

};
</script>

<style>
body{
  width: 80%;
  margin: 2em auto 0 auto;
}
img{
  width: 100%;
}
.images{
  column-count: 3;
}
</style>
