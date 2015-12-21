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

-- name: get-competition
-- gets a comp by id
SELECT c.*, d.*, e.*, m.*
FROM competitions.competitions AS c
  INNER JOIN competitions.divisions AS d
    ON c.id = d.competition_id 
  INNER JOIN competitions.events AS e
    ON c.id = e.competition_id
  INNER JOIN competition.measures AS m
    ON e.id = m.event_id
WHERE id = @id

-- name: get-competitors
-- gets competitors by competition id
SELECT *
FROM competitions.competitors
WHERE competition_id = @competition_id
