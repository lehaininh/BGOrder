USE crawldb;

DROP TABLE IF EXISTS `beyond_credential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beyond_credential` (
	`shared_key` varchar(255) NOT NULL,
	`secret_key` varchar(255) NOT NULL,
	`api_server` varchar(1000) NOT NULL,
	`session_id` varchar(1000),
	`last_get_date` timestamp NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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

INSERT INTO `kajomi_credential` (`shared_key`, `secret_key`, `api_server`) VALUES ("evaniamedia", "ZS+jT0K6+O5f9JDFXG3Yc7li2CU=", "http://api.kajomimail.de/srv");
INSERT INTO `beyond_credential` (`shared_key`, `secret_key`, `api_server`) VALUES ("evania_apiusr", "XAkJeib^LBuCgBqvV-ZeYr^jqoJa", "https://em6.beyondrm.com");

-- A record of 1 sendout
DROP TABLE IF EXISTS `sendout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sendout` (
	`id` varchar(20) NOT NULL,
	`name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`subject` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`sender` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`audience` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`template_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`unit_cost` float,
	`mailing_system` varchar(20),
	`mailing_system_identifier` varchar(255),
	`openning` int(11),
	`openner` int(11),
	`click` int(11),
	`clicker` int(11),
	`sent_mails` int(11),
	`saved` tinyint(1) DEFAULT '0',
	`send_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	UNIQUE KEY `sendout_unique` (`mailing_system`,`mailing_system_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

UPDATE `version` SET name = '00.00.01';
