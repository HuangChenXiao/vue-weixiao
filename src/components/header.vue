<template>
	<div class="be-box">
		<router-link to="/" class="box-flex1 logo"><img src="../assets/image/logo.png"></router-link>
		<a href="javascript:;" class="box-flex1 menu"><img src="../assets/image/menu.png">
			<em class="menu_item"></em>
			<ul class="menu_item">
				<li><router-link to="/">首页</router-link></li>
				<li><router-link to="/download">客户端APP</router-link></li>
				<li><router-link to="/wechat">详情</router-link></li>
				<li><router-link to="/about">关于我们</router-link></li>
			</ul>
		</a> 
	</div>
</template>
<script>
import jquery from '../assets/js/jquery.js'
export default{
	data(){
		return{

		}
	},
	mounted:function(){
   		this.jreadyload()
  	},
	methods:{
		jreadyload(){
			$(function(){
				$(".menu").click(function(event) {
					if($(".menu_item").is(":hidden"))
					{
						$(".menu_item").show()
					}
					else{
						$(".menu_item").hide()
					}
				});
			})
			$(document).mouseup(function(e){
			  if($(e.target).parent(".menu").length==0){
			    $(".menu_item").hide("fast");
			  }
			})
		}
	}
}
</script>
<style scoped>
a{display: block;}
.be-box{
	padding: .2rem .4rem;
	background: #fff;
	border-bottom: 2px solid #eee;
}
.logo {
	height: .5rem;
	margin-top: 0.05rem;
}
.logo img{
	height: 100%;
}
.menu {
	height: .6rem;
	text-align: right;
}
.menu img{
	height: 100%;
}
.menu a{
	position: relative;
}
.menu_item{
	display: none;
}
.menu > em{
	position: absolute;
	top: .8rem;
	right: .54444rem;
	width: .3rem;
	height: .3rem;
	background:#666;
	transform:rotate(45deg);
	-ms-transform:rotate(45deg); 	/* IE 9 */
	-moz-transform:rotate(45deg); 	/* Firefox */
	-webkit-transform:rotate(45deg); /* Safari 和 Chrome */
	-o-transform:rotate(45deg); 	/* Opera */
}
.menu ul {
	position: absolute;
	right: .2rem;
	top: .9rem;
	width: 3rem;
	z-index: 99;
}
.menu ul li:first-child{
	border-top-left-radius: 0.05rem;
	border-top-right-radius: 0.05rem;
}
.menu ul li:last-child{
	border-bottom-left-radius: 0.05rem;
	border-bottom-right-radius: 0.05rem;
}
.menu ul li{
	background: #666;
	float: left;
	width: 100%;
}

.menu ul li a{
	color: #fff;
	text-align: center;
	padding:.1rem;
	border-bottom: 1px solid #BEBEBE;
	font-size: .3rem;
}

</style>