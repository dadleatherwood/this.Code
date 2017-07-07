UPDATE challenges_users
SET completed = $3
WHERE challenge_id = $1 AND user_id = $2
RETURNING *;
