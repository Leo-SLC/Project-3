CREATE TABLE movies_clean_nometa (
    id INT PRIMARY KEY,
    Series_title VARCHAR (100) NOT NULL,
    Released_year INT NOT NULL,
    Runtime VARCHAR(50) NOT NULL,
    Genre VARCHAR(50) NOT NULL,
    IMDB_Rating VARCHAR(50) NOT NULL, 
    Director VARCHAR(50) NOT NULL,
    Star1 VARCHAR(50) NOT NULL,
    Star2 VARCHAR(50) NOT NULL,
    Star3 VARCHAR(50) NOT NULL,
    Star4 VARCHAR(50) NOT NULL,
    No_of_Votes INT NOT NULL,
    Gross INT
);



CREATE TABLE movie_directors (
	id INT PRIMARY KEY,
    Series_title VARCHAR(100) NOT NULL,
    director VARCHAR(50) NOT NULL,
    Gross INT NOT NULL,
    FOREIGN KEY(id) REFERENCES movies_clean_nometa (id)
);

CREATE TABLE movie_actors (
    id INT PRIMARY KEY,
    series_title VARCHAR(100) NOT NULL,
    Star1 VARCHAR(50) NOT NULL,
    Star2 VARCHAR(50) NOT NULL,
    Star3 VARCHAR(50) NOT NULL,
    Star4 VARCHAR(50) NOT NULL,
    FOREIGN KEY(id) REFERENCES movies_clean_nometa (id)
);

CREATE TABLE star1_actors (
	id INT PRIMARY KEY,
    Star1 VARCHAR(50) NOT NULL,
    IMDB_Rating VARCHAR(50) NOT NULL,
    Gross INT NOT NULL,
    FOREIGN KEY(id) REFERENCES movies_clean_nometa (id)
);

CREATE TABLE best_genres (
	id INT PRIMARY KEY,
    Genre VARCHAR(50) NOT NULL,
    IMDB_Rating INT NOT NULL,
    Gross INT NOT NULL,
    FOREIGN KEY(id) REFERENCES movies_clean_nometa (id)
);
