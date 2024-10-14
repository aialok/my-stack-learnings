-- College Related Queries
CREATE DATABASE COLLEGE;

CREATE  DATABASE IF NOT EXISTS COLLEGE;
USE COLLEGE;

-- This is used to show database;
SHOW DATABASES;

-- This is used to show tables;
SHOW TABLES;

-- Table Related Queries
CREATE TABLE STUDENT(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO STUDENT VALUES(1,"Alok",21);
INSERT INTO STUDENT VALUES(2,"Arun",27);

SELECT * FROM STUDENT;

-- delete tables;
DROP TABLE STUDENT;

-- CREATE TABLE
CREATE TABLE Student(
 roll_no INT PRIMARY KEY,
 name VARCHAR(50)
);

-- Query all the data from table
SELECT * FROM Student;

-- Insert into table
INSERT INTO Student(roll_no, name) VALUES(101, "ALok");

