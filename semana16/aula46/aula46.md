## Aula 46 - semana 16

### Exercício 1

#### a)

Esse comando faz com que a coluna 'salary' seja desativada

#### b)

Esse comando altera a coluna gender, mudando o nome para 'sex' 

#### c)

Esse comando altera a coluna gender, mudando o type para VARCHAR(255)



### Exercício 2

#### a)

UPDATE Actor
SET 
	name = Angelica,
    birth_date = "1980-05-16"
WHERE id = "003";

#### b)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

#### c)

UPDATE Actor
SET
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
	salary = 600000,
	gender = "male"
WHERE id = "005";

#### d)

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Nada foi alterado, mas não ocorreu nenhum erro como resposta



### Exercício 3

#### a)

DELETE FROM Actor WHERE name = "Rodrigo Santoro";

#### b)

DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;



### Exercício 4

#### a)

SELECT MAX(salary) FROM Actor;

#### b)

SELECT MIN(salary) FROM Actor WHERE gender = "female";

#### c)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

#### d)

SELECT SUM(salary) FROM Actor;



### Exercício 5

#### a)

O group by permite que agrupemos os resultados de acordo com alguma categoria selecionada. No caso, existem 3 homens e 3 mulheres no grupo de atores.

#### b)

SELECT id, name
FROM Actor
ORDER BY name DESC;

#### c)

SELECT * FROM Actor
ORDER BY salary;

#### d)

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

#### e)

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;



### Exercício 6

#### a)

ALTER TABLE Filmes ADD playing_limit_date DATE;

#### b)

ALTER TABLE Filmes CHANGE rating rating FLOAT;

#### c)

UPDATE Filmes
SET playing_limit_date = "2013-05-14"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2022-05-14"
WHERE id = "003";

#### d)

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0



### Exercício 7

#### a)

SELECT COUNT(*) FROM Filmes WHERE rating > 7.5; 3

#### b)

SELECT AVG(rating) FROM Filmes; 9

#### c)

SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE(); 1

#### d)

SELECT COUNT(*) FROM Filmes WHERE release_date > CURDATE(); 0

#### e)

SELECT MAX(rating) FROM Filmes; 10

#### f)

SELECT MIN(rating) FROM Filmes; 8



### Exercício 8

#### a)

SELECT * FROM Filmes ORDER BY title;

#### b)

SELECT * FROM Filmes ORDER BY title LIMIT 5;

#### c)

SELECT * FROM Filmes 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

#### d)

SELECT * FROM Filmes 
ORDER BY rating DESC 
LIMIT 3;



## CÓDIGOS

SET SQL_SAFE_UPDATES = 0;

USE `maryam-sarah-romanhol`;

ALTER TABLE Actor
ADD favorite_ice_cream_flavor VARCHAR(255);

SELECT * FROM Actor;

ALTER TABLE Actor
ADD type VARCHAR(255) DEFAULT "NotDirector";

DESCRIBE Actor;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET 
	name = "Angelica",
    birth_date = "1980-05-16"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
	salary = 600000,
	gender = "male"
WHERE id = "005";

UPDATE Actor
SET name = "teste"
WHERE id = "008";

DELETE FROM Actor WHERE name = "Rodrigo Santoro";

DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name
FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Filmes ADD playing_limit_date DATE;

SELECT * FROM Filmes;

ALTER TABLE Filmes CHANGE rating rating FLOAT;

UPDATE Filmes
SET playing_limit_date = "2013-05-14"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2022-05-14"
WHERE id = "003";

DELETE FROM Filmes WHERE id = "001";

UPDATE Filmes
SET synopsis = "teste"
WHERE id = "001";

SELECT COUNT(*) FROM Filmes WHERE rating > 7.5;

SELECT AVG(rating) FROM Filmes;

SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();

SELECT COUNT(*) FROM Filmes WHERE release_date > CURDATE();

SELECT MAX(rating) FROM Filmes;

SELECT MIN(rating) FROM Filmes;

SELECT * FROM Filmes ORDER BY title;

SELECT * FROM Filmes ORDER BY title LIMIT 5;

SELECT * FROM Filmes 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

SELECT * FROM Filmes 
ORDER BY rating DESC 
LIMIT 3;



#### 



