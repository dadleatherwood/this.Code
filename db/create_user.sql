INSERT INTO users (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)
RETURNING * ;
