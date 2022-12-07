-- migrate:up
CREATE TABLE
  cart_items (
    id int not null auto_increment,
    user_id int,
    product_id int,
    PRIMARY Key (id),
    Foreign Key (user_id) REFERENCES products(id),
    Foreign Key (product_id) REFERENCES users (id)
  );

-- migrate:down
DROP TABLE cart_items;
