const { postDao } = require('../models')

const getAllPosts = async () => {
	return await postDao.getAllPosts()
}

const getPostsByUser = async (id) => {
	const posts = await postDao.getPostsByUserId(id)
	return posts
}

module.exports = { 
	getAllPosts,
	getPostsByUser
}
