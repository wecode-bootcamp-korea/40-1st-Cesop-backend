-- migrate:up
CREATE TABLE
  orders (
    id int not null auto_increment,
    product_id int,
    quantity int,
    shipping_status text,
    completed_order boolean,
    PRIMARY KEY(id),
    FOREIGN KEY (product_id) REFERENCES products (id)
 );
-- migrate:down
DROP TABLE orders;