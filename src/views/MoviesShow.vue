<template>
  <div class="movies-show">
    <br />
    <br />
    <br />
    <br />
    <h2>{{ movie.name }}</h2>
    <p style="text-align: center"><img v-bind:src="movie.box_art" v-bind:alt="movie.name" class="thing" /></p>
    <p>Plot: {{ movie.description }}</p>
    <p>Sub Genre: {{ movie.sub_genre }}</p>
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
.thing {
  height: 600px;
  width: 400px;
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
