-- migrate:up
CREATE TABLE
  sub_categories (
    id int not null auto_increment,
    main_id int,
    PRIMARY KEY(id),
    FOREIGN KEY (main_id) REFERENCES main_categories (id)
  );
-- migrate:down
DROP TABLE sub_categories;