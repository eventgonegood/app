--fran
DO $$
DECLARE p1id int;
DECLARE tid int;
BEGIN
	INSERT INTO workouts.sessions (organization_id, name)
	VALUES (1, '20151205');


	INSERT INTO workouts.parts (id, session_id, rounds, priority)
	VALUES (DEFAULT, (SELECT id FROM workouts.sessions WHERE name = '20151205'), 1, 'task')
	RETURNING id INTO p1id;

    SELECT id INTO tid FROM workouts.movements WHERE name = 'Thruster';

	INSERT INTO workouts.steps (session_part_id, line, movement, load, load_uom, qty, qty_uom)
	VALUES (p1id, 1, tid, 1, 'mx', 6, 'rp');
END $$;

