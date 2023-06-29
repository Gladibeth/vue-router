<template>
  <div>
    <!-- <router-link :to="{ name: 'pokemon' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemonid', params: {id: 150} }">Pokemon por id</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
 -->
    <CustomLink 
      v-for="link in links"
      :key="link.to"
      :link="link"
    />

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  data(){
    return{
      links: [
        {to: 'pokemon-home', name: 'Pokemons'},
        {to: 'pokemonid', name: 'Pokemon por ID', id:40},
        {to: 'pokemon-about', name: 'About'},

        {to: 'dbz-about', name: 'About-DBZ'},
        {to: 'dbz-characters', name: 'Characters'},
        
        {to: 'https://google.com', name: 'Google'},
      ]
    }
  },
  components:{
    CustomLink: defineAsyncComponent(() => import('./CustomLink'))
  }
}
</script>


<style  scoped>
  div{
    padding: 0 30px
  }

  div a{
    color: #2c3e50;
    font-weight: 600;
    margin: 0 10px;
  }
  /* a.router-link-exact-active{
    color: #42b983;
  } */
</style>
