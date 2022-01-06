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
              <img :src="`${list.movie.box_art}`" />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="App 1"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-for="list in lists" v-bind:key="list.id">
      <img :src="`${list.movie.box_art}`" />
      <br />
      <i>{{ list.category }}</i>
    </div>
  </div>
</template>

<style>
.list {
  text-align: center;
  color: white;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      list: [],
      lists: [],
    };
  },
  created: function () {
    this.indexLists();
  },
  methods: {
    indexLists: function () {
      axios.get("/lists").then((response) => {
        this.lists = response.data;
        console.log("list", response.data);
      });
    },
    addMovie: function () {
      axios.post("/lists", this.movie).then(() => {
        this.$router.push("/lists");
      });
    },
  },
};
</script>
