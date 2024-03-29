CREATE TABLE Genre
(
	Id SERIAL PRIMARY KEY,
	Name CHARACTER VARYING(255) NOT NULL
);

CREATE TABLE Films
(
	Id SERIAL PRIMARY KEY,
	Title CHARACTER VARYING(255) NOT NULL,
	ReleaseYear INTEGER NOT NULL
);

CREATE TABLE FilmGenres (
	Film_Id INTEGER NOT NULL,
	Genre_Id INTEGER NOT NULL,
	CONSTRAINT pk_filmgenres PRIMARY KEY (Film_Id, Genre_Id),
	CONSTRAINT fk_filmgenres_film FOREIGN KEY (Film_Id) REFERENCES Films (Id),
	CONSTRAINT fk_filmgenres_genre FOREIGN KEY (Genre_Id) REFERENCES Genre (Id)
);