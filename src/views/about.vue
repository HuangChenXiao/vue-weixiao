<template>
	<div>
		<my-header></my-header>
		<about-main></about-main>
	</div>
</template>
<script>
import MyHeader from '../components/header.vue'
import AboutMain from '../components/about_main.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		MyHeader,
		AboutMain,
	}
}
</script>