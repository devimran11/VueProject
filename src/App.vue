<template>
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <h1>{{profession}}</h1>
    <compHeader/>
    <compFooter/>
  </div>
</template>
<script>
  import compHeader from './components/header_footer/Header';
  import compFooter from './components/header_footer/Footer';
  export default{
    data(){
      return{
        name: 'Imran Hossain',
        age: 25,
        profession: 'Student'
      }
    },
    components: {
      compHeader,
      compFooter
    }
  }
</script>
<style>
  
</style>