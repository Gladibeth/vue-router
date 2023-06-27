<template>
  <div>
    <router-link to="/">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemonid', params: {id: 150}}">Pokemon por id</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>


<style  scoped>
  div{
    padding: 0 30px
  }

  div a{
    color: #2c3e50;
    font-weight: 600;
    margin: 0 10px;
  }
  a.router-link-exact-active{
    color: #42b983;
  }
</style>
