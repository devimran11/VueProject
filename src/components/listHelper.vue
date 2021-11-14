<template>
    <div>
        <hr>
         <slot name="listItem"></slot>
            I am a list healper
        <slot name="para"></slot>
        <hr>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
     ul li{
        color: red;
    }
</style>