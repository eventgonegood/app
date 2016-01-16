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
ALTER TABLE competitions.competitions
  OWNER TO egg;

CREATE TABLE competitions.divisions
(
  id serial NOT NULL,
  competition_id int NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  CONSTRAINT pk_divisions PRIMARY KEY (id),
  FOREIGN KEY (competition_id) REFERENCES competitions.competitions (id)
);
ALTER TABLE competitions.divisions
  OWNER TO egg;

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
ALTER TABLE competitions.events
  OWNER TO egg;

CREATE TABLE competitions.measures
(
  id serial NOT NULL,
  event_id int NOT NULL,
  name text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  sort workouts.priority NOT NULL,
  conversion_factor int NOT NULL DEFAULT 1,
  CONSTRAINT pk_measures PRIMARY KEY (id),
  FOREIGN KEY (event_id) REFERENCES competitions.events (id)
);
ALTER TABLE competitions.measures
  OWNER TO egg;

CREATE TABLE competitions.competitors
(
	id serial NOT NULL,
	competition_id int NOT NULL,
	division_id int NOT NULL,
    identifier text NOT NULL DEFAULT '', --like a bib number
    name text NOT NULL,
    CONSTRAINT pk_competitors PRIMARY KEY(id),
	FOREIGN KEY (competition_id) REFERENCES competitions.competitions (id),
	FOREIGN KEY (division_id) REFERENCES competitions.divisions (id)
);
ALTER TABLE competitions.competitors
  OWNER TO egg;

CREATE TABLE competitions.scores
(
  event_id int NOT NULL,
  competitor_id int NOT NULL,
  measure_id int NOT NULL,
  value int NOT NULL, --how to support 'dropouts'
  CONSTRAINT pk_scores PRIMARY KEY(event_id, competitor_id, measure_id),
  FOREIGN KEY (event_id) REFERENCES competitions.events (id),
  FOREIGN KEY (competitor_id) REFERENCES competitions.competitors (id),
  FOREIGN KEY (measure_id) REFERENCES competitions.measures (id)
);
ALTER TABLE competitions.scores
  OWNER TO egg;
