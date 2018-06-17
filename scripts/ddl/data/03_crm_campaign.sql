-- List of campaigns on CRM system
DROP TABLE IF EXISTS `crm_campaign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_campaign` (
  `id` varchar(20) NOT NULL,
  `crm_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crm_account_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `crm_sales_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `campaign_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `geo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`name` text,
	`advertiser` text,
	`booked_mails` int(11),
  `won_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`saved` tinyint(1) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
	UNIQUE KEY `crm_id` (`crm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
