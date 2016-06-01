<template>
	<div id="app1">
		<div class="pos">
			<div class="title bg">
			 	<i class="arrowleft icon-angle-left"></i>
			 	<span>选择到达城市</span>
			</div>
			<div class="search">
					<i class="icon-search"></i>
					<form action="">
						<input v-model="message" v-on:focus = "onfocus" v-on:blur = "blurs" v-on:keyup = "keyword(message)" type = "text" name = "city" class = "city_sear" id = "city_sear" placeholder="请输入城市名称">
					</form>
			</div>
		</div>
		<div class="auto_select">
			<ul>
				<li v-for="clas in autocity" v-on:click = "dispathCity(clas)">{{clas}}</li>
			</ul>
		</div>
		<div class="line1 padd bg">
			
			<div class="select_box">
		 		<ul>
		 			<li v-for="items in item" v-bind:class = "{'blu' : items.isTrue}" v-on:click = "citySele($index)">{{items.name}}</li>
		 		</ul>
		 	</div>
	 	</div>
	 	<div class="hot_city">
	 		<dl>
	 			<dt id = "hotCity">热门</dt>
	 			<dd class="bg" v-show = "show1" v-for = "hotcs in city[2]">{{ hotcs[1] }}</dd>
	 			<dd class="bg" v-show = "show2" v-for = "forehotcs in city[3]">{{ forehotcs[1] }}</dd>
	 		</dl>
	 		<dl v-show = "show1" v-for="citys in city[0]">
	 			<dt :id = "citys[0][4]">{{citys[0][4]}}</dt>
	 			<dd class = "bg" v-for = "citycole in city[0][$index]">{{citycole[1]}}</dd>
	 		</dl>
	 		<dl v-show = "show2" v-for = "forecity in city[1]">
	 			<dt>{{forecity[0][4]}}</dt>
	 			<dd class = "bg" v-for = "forecitycole in city[1][$index]">{{ forecitycole[1]}}</dd>
	 		</dl>
	 		<div class="side_nav">
	 			<ul>
	 				<li><a href="#hotCity">热门</a></li>
	 				<li v-for = "sideNav in city[4]"><a :href="'#'+sideNav">{{sideNav}}</a></li>
	 			</ul>
	 		</div>
	 	</div>
		<div class="cover" v-show = "show3"></div>
	</div>
</template>
<script type="text/javascript">
	import  Citylist from '../citylist.js';
	module.exports = {
		data:function(){
			return{
				item:[
					{
						name: '国内城市',
						isTrue: true,
						//show: true
				},
					{
						name: '国际城市',
						isTrue: false,
						//show: false
					}
				],
				show1:true,
				show2:false,
				show3:false,
				city:Citylist,
				message: '',
				autocity: ''
			}
		},
		created(){
			
			for(var i=0; i<2; i++){
				for(var j=0; j<this.city[i].length; j++){
					this.city[i][j].sort();
				}
			}
		},
		methods: {
					citySele: function(index){
						var len = this.item.length;
						for(var i = 0; i<len; i++){
							if(index == i && this.item[i].isTrue ===false){
								this.item[index].isTrue = true;
								this.show1 = !this.show1;
							}else if(index != i && this.item[i].isTrue===true){
								this.item[i].isTrue = false;
								this.show2 = !this.show2;
							}
						}
					},
					onfocus:function(){
						this.show3 = true;
					},
					blurs:function(){
						this.show3 = false;
					},
					dispathCity: function(vals){
						this.message = vals;
						if(this.message.trim()){
							this.$dispatch('child-msg',vals);

						}
						this.show4 = !this.show4;
					},
					keyword:function(val){
						var keymes = [];//用来获取input输入数据
						var keyinfo = [];//用来收集同字母信息
						var keycomp1 = [];//用来比较
						var keycomp2 = [];//用来比较
						var keycomp3 = [];//用来比较
						var keycomp4 = [];//用来比较
						var keycomp5 = [];//用来比较
						var keycomp6 = [];//用来比较
						var keycomp7 = [];//用来比较
						var keycomp8 = [];//用来比较
						var vals = val.toLowerCase();
						keymes = vals.split('');
						if(this.show1==true){
							for(var i=0; i<this.city[0].length; i++){
								for(var j=0; j<this.city[0][i].length; j++){
									//console.log(this.city[0][i][j][2]);
									//show1
									var piny1 = this.city[0][i][j][2].toLowerCase();//将字符转换成小写
									var piny2 = this.city[0][i][j][3].toLowerCase();
									var piny3 = this.city[0][i][j][4].toLowerCase();
									var piny4 = this.city[0][i][j][1];
									
									//show1
									keycomp1 = piny1.split('');
									keycomp2 = piny2.split('');
									keycomp3 = piny3.split('');
									keycomp4 = piny4.split('');
									
										switch (keymes.length) {
											case 1:
												if(keymes[0]==keycomp3[0]||keymes[0]==keycomp4[0]){
													keyinfo.push(this.city[0][i][j][1]);
												}
												break;
											case 2:
												if(keymes[0]==keycomp2[0]&&keymes[1]==keycomp2[1]||(keymes[0]==keycomp4[0]&&keymes[1]==keycomp4[1])){
													keyinfo.push(this.city[0][i][j][1]);
												}
												break;
											case 3:
												if(keymes[0]==keycomp1[0]&&keymes[1]==keycomp1[1]&&keymes[2]==keycomp1[2]){
													keyinfo.push(this.city[0][i][j][1]);
												}
												break;
											default:
												// statements_def
												break;
										}
										this.autocity = keyinfo;
									
									keycomp1 = [];
									keycomp2 = [];
									keycomp3 = [];
									keycomp4 = [];
								}
							}
						}else if (this.show2==true) {
							for(var i=0; i<this.city[1].length; i++){
								for(var j=0; j<this.city[1][i].length; j++){
									//show2
									var piny5 = this.city[1][i][j][2].toLowerCase();
									var piny6 = this.city[1][i][j][3].toLowerCase();
									var piny7 = this.city[1][i][j][4].toLowerCase();
									var piny8 = this.city[1][i][j][1];

									//show2
									keycomp5 = piny5.split('');
									keycomp6 = piny6.split('');
									keycomp7 = piny7.split('');
									keycomp8 = piny8.split('');
									switch (keymes.length) {
											case 1:
												if(keymes[0]==keycomp7[0]||keymes[0]==keycomp8[0]){
													keyinfo.push(this.city[1][i][j][1]);
												}
												break;
											case 2:
												if(keymes[0]==keycomp6[0]&&keymes[1]==keycomp6[1]||(keymes[0]==keycomp8[0]&&keymes[1]==keycomp8[1])){
													keyinfo.push(this.city[1][i][j][1]);
												}
												break;
											case 3:
												if(keymes[0]==keycomp5[0]&&keymes[1]==keycomp5[1]&&keymes[2]==keycomp5[2]){
													keyinfo.push(this.city[1][i][j][1]);
												}
												break;
											default:
												// statements_def
												break;
										}
										this.autocity = keyinfo;

									keycomp5 = [];
									keycomp6 = [];
									keycomp7 = [];
									keycomp8 = [];
								}
							}
						}
					}
				}
	}
