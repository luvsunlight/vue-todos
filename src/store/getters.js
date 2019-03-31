export default {
	currentList: state => {
		return state.todoLists.find(list => list.id === state.currentListId)
	},
	sortedTodos: (state, getters) => {
		if (getters.currentList) {
			let todos = getters.currentList.todos
			let doneTodos = []
			todos = todos.filter(todo => {
				if (todo.checked) {
					doneTodos.push(todo)
					return false
				} else {
					return true
				}
			})
			doneTodos.forEach(todo => {
				todos.push(todo)
			})
			return todos
		}
	},
	getListById: state => id => {
		return state.todoLists.find(list => list.id === id)
	},
	doneTodos: (state, getters) => {
		if (getters.currentList) {
			return getters.currentList.todos.filter(todo => {
				return todo.checked ? true : false
			}).length
		}
	},
	undoneTodos: (state, getters) => {
		if (getters.currentList) {
			return getters.currentList.todos.filter(todo => {
				return todo.checked ? false : true
			}).length
		}
	}
}
