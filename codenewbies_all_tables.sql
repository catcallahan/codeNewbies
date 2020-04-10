-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: codenewbies
-- ------------------------------------------------------
-- Server version	5.7.29-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `cardId` int(11) NOT NULL,
  `categoryLevel` varchar(45) DEFAULT NULL,
  `skillLevel` varchar(45) DEFAULT NULL,
  `cardTitle` varchar(500) DEFAULT NULL,
  `cardText` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`cardId`),
  UNIQUE KEY `cardId_UNIQUE` (`cardId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,'Front End','Beginner','Variables','Containers for holding data values. Declared within the code using \"let\", \"var\" and \"const\".'),(2,'Front End','Beginner','Data Types','Strings, numbers, objects, Arrays'),(3,'Front End','Beginner','for loop','A loop that iterates over a block of code as long as the condition is true'),(4,'Front End','Beginner','for...in loop','Loops through the properties of an object'),(5,'Front End','Beginner','while loop','Loops through a block of code while a specified condition is true'),(6,'Front End','Beginner','do...while loop','Loops through a block of code once, and then repeats the loop while a specified condition is true'),(7,'Front End','Beginner','Comparison Operators','==, === (preferred), !=, !== (preferred), >, >=, <, <='),(8,'Front End','Beginner','Conditional Statements','if, if...else'),(9,'Back End','Beginner','Node.js','A runtime environment and library that enables Javascript to run on a server'),(10,'Back End','Beginner','request','Object that will contain data from the browser'),(11,'Back End','Beginner','response','Object that will contain data sent to the browser'),(12,'Back End','Beginner','server.listen(3000)','The server object that listens on a port (in this case, 3000) for incoming data from a browser'),(13,'Database','Beginner','require(\"mysql\")','Prerequisite command to use database'),(14,'Database','Beginner','var connection = mysql.createConnection(host, username, password, database) ','Database Connection Object.  Creates the connection object for the database'),(15,'Database','Beginner','connection.connect()','Opens the connection to the database, uses a connection query statement (see below) to filter the connection'),(16,'Database','Beginner','connection.query(Select statement)','Requests data from the specified table, and returns the results in an array of objects'),(17,'Database','Beginner','connection.end()','Closes the connection object.'),(18,'Front End','Intermediate','Object','An unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. '),(19,'Front End','Intermediate','Object: Example','let person = {name: \'\'Andrew\'\', age: 22, email: \'\'adrew@ib.com\'\'};'),(20,'Front End','Intermediate','Object: Accessing Object Values','let age = person.age; let email = person.email;'),(21,'Front End','Intermediate','Array.ForEach','A method to execute code on each value or object stored in an array'),(22,'Front End','Intermediate','Array ForEach: Example','let arr=[12,18,3,6];\\narr.forEach(myFunction);\\nfunction myFunction(item) {\\nconsole.log(item);\\n}'),(23,'Front End','Intermediate','Function','A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.'),(24,'Front End','Intermediate','Function: Example','function myFunction(p1, p2)\\n     {return p1 * p2; }\\nconsole.log(myFunction(21,3));\\n\\n //displays the value 63 on the console'),(25,'Back End','Intermediate','Arrow Function','Introduced in ES6, arrow functions allow the coder to write shorter function syntax'),(26,'Back End','Intermediate','Arrow Function: Example','Standard javascript: function hello = {return \"Hello World!\"};\\n\\nArrow function: hello = () => {return \"Hello World!\"};'),(27,'Back End','Intermediate','Hoisting','Hoisting is JavaScript\'s default behavior of moving all declarations to the top of the current scope (or the current function).'),(28,'Back End','Intermediate','JSON object','A JSON object is defined in curly brackets and is written in key/value pairs seperated by a colon and each pair seperated by a comma.'),(29,'Back End','Intermediate','JSON object: Example','myObj =  { \"name\":\"John\", \"age\":30, \"car\":null };\\nx = myObj.name;\\nconsole.log(x);'),(30,'Database','Intermediate','SQL Definition','Structured Query Language is a standard database language which is used to create, maintain and retrieve the relational database. SQL Server, Oracle, and MySql are common RDMS systems.'),(31,'Database','Intermediate','SQL Query: Example','SELECT fname, lname, email FROM userfile WHERE zip=\'35210\' ORDER BY lname'),(32,'Database','Intermediate','SELECT, INSERT, UPDATE, DELETE','Sql commands that operate on the data in the tables, SELECT retrieves data, INSERT adds data to the tables, UPDATE modifies data, DELETE removes records from the table'),(33,'Database','Intermediate','Stored Procedure','A set of SQL statements with an assigned name, which are stored in a relational database management system as a group, so it can be reused and shared by multiple programs.'),(34,'Database','Intermediate','Stored Procedure: Parameters','A technique used to pass values into a stored procedure, used to filter the results created by the procedure.'),(35,'Database','Intermediate','Stored Procedure: Example','MySql Example: \\nCREATE PROCEDURE GetEmail( IN InName VARCHAR(45))\\nBEGIN\\nSELECT email\\nFROM usersTable\\nWHERE lastName = InName;\\nEND'),(36,'Database','Intermediate','Views','A view is a temporary virtual table that does not store any data of its own but displays data stored in other tables. In other words, a view is nothing but a SQL Query.'),(37,'Front End','Advanced','Class','A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.'),(38,'Front End','Advanced','Class: Example','class Car {\\nconstructor(brand) {\\nthis.carname = brand;\\n}\\n}\\nmycar = new Car(\"Ford\");'),(39,'Front End','Advanced','Constructor method','The constructor method is a special method for creating and initializing an object created with a class.'),(40,'Front End','Advanced','Super method','Used in the constructor method, the super method allows passing of values to the parent class (Inheritance)'),(41,'Front End','Advanced','this keyword','The JavaScript this keyword refers to the object it belongs to.'),(42,'Front End','Advanced','this keyword Example','var person = {\\nfirstName: \"John\",\\nlastName : \"Doe\",\\nid : 5566,\\nfullName : function() {\\nreturn this.firstName + \" \" + this.lastName;\\n}\\n};'),(43,'Back End','Advanced','Promise','The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.'),(44,'Back End','Advanced','Promise: Example','const promise = createAudioFileAsync(audioSettings);\\npromise.then(successCallback, failureCallback);'),(45,'Back End','Advanced','Promise.resolve method','The Promise.resolve() method returns a Promise object that is resolved with a given value.'),(46,'Back End','Advanced','Promise.reject method','The Promise.reject() method returns a Promise object that is rejected with a given reason.'),(47,'Back End','Advanced','Promise.then method','The promise.then() method defines the functionality to perform when a promise object is successfully returned.'),(48,'Back End','Advanced','Promise.catch method','The promise.catch() method defines the functionality to perform when a promise object has failed to return successfully.'),(49,'Database','Advanced','Database','A structured collection of data. Includes tables, stored procedures, views, and functions.'),(50,'Database','Advanced','Table','In a database, a table stores the data in columns and rows.'),(51,'Database','Advanced','Column, Row','In a table, each data record is represented as a row, each data field in the row is represented as a column.'),(52,'Database','Advanced','Data Types','A data structure definition, used for each column in a table. In MySql: TINYINT, INT, BIGINT, DECIMAL, NUMERIC, BOOLEAN, FLOAT, DOUBLE, DATE, TIME, YEAR, DATETIME, TIMESTAMP, CHAR, VARCHAR'),(53,'Database','Advanced','Functions','A function is a stored program that you can pass parameters into and then return a value.'),(54,'Database','Advanced','Functions: Example','CREATE FUNCTION AmountByFour(\\namount DECIMAL(10,2)\\n)\\nRETURNS DECIMAL(10,2)\\nBEGIN\\nRETURN (amount * 4);\\nEND');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quizanswers`
--

DROP TABLE IF EXISTS `quizanswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quizanswers` (
  `answerId` int(11) NOT NULL COMMENT 'Unique ID ',
  `questionId` int(11) DEFAULT NULL COMMENT 'pointer to quizquestions table',
  `answerText` varchar(100) DEFAULT NULL COMMENT 'The text that appears for the question indicated by the question ID',
  `correctAnswer` tinyint(4) DEFAULT '0' COMMENT '1 = this is the correct answer for the question\n0 = not the correct answer (default)\n',
  PRIMARY KEY (`answerId`),
  UNIQUE KEY `answerId_UNIQUE` (`answerId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quizanswers`
--

LOCK TABLES `quizanswers` WRITE;
/*!40000 ALTER TABLE `quizanswers` DISABLE KEYS */;
/*!40000 ALTER TABLE `quizanswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quizquestions`
--

DROP TABLE IF EXISTS `quizquestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quizquestions` (
  `questionId` int(11) NOT NULL,
  `categoryLevel` varchar(45) DEFAULT NULL,
  `skillLevel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`questionId`),
  UNIQUE KEY `questionId_UNIQUE` (`questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quizquestions`
--

LOCK TABLES `quizquestions` WRITE;
/*!40000 ALTER TABLE `quizquestions` DISABLE KEYS */;
/*!40000 ALTER TABLE `quizquestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `fullName` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `userName` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `skillLevel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId_UNIQUE` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Maddie Conaway','mc@ib.com','maddie','robots1!','Beginner'),(2,'Cat Callahan','cc@ib.com','cat','robots2@','Intermediate'),(3,'Josh Hurn','jh@ib.com','josh','robots3#','Advanced');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'codenewbies'
--
/*!50003 DROP PROCEDURE IF EXISTS `s_alter_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`maddie`@`%` PROCEDURE `s_alter_user`()
BEGIN
ALTER USER 'root'@'localhost'
IDENTIFIED WITH
mysql_native_password BY 'groupkey';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `s_get_cards_by_userid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `s_get_cards_by_userid`(IN inUserId INT, IN inCategory VARCHAR(45))
BEGIN
select c.skillLevel, c.categoryLevel, c.cardTitle, c.cardText 
from codenewbies.cards as c 
left join codenewbies.users as u 
on u.skillLevel = c.skillLevel 
where u.userId=inUserId and c.categoryLevel=inCategory;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-09 19:38:43
