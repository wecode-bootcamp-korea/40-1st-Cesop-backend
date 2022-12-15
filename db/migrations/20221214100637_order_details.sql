-- migrate:up
CREATE TABLE
  order_details (
    id int not null auto_increment,
    order_id int,
    price int,
    total int,
    payment int,
    PRIMARY KEY(id),
    FOREIGN KEY (order_id) REFERENCES orders (id)
 );
 -- migrate:down
DROP TABLE order_details;