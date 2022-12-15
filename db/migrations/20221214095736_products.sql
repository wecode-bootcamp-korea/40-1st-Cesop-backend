-- migrate:up
CREATE TABLE
  products (
    id int NOT NULL auto_increment PRIMARY KEY,
    main_category_id int,
    sub_category_id int,
    product_name VARCHAR(200),
    product_image VARCHAR(3000),
    size VARCHAR(50),
    price int,
    product_description VARCHAR(1000),
    feeling VARCHAR(50),
    texture_image VARCHAR(3000),
    howtouse VARCHAR(1000),
    texture VARCHAR(1000),
    flavor varchar(50),
    amount_used VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (main_category_id) REFERENCES main_categories (id),
    FOREIGN KEY (sub_category_id) REFERENCES sub_category_id (id)
  );

-- migrate:down
DROP TABLE products;