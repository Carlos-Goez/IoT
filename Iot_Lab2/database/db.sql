CREATE DATEBASE database_inverdadero;

USE database_inverdadero

CREATE TABLE usuario (
    id INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sensores (
    id INT(11) NOT NULL AUTO_INCREMENT,
    sensor VARCHAR(20) NOT NULL,
    temp VARCHAR(10) NOT NULL,
    hum VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE actuadores  (
    id INT(11) NOT NULL AUTO_INCREMENT,
    actuador VARCHAR(20) NOT NULL,
    estado TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
);


