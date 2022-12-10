-- migrate:up
CREATE TABLE
  products (
    id int NOT NULL auto_increment PRIMARY KEY,
    sub_categories int,
    product_name VARCHAR(200),
    product_image VARCHAR(3000),
    size VARCHAR(50),
    price decimal(10,2),
    product_description VARCHAR(1000),
    feeling VARCHAR(50),
    skin_type VARCHAR(50),
    `usage` VARCHAR(1000),
    texture VARCHAR(1000),
    flavor varchar(50),
    amount_used VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sub_categories) REFERENCES sub_categories (id)
  );

-- migrate:down
DROP TABLE products;