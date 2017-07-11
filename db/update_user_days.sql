UPDATE users
SET days_of_code = days_of_code + 1, last_login = now()
WHERE id = $1
RETURNING days_of_code, last_login;
