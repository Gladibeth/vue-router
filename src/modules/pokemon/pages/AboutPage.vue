<template>
  <h1>About Page</h1>
  <h3>{{ name }}</h3>
  <button @click="changeName">Change</button>
</template>


<script>
export default {
  data(){
    return{
      name: "Gladibeth",
    }
  },
  methods:{
    changeName(){
      this.name = "Estrella"
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('Created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeupdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeunmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  activated(){
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  errorCaptured(){
    console.log('errorCaptured')
  },
  renderTracked(){
    console.log('renderTracked')
  },
  renderTriggered(){
    console.log('renderTriggered')
  },
  
}
</script>