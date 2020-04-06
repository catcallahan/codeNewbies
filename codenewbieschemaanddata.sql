CREATE DATABASE `codenewbies` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `codenewbies`.`answers` (
  `answerId` INT NOT NULL,
  `cardId` INT NULL,
  `answerText` VARCHAR(500) NULL,
  `answerFinal` INT NULL,
  PRIMARY KEY (`answerId`),
  UNIQUE INDEX `answerId_UNIQUE` (`answerId` ASC));
  
CREATE TABLE `codenewbies`.`cards` (
  `cardId` INT NOT NULL,
  `categoryLevel` VARCHAR(45) NULL,
  `skillLevel` VARCHAR(45) NULL,
  `question` VARCHAR(1000) NULL,
  PRIMARY KEY (`cardId`),
  UNIQUE INDEX `cardId_UNIQUE` (`cardId` ASC));
  
CREATE TABLE `codenewbies`.`users` (
  `userId` INT NOT NULL,
  `userName` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(60) NULL,
  `categoryLevel` VARCHAR(45) NULL,
  `skillLevel` VARCHAR(45) NULL,
   PRIMARY KEY (`userId`),
   UNIQUE INDEX `userId_UNIQUE` (`userId` ASC));

INSERT INTO `codenewbies`.`users` (`userId`, `userName`, `password`, `email`, `categoryLevel`, `skillLevel`) VALUES ('1', 'Maddie', 'codenewbie', 'coder@ib.com', 'Loops', 'Beginner');

INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`, `question`) VALUES ('1', 'Loops', 'Beginner', 'What will be the value of the variable \'result\' after the code executes:\\n let result = 1;\\nFor (let x = 1; x < 7; x++) {\\nresult=result+x;\\n}');

INSERT INTO `codenewbies`.`answers` (`answerId`, `cardId`, `answerText`) VALUES ('1', '1', '21');
INSERT INTO `codenewbies`.`answers` (`answerId`, `cardId`, `answerText`, `answerFinal`) VALUES ('2', '1', '22', '1');
INSERT INTO `codenewbies`.`answers` (`answerId`, `cardId`, `answerText`) VALUES ('3', '1', '23');

