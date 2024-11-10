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
   tab BYTE DEFAULT 0,
   t LOGICAL DEFAULT false,
   ti LOGICAL DEFAULT false,
   i LOGICAL DEFAULT false,
   p LOGICAL DEFAULT false,
   d LOGICAL DEFAULT false,
   imp LOGICAL DEFAULT false,
   xp LOGICAL DEFAULT false,
   FOREIGN KEY(word_id) REFERENCES word(id)
);

SELECT count(*) as Mots FROM word;
SELECT * FROM word;

-- DELETE FROM "verb";
SELECT count(*) as VERBES FROM verb;
SELECT * FROM verb;

SELECT "spelling" as 'Verbe', "tab" as 'Tableau' FROM "word", "verb"
WHERE "word"."id" = "verb"."word_id";

DELETE FROM "verb";

SELECT "id" FROM "word" WHERE "spelling"='acérer';
SELECT "id" FROM "word" WHERE "spelling"='acenser';

-- INSERT INTO "verb"("word_id", "group", "tab", "t", "ti", "i", "p", "d", "imp", "xp") VALUES
-- ((SELECT "id" FROM "word" WHERE "spelling"='acérer'), 1, 14, true, false, false, false, false, false, false);


-- INSERT INTO "verb"("word_id", "group", "tab", "t", "ti", "i", "p", "d", "imp", "xp") VALUES
-- ((SELECT "id" FROM "word" WHERE "spelling"='abaisser'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abandonner'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abasourdir'), 2, 6, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abâtardir'), 2, 6, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abattre'), 3, 93, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abcéder'), 1, 14, false, false, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abdiquer'), 1, 11, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aberrer'), 1, 3, false, false, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abêtir'), 2, 6, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abhorrer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abîmer'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abjurer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='ablater'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abloquer'), 1, 11, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abolir'), 2, 6, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abominer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abonder'), 1, 3, false, false, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abonner'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abonnir'), 2, 6, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aborder'), 1, 3, true, false, true, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aboucher'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abouler'), 1, 3, true, false, true, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abouter'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aboutir'), 1, 6, false, true, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aboyer'), 1, 27, true, false, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abraser'), 1, 3, true, false, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abréger'), 1, 18, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abreuver'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abricoter'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abriter'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abroger'), 1, 13, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abrutir'), 2, 6, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='absenter'), 1, 3, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='absorber'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='absoudre'), 1, 91, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abstenir'), 3, 39, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abstraire'), 3, 69, true, false, false, true, true, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='abuser'), 1, 3, true, true, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acagnarder'), 1, 3, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accabler'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accaparer'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accastiller'), 1, 9, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accéder'), 1, 14, false, true, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accélérer'), 1, 14, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accentuer'), 1, 7, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accepter'), 1, 3, true, true, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accessoiriser'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accidenter'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acclamer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acclimater'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accointer'), 1, 3, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoler'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accommoder'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accompagner'), 1, 9, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accomplir'), 2, 6, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accorder'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accorer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoster'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoter'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoucher'), 1, 3, true, true, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accouder'), 1, 3, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accouer'), 1, 7, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoupler'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accourcir'), 2, 6, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accourir'), 3, 32, false, false, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoutrer'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accoutumer'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accréditer'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accrocher'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accroire'), 3, null, true, false, false, false, true, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accroître'), 3, 100, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accroupir'), 1, 6, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accueillir'), 1, 43, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acculer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acculturer'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accumuler'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='accuser'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acenser'), 1, 3, true, false, false, false, false, false, false);
-- ((SELECT "id" FROM "word" WHERE "spelling"='acérer'), 1, 14, true, false, false, false, false, false, false);



-- ((SELECT "id" FROM "word" WHERE "spelling"='acétifier'), 1, 8, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acétyler'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='achalander'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='achaler'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acharner'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acheminer'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acheter'), 1, 23, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='achever'), 1, 19, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='achopper'), 1, 3, false, true, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='achromatiser'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acidifier'), 1, 8, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aciduler'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aciérer'), 1, 14, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='aciseler'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acoquiner'), 1, 3, false, false, false, false, false, false, true),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acquérir'), 3, 40, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acquiescer'), 1, 12, false, true, true, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acquitter'), 1, 3, true, false, false, true, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='acter'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='actionner'), 1, 3, true, false, false, false, false, false, false),
-- ((SELECT "id" FROM "word" WHERE "spelling"='activer'), 1, 3, true, false, false, true, false, false, false);

