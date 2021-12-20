<template>
  <div class="background">
    <div class="movies-index">
      <div>
        <h1>All Movies</h1>
        Search By Title:
        <input type="text" v-model="titleFilter" list="titles" />
        <datalist id="titles">
          <option v-for="movie in movies" :key="movie.id">{{ movie.name }}</option>
        </datalist>
      </div>

      <div
        v-for="movie in orderBy(filterBy(movies, titleFilter, sub_genre, 'title', 'sub_genre'), sortAttribute)"
        v-on:click="currentMovie = movie"
        v-bind:class="{ selected: movie === currentMovie }"
        :key="movie.id"
      ></div>

      <div>
        <button v-on:click="setSortAttribute('name')">Sort By Title</button>
        <button v-on:click="setSortAttribute('sub_genre')">Sort By Genre</button>
      </div>
      <!-- <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.name }}</h2>
      <img v-bind:src="movie.box_art" v-bind:alt="movie.name" />
      -->
      <!-- <br />
    </div>  -->
      <!-- ======= Portfolio Section ======= -->
      <div class="background">
        <section id="portfolio" class="portfolio">
          <div class="container">
            <div v-for="movie in movies" v-bind:key="movie.id">
              <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img v-bind:src="movie.box_art" v-bind:alt="movie.name" />
                    <div class="portfolio-info">
                      <h4>{{ movie.name }}</h4>
                      <p></p>
                      <div class="portfolio-links">
                        <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
img {
  height: 400px;
  width: 356px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      sub_genre: [],
      currentMovie: {},
      titleFilter: "",
      sortAttribute: "title, genre",
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
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
  },
};
</script>
