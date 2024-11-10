-- Création d'une table User
DROP TABLE IF EXISTS "User";

CREATE TABLE "User"(
   userid SERIAL,
   firstname varchar(32) NOT NULL,
   lastname varchar(32) NOT NULL,
   phone VARCHAR(10) ,
   email VARCHAR(255) NOT NULL UNIQUE,
   address VARCHAR(32) ,
   CP VARCHAR(50) ,
   city VARCHAR(32) ,
   password VARCHAR(16) NOT NULL,
   PRIMARY KEY(userid),
   UNIQUE(email)
);