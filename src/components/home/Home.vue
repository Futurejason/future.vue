<template>
  <div class="home">
    <Banner></Banner>
    <Icons></Icons>
    <Tabs></Tabs>
    <Scroll></Scroll>
    <Swiper></Swiper>
    <Spike :spikeLest='spikeLest'></Spike>
    <Like :likeLest='likeLest'></Like>
    <Footer></Footer>
  </div>
</template>

<script>
import {mapState} from 'vuex';// eslint-disable-line no-unused-vars
import Banner from "./Banner.vue";
import Icons from "./Icons.vue";
import Tabs from "./Tabs.vue";
import Scroll from "./Scroll.vue";
import Swiper from "./Swiper.vue";
import Spike from "./Spike.vue";
import Like from "./Like.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Banner,
    Icons,
    Tabs,
    Scroll,
    Swiper,
    Spike,
    Like,
    Footer
  },
  data(){
    return{
      spikeLest:[],
      likeLest:[],
      changeCity:''
    }
  },
  computed:{
    ...mapState(['cityName'])
  },
  mounted(){
    this.changeCity=this.cityName;
    this.http();
  },
  methods:{
    http(){
      let That = this;// eslint-disable-line no-unused-vars
      this.axios.get("api/dataHome.json")
      .then((res)=>{
        let data=res.data.data;
        data.forEach((item) => {
          if(item.city==That.cityName){
             That.spikeLest=item.spikeList;
             That.likeLest=item.likeList;
          }else{
            data=res.data.data[0];
             That.spikeLest=data.spikeList;
             That.likeLest=data.likeList;
          }
        });
      })
    }
  },
  activated(){
    if(this.changeCity != this.cityName){
      this.http();
      this.changeCity=this.cityName;
    }
  }
};
</script>
