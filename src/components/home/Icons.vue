<template>
  <div class="icons">
    <ul >
      <li v-for="item in iconsLest" :key="item.id">
        <img :src='item.imgUrl' alt="" />
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  data(){ 
    return{
      iconsLest:[
        {
          id:0,
          imgUrl: "/img/icons1.png",
          title:'国内游'
        },
        {
          id:1,
          imgUrl: 'img/icons2.png',
          title:'国内游'
        },
        {
          id:2,
          imgUrl: 'img/icons3.png',
          title:'国内游'
        },
        {
          id:3,
          imgUrl: 'img/icons4.gif',
          title:'国内游'
        },
        {
          id:4,
          imgUrl: 'img/icons5.png',
          title:'国内游'
        },
        {
          id:5,
          imgUrl: 'img/icons6.png',
          title:'国内游'
        },
        {
          id:6,
          imgUrl: 'img/icons7.png',
          title:'国内游'
        },
        {
          id:7,
          imgUrl: 'img/icons8.png',
          title:'国内游'
        },
        {
          id:8,
          imgUrl: 'img/icons9.png',
          title:'国内游'
        },
        {
          id:9,
          imgUrl: 'img/icons10.png',
          title:'国内游'
        }
      ]
    }
  }
}
</script>


<style scoped>
.icons {
  padding-top: 0.4rem;
  border-bottom: 1px solid #eeeeee;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
}
ul li{
  margin: 0 .4rem;
  padding-bottom: 0.4rem;
}
ul li img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: .2rem;
  width: 1.06666667rem;
  height: 1.06666667rem;
}
ul li p {
  text-align: center;
  font-size: 0.3733333rem;
  color: #333333;
}
</style>