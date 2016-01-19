CREATE SCHEMA security
  AUTHORIZATION ape;

CREATE TABLE security.identities
(
  id serial NOT NULL,
  name text NOT NULL DEFAULT ''::text,
  email text NOT NULL,
  password text NOT NULL,
  CONSTRAINT pk_users PRIMARY KEY (id),
  CONSTRAINT uq_users_username UNIQUE (username)
);
ALTER TABLE security.identities
  OWNER TO ape;
