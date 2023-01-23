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
              <img :src="`https://image.tmdb.org/t/p/original/${list.movie.poster_path}`" />
              <br />

              <div class="portfolio-info">
                <div class="portfolio-links">
                  <button v-on:click="lovedIt(list)">Loved It</button>

                  <br />
                  <br />
                  <button v-on:click="hatedIt(list)">Hated It</button>
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
      list: [],
      lists: {},
      movie: [],
      currentUser: localStorage.getItem("user_id"),
      watched: false,
    };
  },
  created: function () {
    this.indexLists();
  },
  methods: {
    indexLists: function () {
      axios.get("https://capstoneprojectbackend-production.up.railway.app/lists").then((response) => {
        this.lists = response.data;
        console.log("list", response.data);
      });
    },
    addMovie: function () {
      axios.post("https://capstoneprojectbackend-production.up.railway.app/lists", this.movie).then(() => {
        this.$router.push("/list");
      });
    },
    lovedIt: function (list) {
      this.list = list;
      axios
        .post("https://capstoneprojectbackend-production.up.railway.app/lovedits", {
          user_id: this.currentUser.id,
          movie_id: this.list.movie_id,
        })
        .then(() => {
          console.log("yo");
          this.$router.push("/lovedit");

          location.reload();
        });
    },
    hatedIt: function (list) {
      this.list = list;
      axios
        .post("https://capstoneprojectbackend-production.up.railway.app/hatedits", {
          user_id: this.currentUser.id,
          movie_id: this.list.movie_id,
        })
        .then(() => {
          console.log("sup");
          this.$router.push("/hatedit");

          location.reload();
        });
    },
  },
};
</script>
