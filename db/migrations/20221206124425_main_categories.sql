-- migrate:up
CREATE TABLE
  main_categories (
    id int not null auto_increment,
    PRIMARY KEY(id) 
  );

-- migrate:down
DROP TABLE main_categories;
