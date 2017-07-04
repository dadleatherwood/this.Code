CREATE TABLE IF NOT EXISTS challenges (
  id serial primary key,
  name varchar(255),
  difficulty varchar(255),
  description varchar(255),
  value integer,
  topic_id integer references topics (id)
);
