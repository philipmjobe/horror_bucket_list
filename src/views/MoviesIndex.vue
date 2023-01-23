<template>
  <div class="movies-index">
    <main id="main">
      <div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>
            <b>Search By Title:</b>
          </h1>
          <input type="text" v-model="nameFilter" list="names" class="center-this-regular" />
          <datalist id="names">
            <option v-for="movie in movies" :key="movie.id">{{ movie.original_title }}</option>
          </datalist>
        </div>

        <!-- <div>
          <button class="center-this-too" v-on:click="setSortAttribute('name')">Sort By Title</button>
          <button class="center-this-too" v-on:click="setSortAttribute('sub_genre')">Sort By Genre</button>
        </div> -->

        <!-- ======= Movie Section ======= -->
        <section id="portfolio" class="portfolio">
          <div class="container">
            <div class="row portfolio-container">
              <div
                class="col-lg-4 col-md-6 portfolio-item filter-app"
                data-layoutmode="fitRows"
                v-for="movie in pageOfMovies"
                v-on:click="
                  currentMovie = movie;
                  scrollToTop();
                "
                v-bind:class="{ selected: movie === currentMovie }"
                :key="movie.id"
              >
                <div class="portfolio-wrap">
                  <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.original_title" />
                  <div class="portfolio-info">
                    <h4>{{ movie.original_title }}</h4>
                    <p></p>
                    <div class="portfolio-links">
                      <!-- <p>
                          <b>{{ movie.sub_genre }}</b>
                        </p> -->
                      <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-info">
                  <div class="portfolio-links">
                    <router-link v-bind:to="`/movies/${movie.id}`"></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- End Movie Section -->
      </div>
      <div class="center-this-five">
        <jw-pagination :pageSize="100" :items="movies" @changePage="onChangePage"></jw-pagination>
      </div>
    </main>
  </div>
</template>
<style>
.center-this-regular {
  width: 60%;
  transform: translate(30%);
}
.center-this-too {
  width: 20%;
  transform: translate(138%);
}

img {
  height: 600px;
  width: 360px;
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
      pageOfMovies: [],
      sub_genre: [],
      currentMovie: {},
      nameFilter: "",
      genreFilter: "",
      sortAttribute: "name, sub_genre",
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    onChangePage(pageOfMovies) {
      console.log(pageOfMovies);
      this.pageOfMovies = pageOfMovies;
    },
    indexMovies: function () {
      axios.get("https://capstoneprojectbackend-production.up.railway.app/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    moviesWithPosters() {
      return this.movies.filter((movie) => {
        movie.poster_path;
      });
    },
  },
};
</script>
