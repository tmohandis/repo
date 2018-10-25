-- MySQL Script generated by MySQL Workbench
-- Thu Oct 25 10:44:44 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema GEEK_PROJECT
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema GEEK_PROJECT
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `GEEK_PROJECT` DEFAULT CHARACTER SET utf8 ;
USE `GEEK_PROJECT` ;

-- -----------------------------------------------------
-- Table `GEEK_PROJECT`.`IMAGES`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GEEK_PROJECT`.`IMAGES` ;

CREATE TABLE IF NOT EXISTS `GEEK_PROJECT`.`IMAGES` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  `path` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
