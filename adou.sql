/*
 Navicat Premium Data Transfer

 Source Server         : adouMysql
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : 127.0.0.1:3306
 Source Schema         : adou

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 24/06/2019 13:36:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ad_account
-- ----------------------------
DROP TABLE IF EXISTS `ad_account`;
CREATE TABLE `ad_account`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Descript` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CreateDateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `UpdateDateTime` datetime(0) NOT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ad_account
-- ----------------------------
INSERT INTO `ad_account` VALUES (1, '111', '222', '333', '444', '555', '666', '777', '888', '2019-06-19 21:15:15', '2019-06-19 21:15:15');
INSERT INTO `ad_account` VALUES (2, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:22:49', '2019-06-19 21:22:32');
INSERT INTO `ad_account` VALUES (3, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:28:31', '2019-06-19 09:28:31');
INSERT INTO `ad_account` VALUES (4, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:31', '2019-06-19 09:31:31');
INSERT INTO `ad_account` VALUES (5, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:31', '2019-06-19 09:31:31');
INSERT INTO `ad_account` VALUES (6, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:32', '2019-06-19 09:31:32');
INSERT INTO `ad_account` VALUES (7, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:32', '2019-06-19 09:31:32');
INSERT INTO `ad_account` VALUES (8, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:32', '2019-06-19 09:31:32');
INSERT INTO `ad_account` VALUES (9, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:32', '2019-06-19 09:31:32');
INSERT INTO `ad_account` VALUES (10, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:32', '2019-06-19 09:31:32');
INSERT INTO `ad_account` VALUES (11, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:33', '2019-06-19 09:31:33');
INSERT INTO `ad_account` VALUES (12, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:33', '2019-06-19 09:31:33');
INSERT INTO `ad_account` VALUES (13, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:33', '2019-06-19 09:31:33');
INSERT INTO `ad_account` VALUES (14, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:33', '2019-06-19 09:31:33');
INSERT INTO `ad_account` VALUES (15, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:33', '2019-06-19 09:31:33');
INSERT INTO `ad_account` VALUES (16, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:33', '2019-06-19 09:31:33');
INSERT INTO `ad_account` VALUES (17, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:34', '2019-06-19 09:31:34');
INSERT INTO `ad_account` VALUES (18, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:34', '2019-06-19 09:31:34');
INSERT INTO `ad_account` VALUES (19, '我是标题', '我是账号', '我是密码', '我是邮箱', '我是手机号', '我是链接地址', '我是描述', '我是内容', '2019-06-19 21:31:34', '2019-06-19 09:31:34');

-- ----------------------------
-- Table structure for ad_user
-- ----------------------------
DROP TABLE IF EXISTS `ad_user`;
CREATE TABLE `ad_user`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `IsDelete` bit(1) NOT NULL,
  `IsAdministrator` bit(1) NOT NULL,
  `Gender` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CreateDataTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `UpdateDataTime` datetime(0) NOT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
