-- name: sql-all-organizations
-- find all organizations
SELECT o.id,
       o.name
FROM accounts.organizations AS o;

-- name: sql-all-users
-- load all users
SELECT u.id,
       u.name,
       u.username
FROM accounts.users AS u;

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

-- name: sql-add-profile
-- inserts a new profile
INSERT INTO accounts.profiles (identity_id,
  name, address_1, address_2, address_3, city, state,
  postal_code, emergency_contact_name, emergency_contact_phone,
  waiver, waiver_signed_on, created_on)
VALUES
  (:identity_id, :name, :address_1, :address_2, :address_3, :city, :state, :postal_code,
    :emergency_contact_name, :emergency_contact_phone,
   :waiver, NOW(), NOW());
