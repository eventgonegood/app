-- name: find-competition-by-id
-- finds a comp
SELECT *
FROM competitions.competitions
WHERE id = @id

-- name: find-competitions-by-name
-- finds a comp by name
SELECT *
FROM competitions.competitions
WHERE name = @name

-- name: get-competition-definition
-- gets a comp by id
--     competition
SELECT c.id AS competition_id, c.name, c.description, c.hashtag, c.starts_on, c.ends_on,
--     divisions
       d.id AS division_id, d.name, d.description,
--     events
       e.id AS event_id, e.name, e.description, 
--     measures
       m.id AS measure_id, m.name, m.description, m.sort, m.conversion_factor
FROM competitions.competitions AS c
  LEFT JOIN competitions.divisions AS d
    ON c.id = d.competition_id 
  LEFT JOIN competitions.events AS e
    ON c.id = e.competition_id
  LEFT JOIN competitions.measures AS m
    ON e.id = m.event_id
WHERE c.id = @id;

-- name: get-competition-competitors
-- get competitors and scores by id
--     competition
SELECT c.id AS competition_id, c.name AS competition_name,
--     divisions
       d.id AS division_id, d.name AS division_name,
--     competitors
       a.id AS competitor_id, a.name AS competitor_name,
--     scores
       s.event_id, measure_id, value
FROM competitions.competitions AS c
  LEFT JOIN competitions.divisions AS d
    ON c.id = d.competition_id
  LEFT JOIN competitions.competitors AS a
    ON c.id = a.competition_id 
    AND d.id = a.division_id
  LEFT JOIN competitions.scores AS s
    ON a.id = s.competitor_id
WHERE c.id = @id;

-- name: get-competitors
-- gets competitors by competition id
SELECT *
FROM competitions.competitors
WHERE competition_id = @competition_id

-- name: insert-competition
INSERT INTO competitions.competitions (name, description, hashtag, starts_on, ends_on)
VALUES (@name, @description, @hashtag, @starts_on, @ends_on)
