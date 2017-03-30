<template>
	<div>
		<my-header></my-header>
		<index-main></index-main>
	</div>
</template>
<script>
import MyHeader from '../components/header.vue'
import IndexMain from '../components/index_main.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		MyHeader,
		IndexMain
	}
}
</script>