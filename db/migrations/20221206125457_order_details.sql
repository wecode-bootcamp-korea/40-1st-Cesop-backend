-- migrate:up
CREATE TABLE
  order_details (
    id int not null auto_increment,
    order_id int,
    total decimal(10,2),
    price decimal(10,2),
    payment decimal(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY (order_id) REFERENCES orders (id)
 );

-- migrate:down
DROP TABLE order_details;
