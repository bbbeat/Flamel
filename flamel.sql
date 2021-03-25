-- MariaDB dump 10.18  Distrib 10.4.17-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: flamel
-- ------------------------------------------------------
-- Server version	10.4.17-MariaDB

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `listing_id` bigint(20) unsigned NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,2,1,'test','2021-03-19 12:50:15','2021-03-19 12:50:15'),(2,2,1,'test 2','2021-03-19 12:52:07','2021-03-19 12:52:07'),(3,2,1,'test 3','2021-03-19 12:52:42','2021-03-19 12:52:42'),(4,2,1,'test 4','2021-03-19 12:53:51','2021-03-19 12:53:51'),(5,2,1,'test 5','2021-03-19 12:55:03','2021-03-19 12:55:03'),(6,2,1,'test 6','2021-03-19 12:56:53','2021-03-19 12:56:53'),(7,2,2,'test 55','2021-03-19 13:37:22','2021-03-19 13:37:22'),(8,2,3,'test 6666','2021-03-19 13:50:30','2021-03-19 13:50:30'),(9,2,3,'test 123','2021-03-19 13:59:35','2021-03-19 13:59:35'),(10,2,5,'test 765','2021-03-19 14:13:05','2021-03-19 14:13:05'),(11,2,5,'1234567890','2021-03-19 14:13:17','2021-03-19 14:13:17'),(12,2,5,'Ondrej it works!','2021-03-19 14:41:22','2021-03-19 14:41:22'),(13,2,5,'17:09','2021-03-19 15:09:23','2021-03-19 15:09:23'),(14,2,1,'see the date','2021-03-19 15:18:00','2021-03-19 15:18:00'),(15,5,8,'cool','2021-03-19 15:35:39','2021-03-19 15:35:39'),(16,2,4,'1','2021-03-22 08:40:43','2021-03-22 08:40:43'),(17,2,7,'1','2021-03-22 09:40:14','2021-03-22 09:40:14'),(18,5,9,'i want to buy it','2021-03-22 15:27:27','2021-03-22 15:27:27');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listings`
--

DROP TABLE IF EXISTS `listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `offer_or_request` tinyint(1) NOT NULL,
  `location_id` bigint(20) unsigned NOT NULL,
  `method_of_transfer_id` bigint(20) unsigned NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listings`
--

LOCK TABLES `listings` WRITE;
/*!40000 ALTER TABLE `listings` DISABLE KEYS */;
INSERT INTO `listings` VALUES (1,1,'test','qwe',0,1,1,'999','2021-03-16 13:26:06','2021-03-16 13:26:06'),(2,1,'test','qwe',0,1,1,'999','2021-03-16 13:33:35','2021-03-16 13:33:35'),(3,1,'test','qwe',0,1,1,'999','2021-03-16 13:36:09','2021-03-16 13:36:09'),(4,1,'test','qwe',0,1,1,'999','2021-03-16 13:39:09','2021-03-16 13:39:09'),(5,1,'test','qwe',0,1,1,'999','2021-03-16 15:07:01','2021-03-16 15:07:01'),(6,2,'test2','22',1,2,2,'999','2021-03-16 15:08:32','2021-03-16 15:08:32'),(7,4,'shoes','red shoes',0,4,2,'100','2021-03-18 19:41:32','2021-03-18 19:41:32'),(8,5,'batmobile','new in the nylon',0,1,2,'20','2021-03-19 15:35:02','2021-03-19 15:35:02'),(9,6,'top','green shirt',0,1,2,'100','2021-03-22 15:25:48','2021-03-22 15:25:48'),(10,2,'test','test2',0,1,1,'111','2021-03-23 11:56:02','2021-03-23 11:56:02'),(11,2,'test','1234',0,1,1,'111','2021-03-23 11:56:34','2021-03-23 11:56:34'),(12,2,'test12','123',0,1,1,'111','2021-03-23 12:00:58','2021-03-23 12:00:58'),(13,2,'test','1234',0,1,1,'999','2021-03-23 12:03:48','2021-03-23 12:03:48'),(14,2,'true','1234',1,1,1,'111','2021-03-23 12:05:51','2021-03-23 12:05:51'),(15,2,'true 2','1212',1,1,1,'111','2021-03-23 12:06:34','2021-03-23 12:06:34'),(16,2,'request','12',0,1,2,'999','2021-03-23 12:06:58','2021-03-23 12:06:58');
/*!40000 ALTER TABLE `listings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Prague','2021-03-16 12:09:54','2021-03-16 12:09:54'),(2,'Brno','2021-03-16 12:09:54','2021-03-16 12:09:54'),(3,'Ostrava','2021-03-16 12:09:54','2021-03-16 12:09:54'),(4,'Plzeň','2021-03-16 12:09:54','2021-03-16 12:09:54'),(5,'Liberec','2021-03-16 12:09:54','2021-03-16 12:09:54'),(6,'Olomouc','2021-03-16 12:09:54','2021-03-16 12:09:54');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from_user_id` bigint(20) unsigned NOT NULL,
  `to_user_id` bigint(20) unsigned NOT NULL,
  `transaction_id` bigint(20) unsigned NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `methods_of_transfers`
