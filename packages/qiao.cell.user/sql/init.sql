-- MySQL dump 10.13  Distrib 5.6.40, for Linux (x86_64)
--
-- Host: localhost    Database: db_dishi
-- ------------------------------------------------------
-- Server version       5.6.40

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
-- Current Database: `db_dishi`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_rbac` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_rbac`;

/*Table structure for table `t_ucenter_code` */

DROP TABLE IF EXISTS `t_ucenter_code`;

CREATE TABLE `t_ucenter_code` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `ucenter_code_type` varchar(10) NOT NULL COMMENT '验证码类型',
  `ucenter_code_mobile` varchar(200) NOT NULL COMMENT '验证码手机号',
  `ucenter_code_code` char(6) NOT NULL COMMENT '验证码',
  `cdate` datetime NOT NULL COMMENT '创建时间',
  `cuser_id` int(10) NOT NULL COMMENT '创建人id',
  `cuser_name` varchar(200) NOT NULL COMMENT '创建人姓名',
  `udate` datetime NOT NULL COMMENT '更新时间',
  `uuser_id` int(10) NOT NULL COMMENT '更新人id',
  `uuser_name` varchar(200) NOT NULL COMMENT '更新人姓名',
  `del_tag` char(1) NOT NULL COMMENT '是否删除，0否，1是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `t_ucenter_code` */

/*Table structure for table `t_ucenter_user` */

DROP TABLE IF EXISTS `t_ucenter_user`;

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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

/*Data for the table `t_ucenter_user` */

insert  into `t_ucenter_user`(`id`,`ucenter_user_name`,`ucenter_user_password`,`cdate`,`cuser_id`,`cuser_name`,`udate`,`uuser_id`,`uuser_name`,`del_tag`) values (1,'18612257325','kud9vpBXcmQrYsYDJ7KCNw==','2018-12-19 17:05:07',1,'admin','2018-12-19 17:05:12',1,'admin','0');
