<template>
  <div class="list">
    <br />
    <br />
    <br />
    <br />
    <br />
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
