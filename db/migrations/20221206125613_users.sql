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
    PRIMARY KEY(id),
    CONSTRAINT users_email_fkey UNIQUE(email),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

-- migrate:down
DROP TABLE users;
