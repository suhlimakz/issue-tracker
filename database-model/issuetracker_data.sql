-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: issueTracker
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `issue`
--
DROP DATABASE IF EXISTS `issueTracker`;
CREATE DATABASE `issueTracker`;

USE `issueTracker`;

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) DEFAULT NULL,
  `createBy` int(11) DEFAULT NULL,
  `dueDate` datetime DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `assignee` int(11) DEFAULT NULL,
  `releaseId` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `createBy` (`createBy`),
  KEY `priority` (`priority`),
  KEY `status` (`status`),
  KEY `assignee` (`assignee`),
  KEY `releaseId` (`releaseId`),
  CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`createBy`) REFERENCES `user` (`id`),
  CONSTRAINT `issue_ibfk_2` FOREIGN KEY (`priority`) REFERENCES `priority` (`id`),
  CONSTRAINT `issue_ibfk_3` FOREIGN KEY (`status`) REFERENCES `status` (`id`),
  CONSTRAINT `issue_ibfk_4` FOREIGN KEY (`assignee`) REFERENCES `user` (`id`),
  CONSTRAINT `issue_ibfk_5` FOREIGN KEY (`releaseId`) REFERENCES `releaseInfo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
INSERT INTO `issue` VALUES (1,'Issue 01',10,'2021-03-02 00:00:00',1,1,5,1,'Teste de inserção de issue 1'),(2,'Issue 02',10,'2021-02-02 00:00:00',1,2,5,1,'Teste de inserção de issue 2'),(3,'Issue 03',10,'2021-03-02 00:00:00',2,3,5,1,'Teste de inserção de issue 3'),(4,'Issue 04',10,'2021-02-02 00:00:00',2,4,5,1,'Teste de inserção de issue 4'),(5,'Issue 05',10,'2021-02-02 00:00:00',1,1,5,1,'Teste de update10 de issue 5'),(6,'Issue 06',10,'2021-02-02 00:00:00',1,2,5,1,'Teste de inserção de issue 6'),(7,'Issue 07',5,'2021-03-14 00:00:00',1,1,10,1,'Teste de inserção de issue 7'),(8,'Issue 08',5,'2021-05-01 00:00:00',1,3,10,1,'Issue de prioridade High e status Doing'),(9,'Issue 09',5,'2021-05-15 00:00:00',1,3,10,1,'Issue 09 - Prioridade: High - Status: Doing'),(10,'Issue 10',10,'2021-05-19 00:00:00',1,4,5,1,'Issue 10 - Prioridade: High - Status: Done'),(11,'Issue 11',10,'2021-05-11 00:00:00',1,4,5,1,'Issue 11 - Prioridade: High - Status: Done');
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `priority`
--

DROP TABLE IF EXISTS `priority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `priority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `priority`
--

LOCK TABLES `priority` WRITE;
/*!40000 ALTER TABLE `priority` DISABLE KEYS */;
INSERT INTO `priority` VALUES (1,'high'),(2,'medium');
/*!40000 ALTER TABLE `priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `releaseInfo`
--

DROP TABLE IF EXISTS `releaseInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `releaseInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `releaseNumber` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `releaseInfo`
--

LOCK TABLES `releaseInfo` WRITE;
/*!40000 ALTER TABLE `releaseInfo` DISABLE KEYS */;
INSERT INTO `releaseInfo` VALUES (1,'0.0.0');
/*!40000 ALTER TABLE `releaseInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Backlog'),(2,'Todo'),(3,'Doing'),(4,'Done');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `level` (`level`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`level`) REFERENCES `userLevel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'Maria Souza','1a2bc3','maria.souza@issuetracker.com','photoMariaSouza.jpg',1,1),(4,'Maria Soares','senhaDaMariaSoares','mariasoares@email.com','photoDoMariaSoares.jpg',1,0),(5,'Pedro Soares','senhaDoPedroSoares','pedrosoares@email.com','photoDoPedroSoares.jpg',2,1),(6,'Maria Soares','senhaDaMariaSoares2','mariasoares2@email.com','photoDaMariaSoares2.jpg',3,0),(7,'José Barros','1234','josebarros@email.com','photojosebarros.jpg',4,1),(8,'Ana Costa','5678','anacosta@email.com','photoanacosta.jpg',4,0),(9,'Carlos Alves','8765','carlosalves@email.com','photoCarlosAlves.jpg',3,0),(10,'Luiza Dantas','123abc','luizadantas@email.com','photoLuizaDantas.jpg',3,1),(11,'Mariana Freitas','def456','marianafreitas@email.com','photoMarianaFreitas.jpg',3,1),(12,'Caio das Neves','456def','caioneves@email.com','photoCaioNeves',3,0),(13,'Luiz Antonio','678ghi','luizantonio@email.com','photoLuizAntonio',1,1),(14,'Maria Fernanda Caldas','ghi678','mariafernandacaldas@email.com','photoMariaFernandaCaldas.jpg',3,0),(15,'Carina Dias','91011jkl','carinadias@email.com','photoCarinaDias.jpg',3,1),(16,'Heloisa Santana','11109','heloisasantana@email.com','photoHeloisaSantana.jpg',3,0),(17,'Larissa Santana','abc2021','larissasantos@email.com','photoLarissaSantos.jpg',3,1),(18,'Marisa Lins','def2021','marisalins@email.com','photoMarisaLins.jpg',3,1),(19,'Otavio Lins','ghi2021','otaviolins@email.com','photoOtavioLins.jpg',3,1),(20,'Diego Maia','jkl2021','diegomaia@issuetracker.com','photoDiegoMaia.jpg',3,0),(21,'André Veiga','mno2021','andre.veiga@issuetracker.com','photoAndreVeiga.jpg',3,0),(22,'Lia Junqueira','pqr2021','liajunqueira@issuetracker.com','photoLiaJUnqueiraa.jpg',3,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userLevel`
--

DROP TABLE IF EXISTS `userLevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userLevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userLevel`
--

LOCK TABLES `userLevel` WRITE;
/*!40000 ALTER TABLE `userLevel` DISABLE KEYS */;
INSERT INTO `userLevel` VALUES (1,'Administrador'),(2,'Diretor'),(3,'Tech Lead'),(4,'Desenvolvedor');
/*!40000 ALTER TABLE `userLevel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-06 17:06:00
