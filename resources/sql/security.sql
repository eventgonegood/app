-- name: sql-insert-identity
-- adds a new identity
INSERT INTO security.identities (password, email)
VALUES (:password, :email)
RETURNING identity_id, password, email;


-- name: sql-all-identities
-- select all identities
SELECT *
FROM security.identities;

-- name: sql-find-identity-by-username
-- find an identity by its username
SELECT *
FROM security.identities
WHERE email = :email
