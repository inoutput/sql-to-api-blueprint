-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `id` INT NOT NULL,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `CreatedDate` DATETIME NULL,
  `UpdatedDate` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Hats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Hats` (
  `id` INT NOT NULL,
  `Style` VARCHAR(45) NOT NULL,
  `Color` VARCHAR(45) NULL,
  `CreatedDate` DATETIME NULL,
  `UpdatedDate` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;