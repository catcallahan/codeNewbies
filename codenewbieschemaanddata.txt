CREATE DATABASE `codenewbies` /*!40100 DEFAULT CHARACTER SET latin1 */;

#create cards table
CREATE TABLE `codenewbies`.`cards` (
  `cardId` INT NOT NULL,
  `categoryLevel` VARCHAR(45) NULL,
  `skillLevel` VARCHAR(45) NULL,
  `cardTitle` VARCHAR(500) NULL,
  `cardText` VARCHAR(1000) NULL,
  PRIMARY KEY (`cardId`),
  UNIQUE INDEX `cardId_UNIQUE` (`cardId` ASC));
  
#insert beginner data into cards table  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`, `cardTitle`, `cardText`) 
  VALUES ('1', 'Front End', 'Beginner', 'Variables','Containers for holding data values. Declared within the code using "let", "var" and "const".');
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`, `cardTitle`, `cardText`) 
  VALUES ('2', 'Front End', 'Beginner', 'Data Types','Strings, numbers, objects, Arrays');
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('3', 'Front End', 'Beginner', 'for loop','A loop that iterates over a block of code as long as the condition is true');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('4', 'Front End', 'Beginner', 'for...in loop','Loops through the properties of an object');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('5', 'Front End', 'Beginner', 'while loop','Loops through a block of code while a specified condition is true');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('6', 'Front End', 'Beginner', 'do...while loop','Loops through a block of code once, and then repeats the loop while a specified condition is true');    
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('7', 'Front End', 'Beginner', 'Comparison Operators','==, === (preferred), !=, !== (preferred), >, >=, <, <=');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('8', 'Front End', 'Beginner', 'Conditional Statements','if, if...else');  
  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('9', 'Back End', 'Beginner', 'Node.js','A runtime environment and library that enables Javascript to run on a server');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('10', 'Back End', 'Beginner', 'request','Object that will contain data from the browser');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('11', 'Back End', 'Beginner', 'response','Object that will contain data sent to the browser');  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('12', 'Back End', 'Beginner', 'server.listen(3000)','The server object that listens on a port (in this case, 3000) for incoming data from a browser');  
  
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('13', 'Database', 'Beginner', 'require("mysql")','Prerequisite command to use database');    
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('14', 'Database', 'Beginner', 'var con = mysql.createConnection(host, username, password, database) ','Database Connection Object.  Creates the connection object for the database');    
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('15', 'Database', 'Beginner', 'con.connect()','Opens the connection to the database, uses a connection query statement (see below) to filter the connection');    
  INSERT INTO `codenewbies`.`cards` (`cardId`, `categoryLevel`, `skillLevel`,  `cardTitle`, `cardText`) 
  VALUES ('16', 'Database', 'Beginner', 'con.query(Select statement)','Requests data from the specified table, and returns the results in an array of objects');    
