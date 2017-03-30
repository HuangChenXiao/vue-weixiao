<template>
	<div>
		<my-header></my-header>
		<detail-list></detail-list>
		<small-school></small-school>
	</div>
</template>
<script>
import MyHeader from '../components/header.vue'
import DetailList from '../components/detail_list.vue'
import SmallSchool from '../components/small_school.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		MyHeader,
		DetailList,
		SmallSchool
	}
}
</script>