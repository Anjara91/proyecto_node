-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: eventos_deportivos
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `tipoDeporte` varchar(255) NOT NULL,
  `organizador` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES (1,'FC BARCELONA - REAL MADRID','PARTIDO LIGA','2025-01-16','BARCELONA','FUTBOL','Anjara.admin'),(11,'CAROLINA MARIN - PUSARLA V. SINDHU','PARTIDO BALONCESTO','2024-12-24','BARCELONA','BALONCESTO','Anjara.Admin'),(23,'CIRCUITO DE MONACO','CARRERA FORMULA 1','2025-03-09','MONACO','FORMULA 1','Paula.admin'),(24,'CARLOS ALCARAZ - FEDERER','TORNEO WIMBLEDON','2025-05-01','LONDRES','TENIS','Paula.admin'),(25,'CAROLINA MARIN - PUSARLA V. SINDHU','SINGAPORE OPEN','2024-12-23','SINGAPORE','BADMINTON','Paula.admin'),(26,'FC BARCELONA F - MANCHESTER CITY W.F.C','PARTIDO CHAMPIONS FEMENINA','2024-12-18','BARCELONA','FUTBOL','Anjara.admin'),(27,'CICLISMO EN RUTA','CAMPEONATO MUNDIAL','2025-09-21','RUANDA','CICLISMO','Anjara.admin'),(28,'ATLETICO VALLADOLID - GRANOLLERS','LIGA ASOBAL','2025-03-01','VALLADOLID','BALONMANO','Anjara.admin'),(29,'CIRCUITO DE LAS AMERICAS','CAMPEONATO MUNDIAL','2025-03-30','TEXAS','MOTOGP','Anjara.admin'),(30,'CD TENERIFE - LAS PALMAS','PARTIDO COPA DEL REY','2024-12-19','TENERIFE','FUTBOL','Anjara.admin');
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(4) NOT NULL DEFAULT 'u',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Anjara.admin','$2b$10$CaHI9ISLyNOp0t1CZKOvgeoybQyJyRcEPIMEdsxv7nr9jZE7vQLYy','a'),(3,'Carla.user','$2b$10$uAJC4JMbkgfDHD9lj9X86ey2wfDzA7jtpfXW6K07BJN7.yF6x2AzS','u'),(4,'Pablo.user','$2b$10$ZzDnYp3IGQM.TcE3jYZvNeBpfq89HrfIRaESuQz.fcO29Z3e.O/Ty','u'),(5,'Ivan.user','$2b$10$C17QWM2OBAfskBd.3pWXhu6nV1yu755.8p8IGnLqQi/j4kjlMB6Ye','u'),(6,'Paula.admin','$2b$10$JuRscE8A4ErwJ4NPEWXy9OKNv0HlW4JuUgStiXxl.Vl9jGU5rtbeO','a'),(7,'Luisa.user','$2b$10$ZDlKZfSdCX5e7.UMJHJcaOfVZat10Ygh3h5vkEGju88dURgMMa.Te','u');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-14 21:21:11
