-- migrate:up
CREATE TABLE
  users (
    id int not null auto_increment,
    email varchar(100),
    last_name varchar(100),
    first_name varchar(100),
    password varchar(200),
    phone_number varchar(150),
    point decimal,
    created_at timestamp,
    modified_at timestamp,
    PRIMARY KEY(id)
    
  );

-- migrate:down
DROP TABLE users;
