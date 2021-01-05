<template>
  <div class="like">
    <div class="like-lest" v-for="item in likeLest" :key="item">
      <div class="like-top">
        <div>
          <span>{{ item.title }}</span>
        </div>
        <p>更多></p>
      </div>
      <div class="like-bottom">
        <div
          class="bottom-header"
          :style="{ background: 'url(' + item.imgUrl + ') no-repeat' }"
          @click="toDetail(item)"
        >
          <div>
            <span>{{ item.Introduction }}</span>
            <span>￥{{ item.price }}</span>
          </div>
        </div>
        <ul>
          <li v-for="v in item.cityList" :key='v'
          @click="toDetail(v)">
            <img :src="v.imgUrl" alt="" />
            <span>{{v.title}}</span>
            <span>￥{{v.price}}起</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["likeLest"],
  data(){
    return{
      item:''
    }
  },
  methods:{
    toDetail(item,v){
      this.$router.push({
        path:'/detail',
        query:{
          item,
          v,
        }
      })
    }
  }
};
</script>


<style scoped>
.like {
  margin: 0.3rem 0 3rem;
  font-size: 0.35rem;
}
.like-top {
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
}
.like-top div {
  font-size: 0.5rem;
}
.like-top div span {
  margin-left: 0.4rem;
  font-weight: 500;
}
.like-top div::before {
  position: absolute;
  content: "";
  background: #fed101;
  width: 0.1rem;
  height: 0.5rem;
}
.like-top p {
  color: #999;
  margin-right: 0.4rem;
  font-weight: 300;
  font-size: 0.4rem;
}
.like-bottom {
  margin: 0.2rem 0.4rem 0;
}
.bottom-header {
  position: relative;
  height: 4.4666rem;
  background-size: 100%;
  border-radius: .2rem;
}
.bottom-header div {
  position: absolute;
  bottom: 0.25rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.bottom-header div span {
  margin: 0 0.2rem;
}
.bottom-header div span:nth-child(1) {
  display: block;
  flex: 1;
  font-size: 0.5rem;
  color: #fff;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bottom-header div span:nth-child(2) {
  font-size: 0.45rem;
  font-weight: 500;
  color: orange;
}
ul {
  display: flex;
  justify-content: space-between;
  margin: 0.1rem 0;
  
}
ul li {
  display: flex;
  flex-direction: column;
  width: 2.96rem;
 
}
ul li img {
  width: 100%;
  height: 1.95rem; 
  border-radius: .15rem;
}
ul li span:nth-child(2) {
  width: 100%;
  margin: 0.1rem;
  font-size: 0.4rem;
  font-weight: 700;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul li span:nth-child(3) {
  margin: 0.1rem;
  width: 100%;
  font-size: 0.3rem;
  font-weight: 500;
  display: block;
  color: orange;
}
</style>