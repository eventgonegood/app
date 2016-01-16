CREATE SCHEMA accounts
  AUTHORIZATION egg;

CREATE TABLE accounts.organizations
(
  id serial NOT NULL,
  name text NOT NULL,
  owner int NOT NULL, --identity_id
)
ALTER TABLE accounts.organizations
 OWNER TO egg;

--links an identity to an organization
-- allows name and email overrides
CREATE TABLE accounts.profiles
(
  id serial NOT NULL,
  identity_id int NOT NULL, --identity_id
  organization_id int NOT NULL,
  name text NOT NULL,
  email_address text NOT NULL,
  CONSTRAINT pk_profiles PRIMARY KEY (id),
  CONSTRAINT uq_profiles_name UNIQUE (name)
);
ALTER TABLE accounts.profiles
  OWNER TO egg;

