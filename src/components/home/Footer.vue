<template>
  <footer>
    <a href="">
      <img src="@/assets/img/footer1.png" alt="" />
      <span>首页</span>
    </a>
    <a href="">
      <img src="@/assets/img/footer2.png" alt="" />
      <span>订单</span>
    </a>
    <a href="">
      <img src="@/assets/img/footer3.png" alt="" />
      <span>个人中心</span>
    </a>
  </footer>
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 1.466666rem;
  background: #ffffff;
  display: flex;
}
footer a {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
footer a img {
  margin: 0 auto;
  width: 0.72rem;
  height: 0.72rem;
}
footer a span {
  font-size: 0.35rem;
  text-align: center;
  margin-top: 0.1rem;
}
</style>
