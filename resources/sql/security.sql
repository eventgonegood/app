-- name: sql-insert-identity
-- adds a new identity
INSERT INTO security.identities (name, username, password, email)
VALUES (:name, :username, :password, :email)
RETURNING id, name, username, password, email;


-- name: sql-all-identities
-- select all identities
SELECT *
FROM security.identities;

-- name: sql-find-identity-by-username
-- find an identity by its username
SELECT *
FROM security.identities
WHERE username = :username
