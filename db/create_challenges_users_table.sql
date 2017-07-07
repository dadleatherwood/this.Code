CREATE TABLE IF NOT EXISTS challenges_users (
  challenge_id integer references challenges(id),
  user_id integer references users(id)
);
