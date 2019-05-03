<template>
  
</template>


<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      lists: [],
      newListName: ""
    
    };
  },
  
  created: function() {
    console.log(this);
    axios.get('api/lists').then(response => {
      this.lists = response.data;
    });
  },


  methods: {
    createList: function() {
      // console.log('this is the New List button');
      var params = {
        name: this.newListName
      };
      axios.post('/api/lists', params).then(response => {
        this.lists.push(response.data);
      });
    }
  }
};
  

</script>