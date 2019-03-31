import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

const state = {
	currentListId: "",
	todoLists: []
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

store.watch(
	state => state.todoLists,
	val => {
		log("CHANGE:", val)
		localStorage.setItem("vue-todos", JSON.stringify(val))
	},
	{
		deep: true
	}
)

export default store
