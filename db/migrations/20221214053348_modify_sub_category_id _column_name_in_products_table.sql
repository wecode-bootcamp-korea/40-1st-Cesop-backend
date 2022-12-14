-- migrate:up
ALTER TABLE products change sub_categories_id sub_category_id int;
-- migrate:down
DROP TABLE sub_category_id;