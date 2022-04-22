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
    <!-- <p>Please Enter Not Watched Loved It or Hated It</p> -->
    <!-- <input class="center-this-three" type="text" v-model="newListCategory" /> -->
    <button class="center-this-four" v-on:click="addMovie()">Add To Watchlist</button>
    <br />
    <br />
    <div class="center-this-six">
      <router-link to="/movies">Back to All Movies</router-link>
    </div>
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
.center-this-six {
  text-align: center;
}
.center-this-four {
  width: 20%;
  transform: translate(200%);
}
.center-this-three {
  width: 40%;
  transform: translate(70%);
}
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
    axios.get("https://fathomless-tundra-47766.herokuapp.com/movies/" + this.$route.params.id).then((response) => {
      console.log("movies show", response);
      this.movie = response.data;
    });
  },
  methods: {
    addMovie: function () {
      var params = { movie_id: `${this.$route.params.id}`, category: this.newListCategory };
      axios
        .post("https://fathomless-tundra-47766.herokuapp.com/lists", params)
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
