<template>
  <div class="spike">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiperfather">
      <swiper-slide v-for="item in spikeLest" :key="item.id">
        <div @click="toDetail(item)">
          <div class="spike-top">
            <img src="@/assets/img/spike1.png" />
            <span class="juli">距离结束</span>
            <count-down
              :currentTime="item.startTime"
              :startTime="item.startTime"
              :endTime="item.endTime"
              :dayTxt="':'"
              :hourTxt="':'"
              :minutesTxt="':'"
              :secondsTxt="''"
            >
            </count-down>
          </div>
          <div class="spike-bottom">
            <img :src="item.imgUrl" alt="" />
            <div class="bottom-title">
              <p>
                {{ item.title }}
              </p>
              <div class="bottom-place">
                <span>￥{{ item.price }}</span>
                <span class="place-last">还剩{{ item.num }}个</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import CountDown from "vue2-countdown";
export default {
  props: ["spikeLest"],
  components: {
    CountDown,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  methods: {
    toDetail(item) {
      this.$router.push({
        path: "/detail",
        query: {
          item,
        },
      });
    },
  },
};
</script>
<style scoped>
.spike {
  width: 100%;
  height: 4.377777rem;
  overflow: hidden;
}
.spike-top {
  width: 100%;
  height: 1.293333rem;
  display: flex;
  align-items: center;
  font-size: 0.35rem;
}
.spike-top img {
  width: 1.89333333rem;
  height: 0.4133333rem;
}
.spike-top div {
  margin-left: 0.2rem;
  font-size: 0.35rem;
}
.spike-top >>> div span:not(:first-child) {
  background: #777;
  margin: 0 0.1rem;
  border-radius: 0.1rem;
  font-size: 0.5rem;
}
.spike-top >>> div span span {
  background: #777;
  border-radius: 0.1rem;
  margin: 0 0.1rem;
  font-size: 0.5rem;
}
.spike-top >>> div i {
  font-size: 0.5rem;
  font-style: normal;
}
.spike-bottom {
  margin: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.spike-bottom img {
  width: 3.0933333rem;
  height: 2.12rem;
}
.spike-bottom .bottom-title {
  width: 5.86rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.spike-bottom .bottom-title p {
  line-height: 0.38rem;
  font-size: 0.35rem;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.spike-bottom .bottom-place {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.3rem;
  font-size: 0.35rem;
}
.place-last {
  border: 1px solid #666;
  background: orange;
  padding: 0.1rem;
}
.spike-top span[data-v-20d10c74] div[data-v-20d10c74] p span span {
  background: #777;
}
.juli {
  font-size: 0.5rem;
  margin-left: 0.2rem;
  font-weight: 600;
}

.swiper-container {
  overflow: visible;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -0.3rem;
}
</style>
