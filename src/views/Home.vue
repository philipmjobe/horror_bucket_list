<template>
  <div class="background">
    <div class="home">
      <body>
        <a href="/login">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            class="center"
          />
        </a>
      </body>
    </div>
  </div>
</template>

<style>
.background {
  background-image: url("https://st2.depositphotos.com/1004430/7169/v/600/depositphotos_71697107-stock-illustration-skull-pattern.jpg");
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 700px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
