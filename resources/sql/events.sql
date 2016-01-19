-- name: sql-insert-event!
-- insert an event yo
INSERT INTO events.events (payload)
VALUES (:payload::jsonb)
