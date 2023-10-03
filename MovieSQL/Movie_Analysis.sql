--Overall IMDB Descending

SELECT DISTINCT
	imdb_rating,
	gross,
	genre,
	series_title,
	director
FROM movies_clean_nometa
ORDER BY imdb_rating DESC;

--Gross Descending
SELECT DISTINCT
	imdb_rating,
	gross,
	genre,
	series_title,
	director
FROM movies_clean_nometa
ORDER BY gross DESC;

-- Highest grossing years

SELECT
	SUM(gross) AS yearlygross,
	released_year
FROM movies_clean_nometa
GROUP BY released_year
ORDER BY yearlygross DESC;

--Highest Grossing Genres
SELECT
	SUM(gross) AS yearlygross,
	genre
FROM movies_clean_nometa
GROUP BY genre
ORDER BY yearlygross DESC;

--Highest Grossing directors
SELECT
	SUM(gross) AS yearlygross,
	director
FROM movies_clean_nometa
GROUP BY director
ORDER BY yearlygross DESC;

--highest grossing star1 actor
SELECT
	SUM(gross) AS yearlygross,
	star1
FROM movies_clean_nometa
GROUP BY star1
ORDER BY yearlygross DESC;

--Highest grossing imdb ratings
SELECT
	SUM(gross) AS yearlygross,
	imdb_rating
FROM movies_clean_nometa
GROUP BY imdb_rating
ORDER BY yearlygross DESC;

-- Preliminary searches by genre
SELECT DISTINCT
	genre,
	id,
	series_title,
	gross,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE 'Drama%';

SELECT DISTINCT
	genre,
	series_title,
	gross,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE 'Action%';

SELECT DISTINCT
	genre,
	series_title,
	gross,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE 'Adventure%';

SELECT DISTINCT
	genre,
	series_title,
	gross,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE 'Comedy%';

-- Overall Gross
SELECT DISTINCT
	gross,
	genre,
	series_title,
	imdb_rating,
	director
FROM movies_clean_nometa
ORDER BY gross DESC;

-- Genres by Dscending Gross within approximate genres
SELECT DISTINCT
	gross,
	genre,
	series_title,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE 'Action%'
ORDER BY gross DESC;
 
SELECT DISTINCT
	gross,
	genre,
	series_title,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE '%Romance%'
ORDER BY gross DESC;

SELECT DISTINCT
	gross,
	genre,
	series_title,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE '%Thriller%'
ORDER BY gross DESC;

SELECT DISTINCT
	gross,
	genre,
	series_title,
	imdb_rating,
	director
FROM movies_clean_nometa
WHERE genre LIKE '%Comedy%'
ORDER BY gross DESC;