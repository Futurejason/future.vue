<template>
  <div class="tabs">
    <div class="banner-swiper">
      <swiper ref="mySwiper" :options="swiperOptions" class="swiperfather">
        <swiper-slide v-for="item in TabsLest" :key="item.id">
          <div class="tabscss">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TabsLest: [
        {
          id: 0,
          imgUrl: "img/tabs1.gif",
          title: "签证",
        },
        {
          id: 1,
          imgUrl: "img/tabs2.png",
          title: "签证",
        },
        {
          id: 2,
          imgUrl: "img/tabs3.png",
          title: "签证",
        },
        {
          id: 3,
          imgUrl: "img/tabs4.gif",
          title: "签证",
        },
        {
          id: 4,
          imgUrl: "img/tabs5.gif",
          title: "签证",
        },
        {
          id: 5,
          imgUrl: "img/tabs6.png",
          title: "签证",
        },
        {
          id: 6,
          imgUrl: "img/tabs7.png",
          title: "签证",
        },
        {
          id: 7,
          imgUrl: "img/tabs8.png",
          title: "签证",
        },
        {
          id: 8,
          imgUrl: "img/tabs9.png",
          title: "签证",
        },
        {
          id: 9,
          imgUrl: "img/tabs10.png",
          title: "签证",
        },
      ],
      swiperOptions: {
        slidesPerView: 4.6,
      },
    };
  },
};
</script>

<style scoped>
.tabs {
  padding: 0.3em;
}
.tabscss {
  margin: 0 .2rem;
}
.tabscss img {
  display: block;
  margin: 0 auto;
  width: 0.7733333rem;
  height: 0.7733333rem;
}
.tabscss p {
  text-align: center;
  font-size: 0.373333rem;
}
</style>
