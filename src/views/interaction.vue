<template>
	<div>
		<my-header></my-header>
		<interaction-list></interaction-list>
		<small-school></small-school>
	</div>
</template>
<script>
import MyHeader from '../components/header.vue'
import InteractionList from '../components/interaction_list.vue'
import SmallSchool from '../components/small_school.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		MyHeader,
		InteractionList,
		SmallSchool
	}
}
</script>