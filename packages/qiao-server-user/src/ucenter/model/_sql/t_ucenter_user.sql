--
-- Table structure for table `t_ucenter_user`
--

DROP TABLE IF EXISTS `t_ucenter_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ucenter_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `ucenter_user_name` varchar(200) NOT NULL COMMENT '用户名',
  `ucenter_user_password` varchar(200) NOT NULL COMMENT '用户密码',
  `cdate` datetime NOT NULL COMMENT '创建时间',
  `cuser_id` int(10) NOT NULL COMMENT '创建人id',
  `cuser_name` varchar(200) NOT NULL COMMENT '创建人姓名',
  `udate` datetime NOT NULL COMMENT '更新时间',
  `uuser_id` int(10) NOT NULL COMMENT '更新人id',
  `uuser_name` varchar(200) NOT NULL COMMENT '更新人姓名',
  `del_tag` char(1) NOT NULL COMMENT '是否删除，0否，1是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ucenter_user`
--

LOCK TABLES `t_ucenter_user` WRITE;
/*!40000 ALTER TABLE `t_ucenter_user` DISABLE KEYS */;
INSERT INTO `t_ucenter_user` VALUES (1,'admin','ORorWpQcRITi3F8UJRoRdg==','2018-11-13 19:57:04',1,'admin','2018-11-13 19:57:10',1,'admin','0'),(25,'18612257325','ORorWpQcRITi3F8UJRoRdg==','2018-12-19 17:05:07',1,'admin','2018-12-19 17:05:12',1,'admin','0'),(38,'15343581364','tGtdyZiAgVUl/ZiwPvcIAw==','2019-02-19 00:18:11',1,'admin','2019-02-19 00:18:11',1,'admin','0'),(41,'13994848178','9YXjteMdU+5kgQokEcusVw==','2019-03-07 18:24:12',1,'admin','2019-03-07 18:24:12',1,'admin','0'),(46,'13619511809','dBTugImwflCGmTZQ2AA51w==','2019-06-10 09:12:56',1,'admin','2019-06-10 09:12:56',1,'admin','0'),(47,'18828078225','MFfPqKWFy1jLzb35w/b9cA==','2019-08-07 14:55:20',1,'admin','2019-08-07 14:55:20',1,'admin','0');
/*!40000 ALTER TABLE `t_ucenter_user` ENABLE KEYS */;
UNLOCK TABLES;
