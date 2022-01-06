<template>
  <div class="list">
    <br />
    <br />
    <br />
    <br />
    <br />
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-layoutmode="fitRows" />
          <div class="portfolio-wrap">
            <img v-bind:src="movie.box_art" v-bind:alt="movie.name" v-for="list in lists" v-bind:key="list.id" />
            <div class="portfolio-info"></div>
          </div>
        </div>
        <br />
        <i>{{ list.category }}</i>
      </div>
    </section>
  </div>
</template>

<style>
.list {
  text-align: center;
  color: white;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      list: [],
      lists: [],
    };
  },
  created: function () {
    this.indexLists();
  },
  methods: {
    indexLists: function () {
      axios.get("/lists").then((response) => {
        this.lists = response.data;
        console.log("list", response.data);
      });
    },
    addMovie: function () {
      axios.post("/lists", this.movie).then(() => {
        this.$router.push("/lists");
      });
    },
  },
};
</script>
