<template>
  <div>
    <compHeader :myStudents="students"/>
    <compFooter :firstName="fName" :lastName="lName" :age="myAge" @updateValue = "fName = $event"/>
    <listHealper>
      <ul slot=listItem>
        <li v-for="li in list" :key="li">{{li}}</li>
    </ul>
    <p slot="para">Hello World, From Bangladesh</p>
    </listHealper>
  </div>
</template>
<script>
  import compHeader from './components/header_footer/Header';
  import compFooter from './components/header_footer/Footer';
  import listHealper from './components/listHelper.vue';
  export default{
    data(){
      return{
        students:['Imran Hossain', 'Taylor', 'Jone Doe', 'Hasin'],
        fName : 'Tamim',
        lName : 'Iqbal',
        myAge : 33,
        list: ['HTML', 'CSS', 'JAVA', 'PHP']
      }
    },
    components: {
      compHeader,
      compFooter,
      listHealper
    }
  }
</script>
<style>
 
</style>