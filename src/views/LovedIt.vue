<template>
  <div class="loved-it">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>Loved It List</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="lovedit in lovedits" v-bind:key="lovedit.id">
            <div class="portfolio-wrap">
              <img :src="`${lovedit.movie.box_art}`" />
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

<style>
p {
  font-size: 250%;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: [],
      lovedits: {},
    };
  },
  created: function () {
    axios.get("/lovedits/").then((response) => {
      console.log("loved it", response);
      this.lovedits = response.data;
    });
  },
  // methods: {
  //   addMovie: function () {
  //     var params = { movie_id: `${this.$route.params.id}` };
  //     axios.post("/loved-it", params).then((response) => {
  //       console.log("added to list", response);
  //       this.$router.push("/loved-it");
  //       location.reload();
  //     });
  //   },
  // },
};
</script>
