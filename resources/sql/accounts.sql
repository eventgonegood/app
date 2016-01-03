-- name: sql-all-organizations
-- find all organization
SELECT o.id, o.name
FROM accounts.organizations AS o

-- name: find-organization
-- finds an organization by name
SELECT o.id, o.name
FROM accounts.organizations AS o
WHERE o.name = :name

-- name: get-roles
-- get all roles
SELECT r.id, r.name
FROM accounts.roles AS r

-- name: find-user-by-username
-- finds a user and the users roles
SELECT u.id, u.name, u.username, u.password, o.name AS organization, r.name AS role
FROM accounts.users AS u
  INNER JOIN accounts.memberships AS m 
    ON m.user_id = u.id
  INNER JOIN accounts.roles AS r 
    ON m.role_id = r.id
  INNER JOIN accounts.organizations AS o 
    ON o.id = m.organization_id
WHERE u.username = :username;
