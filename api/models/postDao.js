const dataSource = require("./dataSource");

const getAllPosts = async () =>
  await dataSource.query(`SELECT * FROM products`);


const getPostsByUserId = async (id) => {
	console.log(id);
  const results = await dataSource.query(
    `
		SELECT 
		*
		FROM 
		products p
		WHERE 
		p.sub_categories = '${id}'`
  );


  return results;
};

module.exports = {
  getAllPosts,
  getPostsByUserId
};
