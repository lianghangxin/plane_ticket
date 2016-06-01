<template>
	<div id="calendar">
		<table>
			<caption>{{year}}年{{month}}月{{date}}</caption>
			<thead>
				<tr>
					<th v-for="item in weeks">{{item}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="itemr in tr">
					<td v-for="itm in itemr.one" track-by="$index">
							{{itm}}
					</td>
					
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				year:0,
				month:0,
				day:0,
				hour:0,
				today:[],
				days:0,
				weeks:['日','一','二','三','四','五','六'],
				months:['01','02','03','04','05','06','07','08','09','10','11','12'],
				rows:'',
				today1:0,
				tr:[
				]
			}
		},
		created(){
			var now = new Date();
			this.year = now.getFullYear();
			this.month = this.months[now.getMonth()+1];//当月
			// this.month = parseInt(this.month)+1
			this.date = now.getDate();//当天
			var days = new Date(this.year,this.month+1,0)//这个月的最后一天
			var firstday = new Date(this.year,this.month,1).getDay();//一个月的第一天
			var dayNember = days.getDate();//这个月有多少天
			var rows = Math.ceil((dayNember+firstday)/7)//多少行
			var rowmeber = rows*7//总共多少个空格
			var nextday = rowmeber - (dayNember+firstday)//最后一行的有多少个空格
			this.rows = new Array(rows)
			for (let i = 0; i < rows; i++) {
				this.tr[i] = new Object();
				this.tr[i].one = new Array();
				for (let k = 0;k < 7; k++) {
				    var trs = i*7+k;
				    if(i==0&&k<firstday){//第一行
				    	this.tr[i].one[k] = '';
				    }else if(i == rows-1&&k>6-nextday){//最后一行
				    	this.tr[i].one[k] = '';
				    }else{
				    	this.tr[i].one[k] = trs - firstday+1
				    }  
				}
			}	
			// console.log(rows);
			console.log(this.tr);
			console.log(rowmeber);
			console.log(nextday)
			// console.log(dayNember);
			// console.log(rows);
			// console.log(days.getDate());
			// console.log(now.getFullYear());
			// console.log(now)
		},
		computed:{
				one2(){
					// var now = new Date();
					// return now.getFullyear();
				}		
		},
		methods:{
			one(){
				var data  = new Date();
				console.log(data);
			}
		}
	}
</script>
<style type="text/css">
	#calendar{width:100%;}
	#calendar table {width:100%;}
	#calendar table tbody tr{width:100%;box-sizing:border-box;height:0.45rem;}
	#calendar table tbody tr td{text-align:center;}
	/* #calendar table tbody tr td{border:1px solid red;} */
</style>