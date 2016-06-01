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
	 <div class="title bg">
	 	<i class="arrowleft icon-angle-left"></i>
	 	<span>国内/国际机票</span>
	 </div>
	 <div class="banner">
	 	<img src="../assets/images/hotelbanner.png" alt="">
	 </div>
	 <div class="line padd">
	 	<div class="tab_box">
	 		<ul>
	 			<li v-for="lis in list" v-bind:class = "{'blu' : lis.isTrue}" v-on:click = "change($index)">{{lis.name}}</li>
	 		</ul>
	 	</div>
	 	<div class="gps_box clearfix">
	 		<div class="location loc fl">
	 			<span class="get_location">广州</span>
	 		</div>
	 		<i class="flash fl"></i>
	 		
	 		<div class="destination loc fr" >
		 		<a class = "a_link" v-link="{name:'cities'}">
		 			<span class="get_destination">{{ messages}}</span>
		 		</a>
	 		</div>
	 	</div>
	 	<div class="date_sele">
	 		<div class="live_in">
	 			<span class="livein_time">5月24日</span><i class="weekday_in">周二</i>
	 		</div>
	 		<div v-show = "show" class="leave">
	 			<span class="leave_time">5月25日</span><i class="weekday_out">周三</i>
	 		</div>
	 	</div>
	 	<div class="search_box">
	 		<input type = "button" value = "查询" name = "search" class = "search_ticket" id="search_ticket">
	 		<i class="icon-search"></i>
	 	</div>
	 </div>
</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return{
				show: false,
				messages: "目的地",
				list:[
					{
						name: '单程',
						isTrue: true,
						//show: false
				},
					{
						name: '往返',
						isTrue: false
					}
				]

			}
		},
		methods: {
					change: function(index){
						var len = this.list.length;
						for(var i = 0; i<len; i++){
							if(index == i && this.list[i].isTrue ===false){
								this.list[index].isTrue = true;
								if(this.show===false){
									this.show = !this.show;
								}
							}else if(index != i && this.list[i].isTrue===true){
								this.list[i].isTrue = false;
								if(this.show===true){
									this.show = !this.show;
								}
							}
						}
					}
				},
		events:{
			'child-msg':function(msg){
				this.messages.push(msg);
			}
		},
		component: require('./cities.vue')	
	}
</script>
<style type="text/css">
	#app{background: #fff;}
	.title{box-sizing:content-box;text-align: center;height: 0.45rem;line-height: 0.45rem;font-size: 0.17rem;padding: 0 0.24rem;color: #333;}
	.arrowleft{font-size: 0.3rem;color: #42A0FF;float: left;line-height: 0.45rem;}
	.banner{width:100%;height:auto;}
	.banner img{width:100%;}
	.padd{width: 100%; padding: 0 0.14rem; box-sizing: border-box;}
	.line .tab_box{height: 0.44rem;}
	.line .tab_box ul{position: relative; font-size: 0; height: 0.44rem; width: 100%; display: flex; border-bottom: 1px solid #e6e6e6;}
	.line .tab_box li{display: inline-block; flex: 1; height: 0.44rem; line-height: 0.44rem; font-size: 0.14rem; color: #666; text-align: center;}
	.line .tab_box li.blu{color: #42a0ff; border-bottom: 2px solid #42a0ff;}
	.line .tab_box ul:after{position: absolute; content: ''; display: block; border-left: 1px solid #e6e6e6; height: 0.32rem; left: 50%; top: 0.06rem;}
	.gps_box .loc{width: 39%; height: 0.6rem; border-bottom: 1px solid #e6e6e6;}
	.gps_box .loc span{display: block; height: 0.6rem; line-height: 0.6rem; color: #333; font-size: 0.2rem; font-weight: bold;}
	.gps_box .loc .get_location{text-align: left;}
	.gps_box .loc .get_destination{text-align: right;}
	.gps_box .flash{display: inline-block; width: 0.32rem; height: 0.32rem; margin: 0.14rem 0.18rem 0; background: url(../assets/images/change.png) no-repeat center; background-size: 100%;}
	.a_link{display: block;}
	.date_sele{display: flex; position: relative;}
	.date_sele .live_in,.date_sele .leave{flex: 1; height: 0.6rem;}
	.date_sele span{display: inline-block; width: 80%; height: 0.6rem; line-height: 0.6rem; color: #333; font-size: 0.2rem; font-weight: bold;}
	.date_sele span.leave_time{text-align: right;}
	.date_sele i{display: block; position: absolute; width: 0.3rem; height: 0.14rem; top: 0.24rem; font-style: normal; color: #999;}
	.date_sele i.weekday_in{left: 0.76rem;}
	.date_sele i.weekday_out{right: 0rem;}
	.search_ticket{border: none; width: 100%; height: 0.44rem; line-height: 0.44rem; text-align: center; background: #ffb44b; border-radius: 0.05rem; color: #fff; font-size: 0.2rem;}
	.search_box{position: relative; margin-top: 0.2rem;}
	.search_box i{display: block; position: absolute; width: 0.18rem; height: 0.18rem; top: 0.12rem; left: 37%; color: #fff; font-size: 0.18rem;}
</style>