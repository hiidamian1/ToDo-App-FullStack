import axios from 'axios';

const url = '/api/todos/';

class PostService {
	// Get todos
	static getTodos() {
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(data);
			} catch(err) {
				reject(err);
			}
		})
	}
	
	// Create todos
	static addTodo(text) {
		return axios.post(url, {
			text
		});
	}

	// Delete todos
	static deleteTodo(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default PostService;