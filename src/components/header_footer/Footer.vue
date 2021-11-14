<template>
    <div>
        Footer
        <h1>First Name: {{firstName}}</h1>
        <h1>Last Name: {{lastName}}</h1>
        <h1>age: {{age}}</h1>
        <button @click="updateName">Click Me</button>
    </div>
</template>
<script>
    export default{
        props: {
            firstName: String,
            lastName: String,
            age: Number
        },
        methods:{
            updateName(){
                this.$emit('updateValue', 'Anderson');
            }
        }
    }
</script>
<style scoped>
    div{
        color: green;
    }
</style>