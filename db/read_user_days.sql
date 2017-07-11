select days_of_code, age(now(), last_login) > interval '24 hours' as greater_than_24, age(now(), last_login) < interval '48 hours' as less_than_48 from users
where id = $1;
