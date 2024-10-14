CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO student (student_id, name)
VALUES 
(101, 'adam'),
(102, 'bob'),
(103, 'casey');

CREATE TABLE course (
    student_id INT,
    course VARCHAR(100),
    FOREIGN KEY (student_id) REFERENCES student(student_id)
);

INSERT INTO course (student_id, course)
VALUES 
(101, 'math'),
(102, 'science'),
(103, 'computer science');

SELECT * from student;
SELECT * from course;

-- JOINS

SELECT name, course
FROM student as s
INNER JOIN course as c
ON s.student_id = c.student_id;

SELECT *
FROM student as s
LEFT JOIN course as c
ON s.student_id = c.student_id
UNION
SELECT *
FROM student as s
RIGHT JOIN course as c
ON s.student_id = c.student_id;

-- LEFT AND RIGHT EXCLUSIVE NULL
SELECT *
FROM student as s
LEFT JOIN course as c
ON s.student_id = c.student_id
WHERE c.student_id IS NULL;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT
);

INSERT INTO employee (id, name, manager_id)
VALUES 
(101, 'adam', 103),
(102, 'bob', 104),
(103, 'casey', NULL),
(104, 'donald', 103);

SELECT a.name as manager_name, b.name as employee_name
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;

SELECT * FROM employee
UNION ALL
SELECT * FROM employee;
