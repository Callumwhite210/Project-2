ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

DROP DATABASE IF EXISTS posts_db;

CREATE DATABASE posts_db;

USE posts_db;

CREATE TABLE posts (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    posted VARCHAR(100) NOT NULL,
    likes INT NOT NULL DEFAULT(0),
    dislikes INT NOT NULL DEFAULT(0),
    PRIMARY KEY (id)
);

CREATE TABLE comments (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    commented VARCHAR(100) NOT NULL,
    post_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts (id) 
);

DROP TABLE posts;
DROP TABLE comments;

INSERT INTO posts (username, posted)
VALUE ("Test Username", "Test Post");

INSERT INTO comments (username, commented, post_id)
VALUE ("Test commenter" , "Test comment", 1);