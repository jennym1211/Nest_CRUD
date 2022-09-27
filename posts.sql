CREATE TABLE posts (
    Id int NOT NULL PRIMARY KEY,
    Title text,
    Body json,
    user_uuid int,
    Created_at timestamp,
    Updated_at timestamp
);


CREATE TABLE users (
    Id int NOT NULL PRIMARY KEY,
    UUid uuid,
    First_name text,
    Last_name text,
    Address_one text,
    Address_two text,
    City character,
    State int,
    Zipcode int,
    Created_at timestamp,
    Updated_at timestamp
);

CREATE TABLE states (
    Id int NOT NULL PRIMARY KEY,
    Name text,
    Abbreviation text,
    Created_at timestamp,
    Updated_at timestamp
);
