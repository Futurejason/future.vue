<template>
  <div class="swipers">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiperfather">
      <swiper-slide><img src="@/assets/img/swiper1.png" alt="" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/swiper2.png" alt="" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions:{
          pagination: {
          el: ".swiper-pagination",
        }
      }
    };
  },
};
</script>

<style scoped>
.swiper-slide{
  width: 100%;
  height: 3.2rem;
}
img{
  width: 100%;
  height: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
</style>
