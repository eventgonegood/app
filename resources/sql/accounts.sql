-- name: find-user
-- finds a user by username
SELECT *
FROM accounts.users
WHERE username = :username