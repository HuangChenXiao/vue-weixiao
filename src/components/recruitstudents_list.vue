<template>
	<div class="container">
		<nav class="clearfix">
			<ul class="clearfix">
				<li><router-link to="/wechat">官方微信</router-link></li>
				<li><router-link to="/recruitstudents" class="active">学校招生</router-link></li>
				<li><router-link to="/interaction">学员互动</router-link></li>
			</ul>
		</nav>
		<section>
			<em></em>
			<div class="content">
				<p class="title">官方微信解决方案</p>
				<p class="remark">
					所谓“互动式”教学模式，就是把教育活动看作是师生进行一种生命与生命的交往、沟通，把教学过程看作是一个动态发展着的教与学统一的交互影响和交互活动过程
				</p>
			</div>
			<p class="list">
				<ul class="clearfix">
					<li><router-link to=""><img src="../assets/image/wechat1.png"><span>信息发布</span></router-link></li>
					<li><router-link to=""><img src="../assets/image/wechat2.png"><span>课表查询</span></router-link></li>
					<li><router-link to=""><img src="../assets/image/wechat3.png"><span>新闻状态</span></router-link></li>
					<li><router-link to=""><img src="../assets/image/wechat4.png"><span>活动发布</span></router-link></li>
					<li><router-link to=""><img src="../assets/image/wechat5.png"><span>学员报名</span></router-link></li>
					<li><router-link to=""><img src="../assets/image/wechat6.png"><span>招生营销</span></router-link></li>
				</ul>
			</p>
		</section>
	</div>
</template>
<style scoped>

nav{
	background: #fff;
	margin-top: 0.02rem;
	margin-bottom: 0.2rem;
}
nav ul li{
    float: left;
    height: 1rem;
    line-height: 1rem;
    width: 33.3333%;
    text-align: center;
}
.active{
	color: #187FC4;
}
nav ul li a{ 
	display: block;
	font-size: .39999rem
}
section{
	position: relative;
	background: #fff;
	margin-bottom: 0.2rem;
}
section em{
	position: absolute;
    top: -.1rem;
    left: 4.7444rem;
    width: .5rem;
    height: .5rem;
    background: #fff;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
}
section .content{
	padding: .5rem;
}
section .content .title{
	font-size: .31111rem;
	margin-bottom: .3rem;
}
section .content .remark{
	font-size: .31111rem;
	color: #808080;
}
.list ul{
	width: 100%;
	border-bottom: 0.05rem solid #eee;
}
.list ul li{
	float: left;
	width: 33.3333%;
	text-align: center;
	border-left: 1px solid #eee;
	border-top: 1px solid #eee;
	padding: .12222rem;
}
.list ul li a{
	color: #009B4C;
	font-size: .25555rem;
	display: block;
	margin-bottom: .2rem
}
.list ul li a img{
	margin: 0 auto;
	display: block;
	margin-top: .1rem;
	padding-bottom: .1rem;
	height: 1rem;
}
</style>