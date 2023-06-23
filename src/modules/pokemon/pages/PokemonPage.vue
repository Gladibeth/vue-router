<template>
  <!-- <h1>Pokemon Page <span>{{ this.$route.params.id }}</span></h1> -->
  <h1>Pokemon Page <span>{{ id }}</span></h1>
</template>

<script>
export default {
  data(){
    return{
      id: null
    }
  },
  created(){
    
    const { id } = this.$route.params
    console.log(id)
    this.id = id;
  }
}
</script>