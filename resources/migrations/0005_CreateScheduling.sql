CREATE SCHEMA scheduling
  AUTHORIZATION ape;

CREATE TYPE scheduling.day_of_week AS ENUM ('monday','tuesday','wednesday','thursday','friday','saturday','sunday');

CREATE TABLE scheduling.levels
(
  id serial NOT NULL,
  organization_id int NOT NULL,
  name text NOT NULL,
  CONSTRAINT pk_levels PRIMARY KEY (id),
  CONSTRAINT uq_organization_level_name UNIQUE (organization_id, name)
);
ALTER TABLE scheduling.levels
  OWNER TO ape;

CREATE TABLE scheduling.classes
(
  id serial NOT NULL,
  organization_id int NOT NULL,
  day_of_week scheduling.day_of_week NOT NULL,
  level_id int NOT NULL,
  title text NOT NULL,
  start_at time NOT NULL,
  duration interval NOT NULL,
  CONSTRAINT pk_classes PRIMARY KEY (id),
  FOREIGN KEY (organization_id) REFERENCES accounts.organizations (id),
  FOREIGN KEY (level_id) REFERENCES scheduling.levels (id)
);
ALTER TABLE scheduling.classes
  OWNER TO ape;
