use codenewbies;
CREATE TABLE `codenewbies`.`users` (
  `userId` INT NOT NULL,
  `fullName` VARCHAR(50) NULL,
  `email` VARCHAR(50) NULL,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `skillLevel` VARCHAR(45),
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC));
  
  use codenewbies;
  insert into users (userId, fullName, email, userName, password, skillLevel)
  values (1,'Maddie Conaway','mc@ib.com','maddie','robots1!','Beginner');
  insert into users (userId, fullName, email, userName, password, skillLevel)
  values (2,'Cat Callahan','cc@ib.com','cat','robots2@','Intermediate');
  insert into users (userId, fullName, email, userName, password, skillLevel)
  values (3,'Josh Hurn','jh@ib.com','josh','robots3#','Advanced');