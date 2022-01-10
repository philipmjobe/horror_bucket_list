<template>
  <div class="loved-it">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="movie in movies" v-bind:key="movie.id">
            <div class="portfolio-wrap">
              <img :src="`${movie.box_art}`" />
              <br />

              <div class="portfolio-info">
                <div class="portfolio-links"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      console.log("loved it", response);
      this.movie = response.data;
    });
  },
  methods: {
    addMovie: function () {
      var params = { movie_id: `${this.$route.params.id}` };
      axios.post("/movies", params).then((response) => {
        console.log("added to list", response);
        this.$router.push("/loved-it");
        location.reload();
      });
    },
  },
};
</script>
