-- migrate:up
CREATE TABLE
  products (
    id int not null auto_increment,
    name varchar(100),
    categories_id int,
    skin_type varchar(50),
    price decimal(10,2),
    texture varchar(50),
    ingredient varchar(100),
    description text,
    image_url varchar(3000),
    created_at timestamp,
    modified_at timestamp,
    PRIMARY KEY(id),
    FOREIGN KEY (categories_id) REFERENCES sub_categories (id)
  );

-- migrate:down
DROP TABLE products;
