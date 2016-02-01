-- name: sql-gym-schedule
-- combines the level and classes together into something for the cal
SELECT c.day_of_week, l.name AS class, c.title, c.start_at, c.duration, (c.start_at + c.duration) as end_at
FROM scheduling.classes AS c
  INNER JOIN scheduling.levels AS l
  	ON l.id = c.level_id
WHERE c.organization_id = :organization_id
  AND l.organization_id = :organization_id

-- name: sql-insert-class!
-- stuff
INSERT INTO scheduling.classes (day_of_week, level_id, title, start_at, duration, organization_id)
VALUES (:day_of_week::scheduling.day_of_week, :level, :title, :start_at::time, :duration::interval, :organization_id)

-- name: sql-gym-levels
-- get all of the levels the gym offers
SELECT id, name
FROM scheduling.levels
WHERE organization_id = :organization_id;
