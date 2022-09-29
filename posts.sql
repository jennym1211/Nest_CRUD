
CREATE TABLE "state" (
    id INTEGER PRIMARY KEY NOT NULL,
    name text,
    abbreviation text,
    created_at timestamp,
    updated_at timestamp
);


CREATE TABLE "user" (
    id INTEGER PRIMARY KEY NOT NULL,
    user_uuid uuid UNIQUE,
    first_name text,
    last_name text,
    address_one text,
    address_two text,
    city text,
    zipcode int,
    created_at timestamp,
    updated_at timestamp,
   "state_id" INTEGER NOT NULL,
  FOREIGN KEY ("state_id") REFERENCES "state"(id)

);

CREATE TABLE post (
    id INTEGER NOT NULL PRIMARY KEY,
    title text,
    body json,
    created_at timestamp,
    updated_at timestamp,
  "user_uuid" uuid NOT NULL,
  FOREIGN KEY ("user_uuid") REFERENCES "user"(user_uuid)
);