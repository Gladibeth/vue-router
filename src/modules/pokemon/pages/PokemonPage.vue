<template>
  <!-- <h1>Pokemon Page <span>{{ this.$route.params.id }}</span></h1> -->
  <h1>Pokemon Page <span>{{ id }}</span></h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props:{
    id: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      //id: this.$route.params.id,
      pokemon: null,
    }
  },
  created(){
    
    /* const { id } = this.$route.params
    console.log(id)
    this.id = id; */

    this. getPokemon()
  },
  methods:{
    async getPokemon(){
      try{  
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(result => result.json())
        console.log(pokemon)
        this.pokemon = pokemon
      }catch(e){
        console.log(e.message)
      }
    }
  },
  watch:{
    id(){
      this.getPokemon()
    }
  }
}
</script>