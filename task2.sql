-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.17-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for task2
CREATE DATABASE IF NOT EXISTS `task2` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `task2`;

-- Dumping structure for table task2.employees
CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `hire_date` datetime DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `project_id` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table task2.employees: ~3 rows (approximately)
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` (`id`, `name`, `email`, `hire_date`, `salary`, `job_title`, `project_id`, `createdAt`, `updatedAt`) VALUES
	(1, 'Cosmin', 'a@a.a', '2021-01-01 00:00:00', 1234, 'Junior soft dev', 1, '2021-03-22 07:26:44', '2021-03-22 07:26:44'),
	(2, 'Alex', 'b@b.b', '2021-01-01 00:00:00', 12345, 'QA', 2, '2021-03-22 07:27:02', '2021-03-22 07:27:02'),
	(3, 'Mihai', 'c@c.c', '2021-01-01 00:00:00', 123456, 'devops', 3, '2021-03-22 07:27:56', '2021-03-22 07:27:56');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;

-- Dumping structure for table task2.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `planned_end_date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `project_code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table task2.projects: ~3 rows (approximately)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id`, `project_name`, `start_date`, `planned_end_date`, `description`, `project_code`, `createdAt`, `updatedAt`) VALUES
	(1, 'project1', '2021-01-01 00:00:00', '2022-01-01 00:00:00', 'abc', 'xyz', '2021-03-22 07:25:58', '2021-03-22 07:25:58'),
	(2, 'project2', '2021-01-01 00:00:00', '2022-01-01 00:00:00', 'def', 'zyx', '2021-03-22 07:26:13', '2021-03-22 07:26:13'),
	(3, 'project3', '2021-01-01 00:00:00', '2022-01-01 00:00:00', 'jkl', 'yxz', '2021-03-22 07:26:26', '2021-03-22 07:26:26');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
