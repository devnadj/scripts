-- SQLite
DROP TABLE IF EXISTS verbalForm;
DROP TABLE IF EXISTS verb;
DROP TABLE IF EXISTS word;
DROP TABLE IF EXISTS noun;

CREATE TABLE word(
   id INTEGER PRIMARY KEY,
   spelling VARCHAR(32),
   phonetics VARCHAR(32)
);

CREATE TABLE noun(
   word_id INTEGER NOT NULL,
   gender BYTE,
   number BYTE,
   FOREIGN KEY(word_id) REFERENCES word(id)
);

CREATE TABLE verbalForm(
   word_id INTEGER NOT NULL,
   verb_id INTEGER NOT NULL,
   "mod" BYTE,
   "time" BYTE,
   person BYTE,
   FOREIGN KEY(word_id) REFERENCES word(id),
   FOREIGN KEY(verb_id) REFERENCES verb(word_id)
);

CREATE TABLE verb(
   word_id INTEGER NOT NULL,
   "group" BYTE NOT NULL,
   tab BYTE,
   t LOGICAL,
   ti LOGICAL,
   i LOGICAL,
   p LOGICAL,
   d LOGICAL,
   imp LOGICAL,
   xp LOGICAL,
   FOREIGN KEY(word_id) REFERENCES word(id)
);

INSERT INTO word(spelling, phonetics) VALUES
('a', 'a'),
('à', 'a'),
('avoine', 'a.vwan'),
('avoir'; 'a.vwaʁ'),
('abaisser', 'a.bɛ.se');

SELECT * FROM word;