<template>
	<div class="container">
		<header>他们正在使用新课微校</header>
		<p class="list">
				<ul class="clearfix">
					<li><router-link to=""><img src="../assets/image/new1.png"></router-link></li>
					<li><router-link to=""><img src="../assets/image/new2.png"></router-link></li>
					<li><router-link to=""><img src="../assets/image/new3.png"></router-link></li>
					<li><router-link to=""><img src="../assets/image/new4.png"></router-link></li>
					<li><router-link to=""><img src="../assets/image/new5.png"></router-link></li>
					<li><router-link to=""><img src="../assets/image/new6.png"></router-link></li>
				</ul>
			</p>
	</div>
</template>
<style scoped>
.container{
	background: #fff;
}
header{
	font-size: .2rem;
	padding:.5rem;
}
.list ul{
	width: 100%;
	border-bottom: 0.05rem solid #eee;
}
.list ul li{
	float: left;
	width: 33.3333%;
	text-align: center;
	border-left: 0.05rem solid #eee;
	border-top: 0.05rem solid #eee;
	padding: .32222rem;
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