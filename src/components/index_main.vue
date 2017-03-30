<template>
	<div class="container">
		<div class="title">
			<p>5000家学校</p>
			<i>5000家学校共同的选择</i>
		</div>
		<div class="main">
			<img src="../assets/image/main.png">
		</div>
		<div class="btn">
			<img src="../assets/image/register.png">
		</div>
	</div>
</template>
<script>
import jquery from '../assets/js/jquery.js'
export default{
	data(){
		return{

		}
	},
	created(){
		$("html").css("background","#fff !important")
	}
}
</script>
<style scoped>
.container{
	background: #fff;
	height: 100%;
}
.title{
	text-align: center;
	padding: .8rem 0 .5rem 0;
}
.title p{
	font-size: .53333rem;
	margin-bottom: .2rem;
	color: #333;
}
.title i{
	font-size: .4rem;
	color: #9D9D9D;
}
.main{
	width: 100%;
	text-align: center;
}
.main img{
	width: 70%;
}
.btn{
	width: 100%;
	text-align: center;
}
.btn img{
	width: 70%;
}
</style>