--

DROP TABLE IF EXISTS `methods_of_transfers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `methods_of_transfers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `methods_of_transfers`
--

LOCK TABLES `methods_of_transfers` WRITE;
/*!40000 ALTER TABLE `methods_of_transfers` DISABLE KEYS */;
INSERT INTO `methods_of_transfers` VALUES (1,'Online','2021-03-16 12:09:54','2021-03-16 12:09:54'),(2,'In Person','2021-03-16 12:09:54','2021-03-16 12:09:54');
/*!40000 ALTER TABLE `methods_of_transfers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (89,'2014_10_12_000000_create_users_table',1),(90,'2014_10_12_100000_create_password_resets_table',1),(91,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(92,'2019_12_14_000001_create_personal_access_tokens_table',1),(93,'2021_03_11_143317_create_listings_table',1),(94,'2021_03_11_144157_create_transactions_table',1),(95,'2021_03_11_144734_create_messages_table',1),(96,'2021_03_11_144940_create_comments_table',1),(97,'2021_03_11_145115_create_methods_of_transfers_table',1),(98,'2021_03_11_145220_create_locations_table',1),(99,'2021_03_11_145453_create_pictures_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictures`
--

DROP TABLE IF EXISTS `pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pictures` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `listing_id` bigint(20) unsigned NOT NULL,
  `picture_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `is_profile` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictures`
--

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tests` (
  `test_id` int(11) NOT NULL,
  `test_name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,''),(2,'abc'),(2,'abc');
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `listing_id` bigint(20) unsigned NOT NULL,
  `b_user_id` bigint(20) unsigned NOT NULL,
  `is_agreed_user_a` datetime DEFAULT NULL,
  `is_agreed_user_b` datetime DEFAULT NULL,
  `is_complete_user_a` datetime DEFAULT NULL,
  `is_complete_user_b` datetime DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1,2,NULL,NULL,NULL,NULL,'999',NULL,'2021-03-22 13:39:06','2021-03-22 13:39:06'),(2,1,2,NULL,NULL,NULL,NULL,'999',NULL,'2021-03-22 14:41:57','2021-03-22 14:41:57'),(3,1,2,NULL,NULL,NULL,NULL,'999',NULL,'2021-03-22 14:44:12','2021-03-22 14:44:12'),(4,1,2,NULL,NULL,NULL,NULL,'100',NULL,'2021-03-22 14:55:56','2021-03-22 14:55:56'),(5,9,5,NULL,NULL,NULL,NULL,'70',NULL,'2021-03-22 15:27:37','2021-03-22 15:27:37'),(6,8,2,NULL,NULL,NULL,NULL,'100',NULL,'2021-03-22 16:25:48','2021-03-22 16:25:48'),(7,6,2,NULL,NULL,NULL,NULL,'800',NULL,'2021-03-23 18:47:43','2021-03-23 18:47:43');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location_id` bigint(20) unsigned NOT NULL,
  `birth_date` date NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double(8,2) DEFAULT NULL,
  `credits_available` int(11) NOT NULL DEFAULT 500,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1','last1','abc@email.com',4,'2001-12-30','1234567890',NULL,'test',NULL,500,NULL,'$2y$10$DRdP6mrxSGK/ks2Z6NbCZ.2.p8sxQ0jzrt/zTOlbFJg.4E42NIRBO',NULL,NULL,NULL,0,NULL,'2021-03-18 19:40:41','2021-03-18 19:40:41'),(2,'Gal','Granov','granovgal@gmail.com',3,'2002-01-01','+420774293663',NULL,'test',NULL,500,NULL,'$2y$10$conrLGWlt/opgpUwPg/RJuHL7Ojf4JvQnwgHNBCWpDOxiyap45DaC',NULL,NULL,NULL,0,NULL,'2021-03-16 14:25:46','2021-03-16 14:25:46'),(5,'bat','man','batman@email.com',4,'2002-01-01','1234567890',NULL,'i am the night',NULL,500,NULL,'$2y$10$H6Z6Gv3O49U.4JwdmY1xYe2tGtXRjlbEed90O0TiLeQnkctIO3xf6',NULL,NULL,NULL,0,NULL,'2021-03-19 15:33:50','2021-03-19 15:33:50'),(6,'Pavla','Luxová','papaja@email.com',1,'1995-10-20','+420728853893',NULL,'UJHJKHBNBN',NULL,500,NULL,'$2y$10$vyZHZ/YdwfmEd0wEPVwN1e8KgZ19uRYpH5Xc.Idek5MP3xzURC1yS',NULL,NULL,NULL,0,NULL,'2021-03-22 15:25:18','2021-03-22 15:25:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-24 11:06:00
