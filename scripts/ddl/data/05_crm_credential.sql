-- Credentials to log in CRM system
DROP TABLE IF EXISTS `crm_credential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crm_credential` (
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token` varchar(255) COLLATE utf8mb4_unicode_ci,
  `download_token` varchar(255) COLLATE utf8mb4_unicode_ci,
  `refresh_token` varchar(255) COLLATE utf8mb4_unicode_ci,
  `last_account_time` timestamp NULL,
  `last_user_time` timestamp NULL,
  `last_opportunity_time` timestamp NULL,
  `last_task_time` timestamp NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
