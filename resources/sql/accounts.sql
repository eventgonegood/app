-- name: find-user
-- finds a user by username
SELECT *
FROM accounts.users
WHERE username = :username

-- name: find-organization
-- finds an organization by name
SELECT *
FROM accounts.organizations
WHERE name = :name

-- name: get-roles
-- get all roles
SELECT *
FROM accounts.roles

-- name: find-user-roles
-- finds a user and the users roles
SELECT u.*, r.name AS role
FROM accounts.users AS u
INNER JOIN accounts.memberships AS m ON m.user_id = u.id
INNER JOIN accounts.roles AS r ON m.role_id = r.id
WHERE username = :username;
