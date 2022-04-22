<template>
  <div class="hated-it">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>Hated It List</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="hatedit in hatedits" v-bind:key="hatedit.id">
            <div class="portfolio-wrap">
              <img :src="`${hatedit.movie.box_art}`" />
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
      hatedits: {},
    };
  },
  created: function () {
    axios.get("https://fathomless-tundra-47766.herokuapp.com/hatedits/").then((response) => {
      console.log("hated it", response);
      this.hatedits = response.data;
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
