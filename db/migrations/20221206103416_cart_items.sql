-- migrate:up
CREATE TABLE
  cart_items (
    id int not null auto_increment,
    user_id int,
    product_id int,
    product_name varchar(100),
    quantity int,
    price int,
    sub_total int,
    PRIMARY Key (id),
    Foreign Key (user_id) REFERENCES users(id),
    Foreign Key (product_id) REFERENCES products (id)
  );
-- migrate:down
DROP TABLE cart_items;