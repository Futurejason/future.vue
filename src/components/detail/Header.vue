<template>
  <header>
      <span @click="toHome" class="headerone">＜</span>
      <span>活动详情</span>
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
header{
    position: relative;
width: 100%;
height: 1.2rem;
background: #f7f7f7;
line-height: 1.2rem;
text-align: center;
font-size: .5rem;
}
.headerone{
    position: absolute;
    left: .4rem;
    display: block;
    color: #999999;
}
</style>