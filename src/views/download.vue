<template>
	<div>
		<my-header></my-header>
		<download-main></download-main>
	</div>
</template>
<script>
import MyHeader from '../components/header.vue'
import DownloadMain from '../components/download_main.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		MyHeader,
		DownloadMain,
	}
}
</script>