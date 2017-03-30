import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import download from '@/views/download'
import wechat from '@/views/wechat'
import recruitstudents from '@/views/recruitstudents'
import interaction from '@/views/interaction'
import about from '@/views/about'

Vue.use(Router)

const router=new Router({
	routes: [
	{
		path: '/',
		name: '首页',
		component: Index
	},
	{
		path: '/download',
		name: '下载',
		component: download
	},
	{
		path: '/about',
		name: '关于我们',
		component: about
	},
	{
		path: '/wechat',
		name: '官方微信',
		component: wechat
	},
	{
		path: '/recruitstudents',
		name: '学校招生',
		component: recruitstudents
	},	
	{
		path: '/interaction',
		name: '学员互动',
		component: interaction
	}
	]
})
export default router;