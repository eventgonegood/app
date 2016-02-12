CREATE SCHEMA accounts
  AUTHORIZATION ape;

CREATE TABLE accounts.organizations
(
  id serial NOT NULL,
  name text NOT NULL,
  created_on timestamp NOT NULL DEFAULT current_date,
  CONSTRAINT pk_organizations PRIMARY KEY (id)
);
ALTER TABLE accounts.organizations
  OWNER TO ape;

CREATE TABLE accounts.profiles
(
  id serial NOT NULL,
  identity_id int NULL,
  name text NOT NULL,
  --data specific to one relationship for this identity
  address_1 text NOT NULL,
  address_2 text NULL,
  address_3 text,
  city text NULL,
  state text NULL,
  postal_code text NULL,
  emergency_contact_name text NULL,
  emergency_contact_phone text NULL,
  created_on timestamp NOT NULL DEFAULT current_date,
  CONSTRAINT pk_profiles PRIMARY KEY (id)
);
ALTER TABLE accounts.profiles
  OWNER TO ape;

CREATE TABLE accounts.roles
(
  id serial NOT NULL,
  name text NOT NULL,
  created_on timestamp NOT NULL DEFAULT current_date,
  CONSTRAINT pk_roles PRIMARY KEY (id)
);
ALTER TABLE accounts.roles
  OWNER TO ape;
