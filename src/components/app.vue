<template>
<div id="app">
<!--   <h1>Hello App!</h1>
  <p> -->
    <!-- 使用指令 v-link 进行导航。 -->
<!--     <a v-link="{ path: '/foo' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
  </p> -->
  <!-- 路由外链 -->
  <!-- <router-view></router-view> -->
 <div class="title">
 	<i class="arrowleft icon-angle-left"></i>
 	<span>国内酒店</span>
 </div>
 <div class="banner">
 	<img src="../assets/images/hotelbanner.png" alt="">
 </div>
 <div class="arr">
 	<span class="left"><em>上海</em><i class="icon-angle-right"></i></span><span class="right"><i class="icon-map-marker"></i><em>附近</em></span>
 </div>
</div>
</template>
<style type="text/css">
	.title{box-sizing:content-box;text-align: center;height: 0.45rem;line-height: 0.45rem;font-size: 0.17rem;padding: 0 0.24rem;color: #333;}
	.arrowleft{font-size: 0.3rem;color: #42A0FF;float: left;line-height: 0.45rem;}
	.banner{width:100%;height:auto;}
	.banner img{width:100%;}
	.arr{height:0.55rem;width:100%;border-bottom:1px solid #e5e5e5;}
	.arr .left em{font-size:0.17rem;font-style: normal;font-weight: normal;}
	.arr .left i{font-size:0.13rem;color:#666;float:right;line-height:0.55rem;}
	.arr .right em{font-size:0.1rem;display:block;color:#42A0FF;font-style: normal;font-weight: normal;}
	.arr .right i{font-size:0.34rem;display:block;color:#42A0FF;}
	.arr span{display:inline-block;box-sizing:border-box;}
	.arr .left{width:82%;border-right:1px solid #e5e5e5;padding:0 0.3rem 0 0.4rem;line-height:0.55rem;}
	.arr .right{width:18%;text-align:center;height:0.55rem;vertical-align: middle;}
</style>