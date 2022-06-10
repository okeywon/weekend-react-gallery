CREATE TABLE photos (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(200) NOT NULL,
    "number" INT,
);

INSERT INTO photos
	(photo, description, number)
VALUES
	('./images/goat_small.jpeg', 'Goat on a mountainside',  12),
	('./images/African-Sunset.webp', 'African sunset', 2),
	('./images/Butterfly.webp', 'Butterfly on a flower', 1),
	('./images/Circle-river.jpeg', 'Bridge on a river', 6),
	('./images/Colorful-Mountain.webp', 'Colorful mountain by a lake', 8),
	('./images/Mountain-in-red.jpeg', 'Mountain in a red forest', 2),
    ('./images/Ocean-rock.jpeg', 'Giant rock on the ocean', 7),
    ('./images/Raindrop.webp', 'Raindrop', 10),
    ('./images/Tree-by-water.jpeg', 'Tree by the water', 5),
    ('./images/Winter-trees.jpeg', 'Winter trees frozen in time', 1);

SELECT * FROM "photos"
ORDER BY "id"