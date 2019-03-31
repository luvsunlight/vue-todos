import Mock from "mockjs"

export default {
	setCurrentTodoLists: (state, lists) => {
		state.todoLists = lists
	},
	setCurrentList: (state, id) => {
		state.currentListId = id
	},
	addList: state => {
		state.todoLists.push({
			id: Mock.Random.guid(),
			name: "newList",
			todos: []
		})
	},
	deleteList: (state, listId) => {
		state.todoLists = state.todoLists.filter(list => list.id !== listId)
	},
	editList: (state, { listId, name }) => {
		state.todoLists = state.todoLists.map(list => {
			if (list.id === listId) {
				list.name = name
			}
			return list
		})
    },
    clearList: state => {
        state.todoLists = state.todoLists.map(list => {
			if (list.id === state.currentListId) {
				list.todos = list.todos.filter(todo => !todo.checked)
			}
			return list
		})
    },
	addTodo: (state, { listId, content }) => {
		state.todoLists = state.todoLists.map(list => {
			if (list.id === listId) {
				list.todos.push({
					id: Mock.Random.guid(),
					content: content,
					checked: false
				})
			}
			return list
		})
    },
    deleteTodo: (state, {listId, todoId}) => {
        state.todoLists = state.todoLists.map(list => {
			if (list.id === listId) {
				list.todos = list.todos.filter(todo => todo.id !== todoId)
			}
			return list
		})
    },
	editTodo: (state, { listId, todoId, content, checked }) => {
		state.todoLists = state.todoLists.map(list => {
			if (list.id === listId) {
				list.todos = list.todos.map(todo => {
					if (todo.id === todoId) {
						todo.content = content
						todo.checked = checked
					}
					return todo
				})
			}
			return list
		})
    }
}
