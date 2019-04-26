<template>
  <div class="root">
    <p>Add New Title Option</p>
    <h1><p>{{ list.name }}</p></h1>
    <div v-for='title in list.titles'>
      <router-link v-bind:to="'/titles/' + title.body.id + '/?media_type=' + title.media_type">{{ title.body.original_title }}</router-link>
      <div v-if='title.body.original_name'>
        <router-link v-bind:to="'/titles/' + title.body.id + '/?media_type=' + title.media_type">{{ title.body.original_name }}</router-link>
      </div>
    </div>
    
  </div>
</template>




<script>
import axios from "axios";
export default {
  data: function() {
    return {
      list: []
    };
  },
  created: function() {
    axios.get("/api/lists/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.list = response.data;
    });
    console.log(this.$route.params.id);
    console.log(this.$route);
  },
  methods: {}
};
</script>