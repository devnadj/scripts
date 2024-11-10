CREATE DATABASE IF NOT EXISTS 'fairytails' /*!40100 DEFAULT CHARACTER SET utf8 */;

-- Path: base.sql
CREATE TABLE IF NOT EXISTS "player" (
    "player_id" INT NOT NULL AUTO_INCREMENT,
    "firstname" VARCHAR(45) NOT NULL,
    "lastname" VARCHAR(45) NOT NULL,
    "pseudo" VARCHAR(45) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "description" VARCHAR(45) NOT NULL,
    "created" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY ("player_id")
);

CREATE TABLE IF NOT EXISTS "character" (
    "character_id" INT NOT NULL AUTO_INCREMENT,
    "name" VARCHAR(32),
    "role" VARCHAR(32),
    "status" VARCHAR(32),
    "strong" INT,
    "agility" INT,
    "intelligence" INT,
    "health" INT,
    "mana" INT,
    "damage" INT,
    "armor" INT,
    "critical" INT --  // 0 à 100 max
    PRIMARY KEY ("character_id")
);

