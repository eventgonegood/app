-- name: sql-insert-identity
-- adds a new identity
INSERT INTO security.identities (name, username, password)
VALUES (:name, :username, :password)
RETURNING id, name, username, password;


-- name: sql-all-identities
-- select all identities
SELECT *
FROM security.identities;

-- name: sql-find-identity-by-username
-- find an identity by its username
SELECT *
FROM security.identities
WHERE username = :username
