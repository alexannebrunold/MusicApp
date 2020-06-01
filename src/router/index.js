import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import MusicApp from "../views/MusicApp.vue"
Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/musicApp",
		name: "MusicApp",
		component: MusicApp,
	},
]

const router = new VueRouter({
	routes,
})

export default router
