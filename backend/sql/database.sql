CREATE DATABASE eLibrary

USE eLibrary

CREATE TABLE `elibrary`.`authentication` (
  `idAuthentication` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(200) NOT NULL,
  `tipo_usuario` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idAuthentication`));

CREATE TABLE `elibrary`.`book` (
  `idBook` INT NOT NULL AUTO_INCREMENT,
  'titulo' VARCHAR(100) NOT NULL,
  `contenido` LONGTEXT NOT NULL,
  `autor` VARCHAR(100) NOT NULL,
  `fecha_creacion` DATETIME NULL,
  `categoria` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `cantidad_pagina` VARCHAR(45) NULL,
  PRIMARY KEY (`idBook`));
