<template>
  <header class="city">
    <span>选择城市</span>
    <i class="iconfont" @click="toHome">&#xe608;</i>
  </header>
</template>
<script>
export default {
    methods:{
        toHome(){
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>
<style scoped>
.city{
    position: relative;
width: 100%;
height: 1.173rem;
background: #fed101;
line-height: 1.173rem;
text-align: center;
font-size: .45rem;
color: #333;
}
.city span{
    font-weight: 500;
}
.city i{
position: absolute;
right: .4rem;
font-weight: 500;
font-size: .5rem;
}
</style>