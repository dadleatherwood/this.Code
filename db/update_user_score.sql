UPDATE users
SET score = score + $1
WHERE id = $2
RETURNING *;
