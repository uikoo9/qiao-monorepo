--
-- Table structure for table `t_ucenter_role_r_user`
--

DROP TABLE IF EXISTS `t_ucenter_role_r_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ucenter_role_r_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `ucenter_role_id` int(10) NOT NULL COMMENT '角色id',
  `ucenter_user_id` int(10) NOT NULL COMMENT '用户id',
  `cdate` datetime NOT NULL COMMENT '创建时间',
  `cuser_id` int(10) NOT NULL COMMENT '创建人id',
  `cuser_name` varchar(200) NOT NULL COMMENT '创建人姓名',
  `udate` datetime NOT NULL COMMENT '更新时间',
  `uuser_id` int(10) NOT NULL COMMENT '更新人id',
  `uuser_name` varchar(200) NOT NULL COMMENT '更新人姓名',
  `del_tag` char(1) NOT NULL COMMENT '是否删除，0否，1是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ucenter_role_r_user`
--

LOCK TABLES `t_ucenter_role_r_user` WRITE;
/*!40000 ALTER TABLE `t_ucenter_role_r_user` DISABLE KEYS */;
INSERT INTO `t_ucenter_role_r_user` VALUES (1,3,1,'2019-03-07 17:57:12',1,'admin','2019-03-07 17:57:12',1,'admin','0'),(2,5,41,'2019-03-07 18:28:47',1,'admin','2019-03-07 18:28:47',1,'admin','0'),(3,6,25,'2019-03-07 18:30:20',1,'admin','2019-03-07 18:30:20',1,'admin','0'),(4,6,38,'2019-03-07 18:30:25',1,'admin','2019-03-07 18:30:25',1,'admin','0');
/*!40000 ALTER TABLE `t_ucenter_role_r_user` ENABLE KEYS */;
UNLOCK TABLES;