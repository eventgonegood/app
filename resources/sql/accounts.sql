-- name: sql-all-organizations
-- find all organizatio
SELECT o.id AS organization_id,
       o.name AS organization_name,
       u.id AS user_id,
       u.name AS user_name,
       u.username,
       r.name AS role
FROM accounts.organizations AS o
  INNER JOIN accounts.memberships AS m
    ON o.id = m.organization_id
  INNER JOIN accounts.users AS u
    ON u.id = m.user_id
  INNER JOIN accounts.roles AS r
    ON r.id = m.role_id;

-- name: find-organization
-- finds an organization by name
SELECT o.id, o.name
FROM accounts.organizations AS o
WHERE o.name = :name;

-- name: get-roles
-- get all roles
SELECT r.id, r.name
FROM accounts.roles AS r;

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
