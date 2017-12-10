<template>
  <div id="app">
    <h1> Simple app</h1>
    <app-Output></app-Output>
    <app-Input></app-Input>
  </div>
</template>


<script>
import input from './Input.vue';

export default {
components :{
  'app-Input' : input
}  
}
</script>



