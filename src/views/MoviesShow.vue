<template>
  <div class="movies-show">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>{{ movie.name }}</h2>
    <img v-bind:src="movie.box_art" v-bind:alt="movie.name" class="center" />
    <p>{{ movie.description }}</p>
    <p>{{ movie.sub_genre }}</p>
    <input type="text" v-model="newListCategory" />
    <button v-on:click="addMovie()">Add To Watchlist</button>
    <br />
    <br />
    <router-link to="/movies">Back to All Movies</router-link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<style>
img {
  height: 400px;
  width: 356px;
}
h2 {
  color: white;
  text-align: center;
}
p {
  color: white;
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
      list: {},
      newListCategory: "",
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      console.log("movies show", response);
      this.movie = response.data;
    });
  },
  methods: {
    addMovie: function () {
      var params = { movie_id: `${this.$route.params.id}`, category: this.newListCategory };
      axios
        .post("/lists", params)
        .then((response) => {
          console.log("added to list", response);
          this.$router.push("/list");
          location.reload();
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
