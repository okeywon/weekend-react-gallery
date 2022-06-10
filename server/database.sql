CREATE TABLE photos (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(200) NOT NULL,
    "number" INT,
);

INSERT INTO items
	(description, numberOfLikes)
VALUES
	('Goat on a mountainside', 12),
	('African sunset', 2),
	('Butterfly on a flower', 1),
	('Bridge on a river', 6),
	('Colorful mountain by a lake', 8),
	('Mountain in a red forest', 2),
    ('Giant rock on the ocean', 7),
    ('Raindrop', 10),
    ('Tree by the water', 5),
    ('Winter trees frozen in time', 1);

SELECT * FROM "photos"
ORDER BY "id"