<template>
  <div class="list">
    <div class="dingwei">
      <p>定位/附近城市</p>
      <ul>
        <li v-for="item in mapCities" :key="item" @click="toHome(item.name)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="yikaitong">
      <p>已开通周边游站点</p>
      <ul>
        <li v-for="item in cities" :key="item" @click="toHome(item.name)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="hotcity">
      <p>热门玩乐城市</p>
      <ul>
        <li v-for="item in hotCities" :key="item" @click="toHome(item.name)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
  data() {
    return {
      mapCities: [],
      cities: [],
      hotCities: [],
    };
  },
  methods:{
      toHome(city){
          this.changeCity(city);
          this.$router.push({
              path:'/'
          })
      },
      ...mapMutations(['changeCity'])
  },
  mounted() {
    let That = this;
    this.axios.get("/api/city(1).json").then((res) => {
      let data = res.data.data;
      That.mapCities = data.mapCities;
      That.cities = data.cities;
      That.hotCities = data.hotCities;
    });
  },
};
</script>



<style scoped>
.list {
  color: #999;
  font-size: 0.45rem;
}
.list div {
  margin: 0.4rem 0 0 0.4rem;
}
.list div p {
  margin-bottom: 0.1rem;
}
.list div ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.list div ul li {
  margin-top: 0.2rem;
  margin-right: 0.4rem;
  padding: 0.2rem 0.5rem;
  border: #999 solid 1px;
  border-radius: 0.1rem;
}
</style>
