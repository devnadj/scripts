-- SQLite
DROP TABLE IF EXISTS word;
DROP TABLE IF EXISTS verbe;


DELETE FROM word;

CREATE TABLE word(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    spelling VARCHAR(32) NOT NULL,
    phonetics VARCHAR(32) NOT NULL );

CREATE TABLE verbe(
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'spelling' VARCHAR(32) NOT NULL, 
    'group' INTEGER NOT NULL,
    'tab' INTEGER,
    'id_word' INTEGER NOT NULL,
    FOREIGN KEY (id_word) REFERENCES word(id)
    );

INSERT INTO word(spelling, phonetics)
VALUES 
('a', 'a'),
('à', 'a');

SELECT count(*) FROM word WHERE "spelling" LIKE '%z';
SELECT count(*) FROM word;
SELECT * FROM word WHERE "spelling" LIKE 'z%';
SELECT * FROM word WHERE "spelling" LIKE 'x%';