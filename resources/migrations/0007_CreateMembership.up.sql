CREATE SCHEMA membership
  AUTHORIZATION ape;

CREATE TABLE membership.memberships
(
  id serial NOT NULL,
  organization_id int NOT NULL,
  profile_id int NOT NULL,
  waiver bit NOT NULL DEFAULT FALSE,
  waiver_text text NOT NULL DEFAULT '',
  cc_info text NULL,
  name text NOT NULL,
  CONSTRAINT pk_memberships PRIMARY KEY (id),
  CONSTRAINT uq_organization UNIQUE (organization_id, profile_id),
  FOREIGN KEY (organization_id) REFERENCES accounts.organizations (id),
  FOREIGN KEY (profile_id) REFERENCES accounts.profiles (id)
);
  ALTER TABLE membership.memberships
  OWNER TO ape;
