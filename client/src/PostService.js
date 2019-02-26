import axios from "axios";

const url = "/api/todos/";

class PostService {
	// Get todos
	static getTodos(listParams) {
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(url, {
					params: listParams
				});
				const data = res.data;
				resolve(data);
			} catch(err) {
				reject(err);
			}
		})
	}
	
	// Create todo
	static addTodo(text) {
		return axios.post(url, {
			text
		});
	}

	// Delete todo
	static deleteTodo(id) {
		return axios.delete(`${url}${id}`);
	}

	// Update todo
	static updateTodo(id, completed, deadline) {
		return axios.put(url, {
			id, 
			completed,
			deadline
		});
	}
}

export default PostService;