-- Kajomi credential used to call APIs from Beyond
DROP TABLE IF EXISTS `kajomi_credential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kajomi_credential` (
  `shared_key` varchar(255) NOT NULL,
  `secret_key` varchar(255) NOT NULL,
  `api_server` varchar(1000) NOT NULL,
  `session_id` varchar(1000),
	`last_get_date` timestamp NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
