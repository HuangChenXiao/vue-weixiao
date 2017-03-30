<template>
	<div class="container">
		<div class="title">
			<p>新校微课APP客户端</p>
			<i>让招生变得更简单</i>
		</div>
		<div class="main">
			<img src="../assets/image/main1.png">
		</div>
		<footer>
			<div class="down">
			</div>
			<div class="qrcode">
				<!-- <img src="../assets/image/qrcode.png"> -->
			</div>
		</footer>
	</div>
</template>
<style scoped>
.container{
	background: #fff;
}
.title{
	padding: 1rem .5rem;
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
	height: 5rem;
    width: 8rem;
    border-radius: 8rem;
    margin: 0 1rem;
    text-align: center;
    margin-bottom: 1rem;
}
.main img{
	margin-left: -.2rem;
	width: 5rem;
}
footer{
	text-align: center;
    padding: 0rem .3rem 0rem .3rem;
}
.down{
	display: inline-block;
	width: 4.6rem;
	height: 3.5rem;
	background: url('../assets/image/androio_ios.png') no-repeat;
	background-size: 4.5rem 3.5rem;
}

.qrcode{
	display: inline-block;
	width: 4rem;
	height: 3.5rem;
	margin-left: .2rem;
	background: url('../assets/image/qrcode.png') no-repeat;
	background-size: auto 3.5rem;
}
</style>