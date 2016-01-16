CREATE SCHEMA workouts
  AUTHORIZATION egg;

CREATE TABLE workouts.movements
(
  id serial NOT NULL,
  name text NOT NULL,
  description text NULL,
  CONSTRAINT pk_movements PRIMARY KEY (id),
  CONSTRAINT uq_movements_name UNIQUE (name)
);
ALTER TABLE workouts.movements
  OWNER TO egg;

INSERT INTO workouts.movements (name, description)
VALUES ('Deadlift','A Deadlift is ...'),
       ('Back Squat', 'A Back Squat is ...'),
       ('Thruster', 'A Thruster is ...'),
       ('Pull Up', 'A Pull Up is ...');
