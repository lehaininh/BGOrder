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
	`send_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`saved` tinyint(1) DEFAULT '0',
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	UNIQUE KEY `sendout_unique` (`mailing_system`,`mailing_system_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
