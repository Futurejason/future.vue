<template>
  <div class="banners">
    <div class="swipers">
      <img :src="item.imgUrl" alt="" />
    </div>
    <div class="banner-size"><p>{{item.title}}</p></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            item:'',
            v:''
        }
    },
  activated() {
    if(this.v!=''){
      this.item=this.$route.query.v;
    }else{
      this.item=this.$route.query.item;
    }
  },
};
</script>


<style scoped>
.banners{
    width: 100%;
    overflow: hidden;
}
.swipers {
  width: 100%;
  height: 5.64rem;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
.banner-size{
    width: 100%;
    font-size: .5rem;
    font-weight: 500;
    line-height: .6rem;
    word-wrap: break-word;
}
.banner-size p{
    margin: .2rem .4rem;
}
</style>
