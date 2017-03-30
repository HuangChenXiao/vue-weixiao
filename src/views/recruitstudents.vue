<template>
	<div>
		<my-header></my-header>
		<recruitstudents-list></recruitstudents-list>
		<small-school></small-school>
	</div>
</template>
<script>
import MyHeader from '../components/header.vue'
import RecruitstudentsList from '../components/recruitstudents_list.vue'
import SmallSchool from '../components/small_school.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		MyHeader,
		RecruitstudentsList,
		SmallSchool
	}
}
</script>