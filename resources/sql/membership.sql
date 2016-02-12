-- name: sql-memberships-by-organization
-- get em
SELECT
  id,
  organization_id,
  profile_id,
  role_id,
  stripe_token,
  created_on
FROM accounts.memberships
WHERE organization_id = :organization_id
