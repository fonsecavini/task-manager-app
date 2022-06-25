DROP DATABASE IF EXISTS TaskManager;

CREATE DATABASE TaskManager;

CREATE TABLE TaskManager.User (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE TaskManager.Tasks (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    criator INTEGER,
    status TEXT NOT NULL,
    urgengy TEXT NOT NULL,
    FOREIGN KEY (criator) REFERENCES TaskManager.User (id)
);