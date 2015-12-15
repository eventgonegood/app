CREATE SCHEMA competitions
  AUTHORIZATION egg;

CREATE TABLE competitions.competitions
(
  id serial NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  hashtag text NOT NULL DEFAULT '#eventgonegood'::text,
  starts_on date NOT NULL,
  ends_on date NOT NULL,
  CONSTRAINT pk_competitions PRIMARY KEY (id),
  CONSTRAINT uq_competitions_name UNIQUE (name)
);


CREATE TABLE competitions.divisions
(
  id serial NOT NULL,
  competition_id int NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  CONSTRAINT pk_divisions PRIMARY KEY (id),
  FOREIGN KEY (competition_id) REFERENCES competitions.competitions (id)
);


CREATE TABLE competitions.events
(
  id serial NOT NULL,
  competition_id int NOT NULL,
  division_id int NOT NULL,
  name text NOT NULL,
  description text NOT NULL DEFAULT ''::text,
  CONSTRAINT pk_events PRIMARY KEY (id),
  FOREIGN KEY (competition_id) REFERENCES competitions.competitions (id),
  FOREIGN KEY (division_id) REFERENCES competitions.divisions (id)
);
   
CREATE TABLE competitions.parts
(
  id serial NOT NULL,
  event_id int NOT NULL,
  duration interval NOT NULL DEFAULT '1:00:00'::interval,
  priority workouts.priority NOT NULL,
  rounds int NOT NULL DEFAULT 1,
  CONSTRAINT pk_parts PRIMARY KEY (id),
  FOREIGN KEY (event_id) REFERENCES competitions.events (id)
);
ALTER TABLE competitions.parts
  OWNER TO egg;

CREATE TABLE competitions.steps
(
  id serial NOT NULL,
  part_id int NOT NULL,
  line int NOT NULL,
  movement int NOT NULL,
  load int NOT NULL,
  load_uom char(2) NOT NULL,
  qty int NOT NULL,
  qty_uom char(2) NOT NULL,
  notes text NOT NULL DEFAULT '',
    CONSTRAINT pk_steps PRIMARY KEY (id),
  FOREIGN KEY (part_id) REFERENCES competitions.parts (id)
);
ALTER TABLE competitions.steps
  OWNER TO egg;

CREATE TABLE competitions.competitors
(
	id serial NOT NULL,
  name text NOT NULL,
	competition_id int NOT NULL,
	division_id int NOT NULL,
	FOREIGN KEY (competition_id) REFERENCES competitions.competitions (id),
	FOREIGN KEY (division_id) REFERENCES competitions.divisions (id)
);