</script>
<style type="text/css">
	[v-cloak]{
		display: none;
	}
	#app1{background: #f0f0f0; padding-top: 1rem;}
	.bg{background: #fff;}
	.pos{position: fixed; top: 0; width: 100%; background: #f2f2f2; z-index: 1000;}
	.title{ box-sizing:border-box; width: 100%; height: 0.45rem;line-height: 0.45rem;font-size: 0.17rem;padding: 0 0.14rem;color: #333;}
	.arrowleft{font-size: 0.3rem;color: #42A0FF;float: left;line-height: 0.45rem;}
	.padd{width: 100%; padding: 0 0.14rem; box-sizing: border-box;}
	.line1{}
	.line1 .select_box{height: 0.44rem; }
	.line1 .select_box ul{position: relative; font-size: 0; height: 0.44rem; width: 100%; display: flex; border-bottom: 1px solid #e6e6e6;}
	.line1 .select_box li{display: inline-block; flex: 1; height: 0.44rem; line-height: 0.44rem; font-size: 0.14rem; color: #666; text-align: center;}
	.line1 .select_box li.blu{color: #42a0ff; border-bottom: 2px solid #42a0ff;}
	.search{margin: 0.1rem auto; width: 92%; box-sizing: border-box; position: relative;}
	.search .city_sear{width: 100%; height: 0.35rem; text-indent: 0.3rem; border-radius: 0.06rem;}
	.search i{position: absolute; display: block; width: 0.16rem; height: 0.16rem; left: 0.1rem; top: 0.09rem; color: #999; font-size: 0.16rem;}
	.hot_city{width: 100%; box-sizing: border-box;}
	.hot_city dt{width: 100%; height: 0.32rem; line-height: 0.32rem; font-size: 0.14rem; color: #999; padding: 0 0.14rem; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; box-sizing: border-box;}
	.hot_city dd{width: 100%; height: 0.45rem; line-height: 0.45rem; font-size: 0.14rem; color: #333; padding: 0 0.14rem; border-bottom: 1px solid #e6e6e6; box-sizing: border-box;}
	.hot_city dd:last-child{border-bottom: none;}
	.side_nav{position: fixed; top: 1rem; right: 0; z-index: 1000;}
	.side_nav li{width: 0.35rem;height: 0.16rem;}
	.side_nav li a{display: block; height: 0.16rem; line-height: 0.16rem; text-align: center; font-size: 0.12rem; color: #42a0ff; }

	.auto_select{width: 100%; z-index: 2000; position: fixed; background: #fff;}
	.auto_select li{width: 100%; height: 0.36rem; line-height: 0.36rem; text-indent: 0.14rem;font-size: 0.14rem; color: #333; border-bottom: 1px solid #999;}
	/* 遮罩层 */
	.cover{position: fixed; width: 100%; height: 6rem; background: #000; opacity: 0.5; top: 1rem; z-index: 1000;}
</style>