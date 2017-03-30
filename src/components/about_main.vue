<template>
	<div class="container" id="container">
		<section>
			<h3>关于我们</h3>
			<p>
				学校组织涵盖招生就业处、团委、学生会、教务处等多个校园服务机构，解决方案努力帮助学校组织成
				为校园内最智能的掌上服务能手，通过业务预约办理、招生就业指导、社团服务运作等多维度的线上运
				作，高效办理校园事务，展现互联网+校园新风貌
			</p>
		</section>
		<section>
			<h3>联系我们</h3>
			<div class="about"><img src="../assets/image/about.png"></div>
			<div class="company">公司地址：<span>厦门市高新技术园乔丹中心704</span></div>
			<div class="phone">联系电话：<span>18965103282</span></div>
			<div class="map">
				<el-amap vid="amapDemo" :zoom="15" :center="center">
				  <el-amap-marker v-for="marker in markers" :position="marker.position"></el-amap-marker>
				</el-amap>
			</div>
		</section>
</div>
</template>
<script>
export default{
	data() {
		return {
			markers: [],
			center:[118.16113,24.525084]
		};
	},
	mounted() {
    // 姑且N为2
    // 这样地图上就添加了两个人
    this.markers = [
    {
    	position: [118.16113,24.525084]
    }
    ];
     // 模拟实时更新位置
    // 开启一个1s的轮训，每个人的经纬度都自增0.00001
    // const step = 0.00001;
    // setInterval(() => {
    // 	this.markers.forEach((marker) => {
    // 		marker.position = [marker.position[0] + step, marker.position[1] + step];
    // 	});
    // }, 1000);
},
updated(){
	// document.getElementById("amapDemo").style.height="200px"
}
}
// onload=function(){
// 	document.getElementById("amapDemo").style.height="200px"
// }

</script>
<style scoped>
section:first-child{
	margin-bottom: .2rem;
}
section {
	background: #fff;
	color: #333;
}
section h3{
	font-size: .38888rem;
	padding: .3rem .5rem .1rem .5rem;
	border-bottom: 1px solid #e5e5e5;
}
section p{
	padding: 0 .5rem;
	line-height: .9rem;
	font-size: .32222rem;
	color: #808080;
}
.about{
	padding: 0 .45555rem;
}
.about img{
	height: 1.4rem
}
.company{
	padding: 0 .5rem;
	font-size: .32222rem;
}
.phone{
	padding: .3rem .5rem;
	font-size: .32222rem;
}
.map{
	padding: .3rem .5rem;
	height: 7rem;
	margin-bottom: 1rem;
}

</style>