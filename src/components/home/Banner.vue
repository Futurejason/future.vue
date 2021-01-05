<template>
  <div class="banner">
    <transition
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutLeft"
    >
      <div class="banner-left animated" v-show="toshow"></div>
    </transition>
    <div class="banner-herder">
      <div class="banner-top">
        <div class="top-left"
        @click="toCity">{{cityName}} <i class="iconfont">&#xe64a;</i></div>
        <div class="top-center"><i class="iconfont">&#xe62d;</i>泰国</div>
        <div class="top-right">
          <img src="@/assets/img/show.png" @click="toShow" />
        </div>
      </div>
      <div class="banner-swiper">
        <swiper ref="mySwiper" :options="swiperOptions" class="swiperfather">
          <swiper-slide><img src="@/assets/img/banner1.png" alt=""></swiper-slide>
          <swiper-slide><img src="@/assets/img/banner2.png" alt=""></swiper-slide>
          <swiper-slide><img src="@/assets/img/banner3.png" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "Banner",
  data() {
    return {
      toshow: false,
      swiperOptions: {
          loop:true,
          pagination: {
          el: ".swiper-pagination",
        }
      }
    };
  },
  computed:{
    ...mapState(['cityName'])
  },
  methods: {
    toShow() {
      this.toshow = !this.toshow;
    },
    toCity(){
      this.$router.push({
        path:"./city"
      })
    }
  },
};
</script>
<style scoped>
.banner-left {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background: #000000;
  width: 6.666666rem;
  height: 100%;
}

.banner-herder {
  position: relative;
}
.banner-top {
  position: absolute;
  left: 0;
  top: 0.5rem;
  height: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.top-left {
  padding: 0.2rem 0.4rem;
  color: #ffffff;
  font-size: 0.426666rem;
}
.top-center {
  flex: 1;
  color: #333;
  background: #fff;
  border-radius: 0.1rem;
  font-size: 0.3733333rem;
  padding: 0.2rem 0.2rem;
}
.top-right {
  padding: 0.2rem 0.4rem;
}
.top-right img {
  width: 0.53333rem;
  height: 0.53333rem;
}
.banner-swiper {
  width: 100%;
  height: 5.6rem;
}
.banner-swiper img {
  width: 100%;
  height: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
</style>