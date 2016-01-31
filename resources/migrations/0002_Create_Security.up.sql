CREATE SCHEMA security
  AUTHORIZATION ape;

CREATE TABLE security.identities
(
  identity_id serial NOT NULL,
  email text NOT NULL,
  password text NOT NULL,
  CONSTRAINT pk_users PRIMARY KEY (identity_id),
  CONSTRAINT uq_users_email UNIQUE (email)
);
ALTER TABLE security.identities
  OWNER TO ape;
