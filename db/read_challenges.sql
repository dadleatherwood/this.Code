SELECT * FROM challenges
LEFT OUTER JOIN challenges_users
ON id = challenge_id AND user_id = $1
ORDER BY id;
