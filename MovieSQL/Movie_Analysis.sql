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

-- Preliminary searches
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

-- Genres by Dscending Gross
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