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

              <div class="portfolio-info">
                <div class="portfolio-links">
                  <button v-on:click="lovedIt(list)">Loved It</button>
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
  width: 370px;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      list: {},
      lists: [],
      movie: [],
      currentUser: localStorage.getItem("user_id"),
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
    lovedIt: function (list) {
      this.list = list;
      axios
        .post("/lovedits", {
          user_id: this.currentUser.id,
          movie_id: this.list.movie_id,
        })
        .then(() => {
          console.log("yo");
          this.$router.push("/lovedits");
        });
    },
  },
};
</script>
