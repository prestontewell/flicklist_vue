<template>
  <div class="root">
    <h1><p>{{ list.name }}</p></h1>
    <div v-for='title in list.titles'>
      {{ title.original_title }}
      <div v-if='title.original_name'>
        {{ title.original_name }}
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
  },
  methods: {}
};
</script>