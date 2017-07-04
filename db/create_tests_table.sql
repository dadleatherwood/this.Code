CREATE TABLE IF NOT EXISTS tests (
  id serial primary key,
  challenge_id integer references challenges (id),
  test_input varchar(255),
  test_output varchar(255)

);
