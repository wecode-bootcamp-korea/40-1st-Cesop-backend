-- migrate:up
CREATE TABLE
  sub_category_id (
    id int not null auto_increment,
    name varchar(100),
    main_id int,
    PRIMARY KEY(id),
    FOREIGN KEY (main_id) REFERENCES main_categories (id)
  );
-- migrate:down
DROP TABLE sub_category_id;