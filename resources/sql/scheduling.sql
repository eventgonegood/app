-- name: sql-gym-schedule
-- combines the level and classes together into something for the cal
SELECT c.day_of_week, l.name AS class, c.title, c.start_at, c.duration, (c.start_at + c.duration) as end_at
FROM scheduling.classes AS c
  INNER JOIN scheduling.levels AS l
  	ON l.id = c.level_id
WHERE c.organization_id = :organization_id
  AND l.organization_id = :organization_id
