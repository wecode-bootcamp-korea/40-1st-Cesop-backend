-- migrate:up
CREATE TABLE
  main_categories (
    id int not null auto_increment,
    name varchar(100),
    PRIMARY KEY(id)
  );
-- migrate:down
DROP TABLE main_categories;