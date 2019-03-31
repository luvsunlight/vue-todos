import Mock from "mockjs"
const COUNT = [1, 2, 3, 4, 5]
let lists = []
COUNT.map(() => {
	lists.push({
		id: Mock.Random.guid(),
		name: Mock.Random.name(),
		todos: COUNT.map(() => {
			return {
				id: Mock.Random.guid(),
				checked: Mock.Random.boolean(),
				content: Mock.Random.cparagraph(1)
			}
		})
	})
})

export default {
	currentListId: lists[0].id,
	lists: lists
}
