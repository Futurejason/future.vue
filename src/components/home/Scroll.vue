<template>
  <div class="scroll">
    <div class="scroll-back">
      <div class="scroll-read">
        <ul :class="{ aniamtedTop }">
          <li v-for="item in scrollLest" :key="item.id">
            <img src="@/assets/img/scroll.png" alt="" />
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aniamtedTop: false,
      scrollLest: [
        {
          id: 0,
          title:
            "报名动态|报名动态_点击线路|报名动态_线路_【普莫雍措＋羊湖】包办边防证.",
        },
        {
          id: 1,
          title: "拉萨市区上门接，藏地老司机带你玩转蓝冰圣湖！散拼1日游！",
        },
        {
          id: 2,
          title:
            "报名动态|报名动态_点击线路|报名动态_线路_【普莫雍措＋羊湖】包办边防证.",
        },
        {
          id: 3,
          title: "拉萨市区上门接，藏地老司机带你玩转蓝冰圣湖！散拼1日游！",
        },
        {
          id: 4,
          title:
            "报名动态|报名动态_点击线路|报名动态_线路_【普莫雍措＋羊湖】包办边防证.",
        },
        {
          id: 5,
          title: "拉萨市区上门接，藏地老司机带你玩转蓝冰圣湖！散拼1日游！",
        },
      ],
    };
  },
  mounted() {
    setInterval(this.showScroll, 2000);
  },
  methods: {
    showScroll() {
      this.aniamtedTop = true;
      setTimeout(() => {
        this.scrollLest.push(this.scrollLest[0]);
        this.scrollLest.shift();
        this.aniamtedTop = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.aniamtedTop {
  transition: all 0.5s;
  margin-top: -0.66666666rem;
}
.scroll-back {
  position: relative;
  background: url("/img/scroll.png") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 1.333333rem;
}
.scroll-read {
  position: absolute;
  right: 0;
  width: 8.133333rem;
  height: 1.333333rem;
  overflow: hidden;
}
li {
  font-size: 0.35rem;
  color: #333;
  line-height: 0.666666rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li img {
  width: 0.16rem;
  height: 0.16rem;
}
</style>