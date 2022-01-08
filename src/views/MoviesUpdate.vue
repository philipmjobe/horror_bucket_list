<template>
  <div class="movies-update">
    <h2>{{ movie.name }}</h2>
    <p style="text-align: center"><img v-bind:src="movie.box_art" v-bind:alt="movie.name" class="thing" /></p>
  </div>
</template>
