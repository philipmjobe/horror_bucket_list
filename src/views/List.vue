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
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="list in lists" v-bind:key="list.id">
            <div class="portfolio-wrap">
              <img :src="`${list.movie.box_art}`" />
              <br />
              <i>{{ list.category }}</i>
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <router-link v-bind:to="`/loved-it`">Loved It</router-link>
                  <br />
                  <br />
                  <router-link v-bind:to="`/hated-it`">Hated It</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.list {
  text-align: center;
  color: white;
}
img {
  height: 624px;
  width: 416px;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      list: [],
      lists: [],
      movie: [],
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
