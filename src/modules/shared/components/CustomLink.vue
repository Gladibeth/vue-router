<template>
  <a v-if="linkExternal" target="_blank" :href="link.to" class="normal-link">{{ link.name }}</a>

  <!-- slots {href, isActive} -->
  <router-link v-else :to="router" v-slot="{ isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link' "> {{ link.name  }}</a>
  </router-link>
</template>
<script>
export default {
  props: {  
    link:{
      type: Object,
      required: true,
    }
  },
  computed:{
    linkExternal(){
      return this.link.to.startsWith('http')
    },
    router(){
      return this.link.id === undefined ? { name: this.link.to }: { name: this.link.to, params:{id: this.link.id }}
    }
  }
 }
</script>

<style scoped>
  .is-active{
    color: #42b983;
  }
  .normal-link{
    color: #c6c5c5;
    text-decoration: none;
  }

</style>