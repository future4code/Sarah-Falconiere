### Exercício 1

#### a) 

- VARCHAR(255) ou (6) diz que o parâmetro é composto por uma quantidade de caracteres que vai até o número entre parêntesis.

- PRIMARY KEY diz que o parâmetro é a chave primária, chave de identificação de cada item da tabela

- NOT  NULL diz que aquele parâmetro espera um valor, ou seja, não pode ficar em branco

- DATE diz que o parâmetro inserido é uma data, no formado YYYY-MM-DD

  

#### b)

SHOW DATABASES retorna o banco de dados e SHOW TABLES retorna as tabelas do banco de dados que está sendo utilizado

#### c)

O comando DESCRIBE retorna todas as informações das colunas da tabela, como o tipo, valor, se é nulo ou não, se é uma PK..



### Exercício 2

#### a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);

#### b)

Esse erro ocorreu pois eu tentei criar um novo elemento com uma PK já existente, sendo que a PK não pode ser repetida, ela é única.

#### c)

Estou inserindo mais valores do que o estipulado na linha de INSERT

#### d)

O campo 'name' não pode ser NULL, então tenho que passar algum valor

#### e)

Faltou colocar aspas na data

#### f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Mariana Ximenes",
  80000,
  "1980-06-26", 
  "female"
);



INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rodrigo Santoro",
  1000000,
  "1978-06-26", 
  "male"
);



### Exercício 3

#### a)

SELECT * from Actor WHERE gender = "female"

#### b)

SELECT salary from Actor WHERE name = "Tony Ramos";

#### c)

Nenhum dado foi retornado, pois não existe nenhum ator com o gênero invalido na tabela

#### d)

SELECT id, name, salary from Actor WHERE salary < 500000;

#### e)

'nome' não existe

SELECT id, name from Actor WHERE id = "002"



### Exercício 4

#### a)

estou selecionando o ator/atriz que tenha o nome começando com as letras A ou J. Além disso, essa pessoa deve receber um salário maior que 300.000

#### b)

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

#### c)

SELECT * FROM Actor
WHERE name LIKE "%g%";

#### d)

SELECT * FROM Actor WHERE  (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")  AND salary BETWEEN 350000 AND 900000;



### Exercício 5

#### a)

CREATE TABLE Filmes(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT
);

#### b)

INSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

#### c)

INSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

#### d)

INSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

#### e)

INSERT INTO Filmes (id, title, synopsis, release_date, rating)
VALUES(
	"004",
    "O auto da compadecida",
    "A aventura segue duas pobres almas (Matheus Nachtergaele, Selton Mello) enquanto eles encontram um emprego, tramam para ganhar uma garota e enfrentam bandidos saqueadores.",
    "2000-09-10",
    9
);



### Exercício 6

#### a)

SELECT id, title, rating FROM Filmes WHERE id = "002";

#### b)

SELECT * FROM Filmes WHERE title = "O auto da compadecida";

#### c)

SELECT id, title, synopsis FROM Filmes WHERE rating >= 7;



### Exercício 7

#### a)

SELECT * FROM Filmes WHERE title LIKE "%vida%"

#### b)

SELECT * FROM Filmes
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

#### c)

SELECT * FROM Filmes
WHERE release_date < "2021-11-23";

#### d)

SELECT * FROM Filmes WHERE release_date < "2021-11-23" AND       (title LIKE "%TERMO DE BUSCA%" OR      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;

