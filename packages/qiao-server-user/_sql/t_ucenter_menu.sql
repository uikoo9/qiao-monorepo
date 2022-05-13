--
-- Table structure for table `t_ucenter_menu`
--

DROP TABLE IF EXISTS `t_ucenter_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ucenter_menu` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `ucenter_menu_parent` int(10) NOT NULL COMMENT '菜单父id',
  `ucenter_menu_sn` char(3) NOT NULL COMMENT '菜单序号',
  `ucenter_menu_title` varchar(200) NOT NULL COMMENT '菜单名称',
  `ucenter_menu_url` varchar(200) NOT NULL COMMENT '菜单地址',
  `cdate` datetime NOT NULL COMMENT '创建时间',
  `cuser_id` int(10) NOT NULL COMMENT '创建人id',
  `cuser_name` varchar(200) NOT NULL COMMENT '创建人姓名',
  `udate` datetime NOT NULL COMMENT '更新时间',
  `uuser_id` int(10) NOT NULL COMMENT '更新人id',
  `uuser_name` varchar(200) NOT NULL COMMENT '更新人姓名',
  `del_tag` char(1) NOT NULL COMMENT '是否删除，0否，1是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ucenter_menu`
--

LOCK TABLES `t_ucenter_menu` WRITE;
/*!40000 ALTER TABLE `t_ucenter_menu` DISABLE KEYS */;
INSERT INTO `t_ucenter_menu` VALUES (7,0,'01','用户模块','--','2019-03-07 17:45:38',1,'admin','2019-03-07 17:45:38',1,'admin','0'),(8,0,'03','订单模块','--','2019-03-07 17:45:48',1,'admin','2019-03-07 17:51:43',1,'admin','0'),(9,0,'04','财务模块','--','2019-03-07 17:46:02',1,'admin','2019-03-07 17:51:38',1,'admin','0'),(10,0,'05','养老院模块','--','2019-03-07 17:46:14',1,'admin','2019-03-07 17:51:32',1,'admin','0'),(11,0,'06','帖子模块','--','2019-03-07 17:46:32',1,'admin','2019-03-07 17:51:27',1,'admin','0'),(12,7,'01','用户管理','./user/user-info.js','2019-03-07 17:47:08',1,'admin','2019-03-07 17:47:08',1,'admin','0'),(13,7,'02','用户推荐管理','./user/user-recommend.js','2019-03-07 17:47:29',1,'admin','2019-03-07 17:47:29',1,'admin','0'),(14,8,'01','订单管理','./order/order-item.js','2019-03-07 17:47:54',1,'admin','2019-03-07 17:47:54',1,'admin','0'),(15,9,'01','充提缴费管理','./bank/bank-record.js','2019-03-07 17:48:17',1,'admin','2019-03-07 17:48:17',1,'admin','0'),(16,9,'02','康养共享金管理','./bank/bank-fund.js','2019-03-07 17:48:26',1,'admin','2019-03-07 17:49:44',1,'admin','0'),(17,9,'03','工分明细管理','./bank/bank-point.js','2019-03-07 17:48:32',1,'admin','2019-03-07 17:49:55',1,'admin','0'),(18,10,'01','养老院明细管理','./home/home-item.js','2019-03-07 17:48:44',1,'admin','2019-03-07 17:50:09',1,'admin','0'),(19,10,'02','养老院报名管理','./home/home-user.js','2019-03-07 17:48:49',1,'admin','2019-03-07 17:50:22',1,'admin','0'),(20,11,'01','帖子类型管理','./blog/blog-type.js','2019-03-07 17:49:00',1,'admin','2019-03-07 17:50:37',1,'admin','0'),(21,11,'02','帖子详情管理','./blog/blog-item.js','2019-03-07 17:49:26',1,'admin','2019-03-07 17:50:53',1,'admin','0'),(22,0,'02','权限模块','--','2019-03-07 17:51:54',1,'admin','2019-03-07 17:51:54',1,'admin','0'),(23,22,'01','菜单管理','./ucenter/ucenter-menu.js','2019-03-07 17:52:04',1,'admin','2019-03-07 17:52:38',1,'admin','0'),(24,22,'02','角色管理','./ucenter/ucenter-role.js','2019-03-07 17:52:12',1,'admin','2019-03-07 17:53:01',1,'admin','0'),(25,22,'03','角色菜单管理','./ucenter/ucenter-role-r-menu.js','2019-03-07 17:52:18',1,'admin','2019-03-07 17:53:13',1,'admin','0'),(26,22,'04','角色用户管理','./ucenter/ucenter-role-r-user.js','2019-03-07 17:52:25',1,'admin','2019-03-07 17:53:24',1,'admin','0');
/*!40000 ALTER TABLE `t_ucenter_menu` ENABLE KEYS */;
UNLOCK TABLES;