import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import Mock from "mockjs"
import Data from "./data/data"

export default {
	start() {
		let mock = new MockAdapter(axios)
		mock.onGet("/list/init").reply(() => {
			return [
				200,
				{
					currentListId: Data.currentListId,
					lists: Data.lists
				}
			]
		})
	}
}
