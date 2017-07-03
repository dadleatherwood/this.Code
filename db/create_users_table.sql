CREATE TABLE IF NOT EXISTS users (
  id serial primary key,
  first_name varchar(255),
  last_name varchar(255),
  email varchar(255),
  username varchar(255),
  password varchar(255),
  imageurl varchar(255),
  streak_count integer,
  badge_id integer,
  rank_id integer
);
