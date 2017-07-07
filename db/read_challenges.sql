SELECT * FROM challenges
LEFT OUTER JOIN challenges_users
ON id = challenge_id;
