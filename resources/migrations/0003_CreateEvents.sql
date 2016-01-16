CREATE SCHEMA events
  AUTHORIZATION egg;

CREATE TABLE events.events
(
  id serial NOT NULL,
  payload jsonb NOT NULL,
  created_on timestamp NOT NULL DEFAULT current_date,
  CONSTRAINT pk_events PRIMARY KEY (id)
);
ALTER TABLE events.events
  OWNER TO egg;
