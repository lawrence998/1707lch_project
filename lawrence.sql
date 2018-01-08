/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : lawrence

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:02:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) NOT NULL COMMENT '商品名称',
  `price` decimal(10,2) NOT NULL COMMENT '商品价格',
  `color` varchar(255) DEFAULT NULL COMMENT '商品颜色',
  `imgurl` varchar(255) DEFAULT '../img/product1.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg' COMMENT '图片地址',
  `category` varchar(255) NOT NULL DEFAULT 'xianguo' COMMENT '商品种类',
  `qty` int(11) unsigned NOT NULL DEFAULT '1' COMMENT '商品数量',
  `title` varchar(255) NOT NULL DEFAULT '酥到挖着吃 宝贝辅食推荐' COMMENT '商品描述',
  `unit` varchar(255) NOT NULL DEFAULT '1kg' COMMENT '单位',
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '商品添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '心扉水果礼盒', '118.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:25:50');
INSERT INTO `goods` VALUES ('2', '心悦水果礼盒', '188.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:26:01');
INSERT INTO `goods` VALUES ('3', '心悦水果果干礼盒', '188.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:26:11');
INSERT INTO `goods` VALUES ('4', '心意水果礼盒', '238.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:26:19');
INSERT INTO `goods` VALUES ('5', '心意生鲜礼盒', '238.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:26:31');
INSERT INTO `goods` VALUES ('6', '心喜水果礼盒', '328.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:26:42');
INSERT INTO `goods` VALUES ('7', '心喜生鲜礼盒', '328.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:26:51');
INSERT INTO `goods` VALUES ('8', '心愿水果礼盒', '558.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:27:03');
INSERT INTO `goods` VALUES ('9', '心愿生鲜礼盒', '558.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:27:16');
INSERT INTO `goods` VALUES ('10', '中国年味礼盒', '368.00', null, 'img/g1.jpg,../img/detail_index1-1.jpg,../img/detail_index1-2.jpg,../img/detail_index1-3.jpg,../img/detail_index1-4.jpg,../img/detail_index1-5.jpg,../img/detail_index1-6.jpg', 'lihe', '1', '备上缤纷水果 敞开温暖心扉', '礼盒', '2018-01-06 15:27:27');
INSERT INTO `goods` VALUES ('11', '天天果园100元充值卡', '100.00', null, 'img/card1.jpg,../img/detail_index2-1.jpg,../img/detail_index2-2.jpg,../img/detail_index2-3.jpg,../img/detail_index2-4.jpg,../img/detail_index2-5.jpg,../img/detail_index2-6.jpg', 'card', '1', '用卡享新鲜 幸福享不停', '1张', '2018-01-06 15:42:12');
INSERT INTO `goods` VALUES ('12', '天天果园200元充值卡', '200.00', null, 'img/card1.jpg,../img/detail_index2-1.jpg,../img/detail_index2-2.jpg,../img/detail_index2-3.jpg,../img/detail_index2-4.jpg,../img/detail_index2-5.jpg,../img/detail_index2-6.jpg', 'card', '1', '用卡享新鲜 幸福享不停', '1张', '2018-01-06 15:43:18');
INSERT INTO `goods` VALUES ('13', '天天果园300元充值卡', '300.00', null, 'img/card1.jpg,../img/detail_index2-1.jpg,../img/detail_index2-2.jpg,../img/detail_index2-3.jpg,../img/detail_index2-4.jpg,../img/detail_index2-5.jpg,../img/detail_index2-6.jpg', 'card', '1', '用卡享新鲜 幸福享不停', '1张', '2018-01-06 15:43:27');
INSERT INTO `goods` VALUES ('14', '天天果园500元充值卡', '500.00', null, 'img/card1.jpg,../img/detail_index2-1.jpg,../img/detail_index2-2.jpg,../img/detail_index2-3.jpg,../img/detail_index2-4.jpg,../img/detail_index2-5.jpg,../img/detail_index2-6.jpg', 'card', '1', '用卡享新鲜 幸福享不停', '1张', '2018-01-06 15:43:39');
INSERT INTO `goods` VALUES ('15', '天天果园1000元充值卡', '1000.00', null, 'img/card1.jpg,../img/detail_index2-1.jpg,../img/detail_index2-2.jpg,../img/detail_index2-3.jpg,../img/detail_index2-4.jpg,../img/detail_index2-5.jpg,../img/detail_index2-6.jpg', 'card', '1', '用卡享新鲜 幸福享不停', '1张', '2018-01-06 15:43:50');
INSERT INTO `goods` VALUES ('16', '小巨弹金桔', '49.80', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '1kg', '2018-01-06 15:56:23');
INSERT INTO `goods` VALUES ('17', '圣诞平安小礼盒', '19.90', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '1个', '2018-01-06 15:56:53');
INSERT INTO `goods` VALUES ('18', '智利甜心樱桃', '49.90', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '500g', '2018-01-06 15:57:12');
INSERT INTO `goods` VALUES ('19', '美国爱妃苹果（巨无霸）', '68.00', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '3个', '2018-01-06 15:57:26');
INSERT INTO `goods` VALUES ('20', '圣诞平安果', '9.90', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '1个', '2018-01-06 15:57:41');
INSERT INTO `goods` VALUES ('21', '长柄草莓', '39.90', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '320g', '2018-01-06 15:58:01');
INSERT INTO `goods` VALUES ('22', '美国红安琪', '69.80', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '8个', '2018-01-06 15:58:18');
INSERT INTO `goods` VALUES ('23', '橙先生-18K（L）', '68.00', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '2.5kg', '2018-01-06 15:58:40');
INSERT INTO `goods` VALUES ('24', '慕斯蜜木瓜（无籽）（礼盒装）', '29.90', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '1个', '2018-01-06 15:59:06');
INSERT INTO `goods` VALUES ('25', '云南夏黑葡萄', '58.00', null, 'img/jiating1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'jiating', '1', '天生肉嘟嘟 竟然这么甜', '2kg', '2018-01-06 17:32:01');
INSERT INTO `goods` VALUES ('26', '新西兰樱桃', '218.00', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '1kg', '2018-01-06 16:09:08');
INSERT INTO `goods` VALUES ('27', '优选法国爵士苹果', '49.90', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '6个', '2018-01-06 16:09:12');
INSERT INTO `goods` VALUES ('28', '新奇士美国脐橙', '39.90', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '6个', '2018-01-06 16:09:15');
INSERT INTO `goods` VALUES ('29', 'mini脆脆枣', '25.80', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '1kg', '2018-01-06 16:08:03');
INSERT INTO `goods` VALUES ('30', '墨西哥牛油果', '39.90', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '6个', '2018-01-06 16:09:41');
INSERT INTO `goods` VALUES ('31', '涌泉无籽蜜桔', '45.80', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '2.5kg', '2018-01-06 16:09:59');
INSERT INTO `goods` VALUES ('32', '海南金凤凰蜜瓜', '29.80', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '1个', '2018-01-06 16:10:17');
INSERT INTO `goods` VALUES ('33', '美国华盛顿甜脆红地厘蛇果', '39.90', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '6个', '2018-01-06 16:10:34');
INSERT INTO `goods` VALUES ('34', '新疆阿克苏冰糖心苹果', '49.90', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '2.5kg', '2018-01-06 16:11:07');
INSERT INTO `goods` VALUES ('35', '麒麟西瓜', '68.00', null, 'img/quanqiu1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'quanqiu', '1', '饱满多汁 大颗让甜蜜加倍', '1个', '2018-01-06 16:11:25');
INSERT INTO `goods` VALUES ('36', '崇明生态冰鲜草鸡', '68.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '1000g', '2018-01-06 16:14:40');
INSERT INTO `goods` VALUES ('37', '崇明生态冰鲜阉鸡', '178.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '1500g', '2018-01-06 16:14:57');
INSERT INTO `goods` VALUES ('38', '英国活扇贝', '48.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '1个', '2018-01-06 16:15:11');
INSERT INTO `goods` VALUES ('39', '英国活蓝贻贝', '88.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '1kg', '2018-01-06 16:15:30');
INSERT INTO `goods` VALUES ('40', '阿根廷红虾（巨无霸 L1级）', '199.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '2kg', '2018-01-06 16:15:47');
INSERT INTO `goods` VALUES ('41', '智利爱阁鸡翅中', '65.90', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '1000g', '2018-01-06 16:15:58');
INSERT INTO `goods` VALUES ('42', '巴西牛腱肉', '89.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '1kg', '2018-01-06 16:16:12');
INSERT INTO `goods` VALUES ('43', '刺身组合(三文鱼刺身+北极贝)', '69.80', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '组合1份', '2018-01-06 16:16:44');
INSERT INTO `goods` VALUES ('44', '美国特选级安格斯西冷牛排', '99.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '200g', '2018-01-06 16:17:04');
INSERT INTO `goods` VALUES ('45', '澳洲草饲上脑牛排(S级)', '19.90', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '200g', '2018-01-06 16:17:22');
INSERT INTO `goods` VALUES ('46', '鲜曝大黄鱼（送调料包）', '49.90', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '270g', '2018-01-06 16:17:38');
INSERT INTO `goods` VALUES ('47', '农家散养鸽子蛋', '39.90', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '6枚', '2018-01-06 16:17:55');
INSERT INTO `goods` VALUES ('48', '鲜活松叶蟹', '298.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '750g-1000g', '2018-01-06 16:18:19');
INSERT INTO `goods` VALUES ('49', '鲜活蛏子', '36.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '500g', '2018-01-06 16:18:35');
INSERT INTO `goods` VALUES ('50', '越南生冻黑虎虾仁（大）', '39.00', null, 'img/shengxian1.jpg,../img/detail_index3-1.jpg,../img/detail_index3-2.jpg,../img/detail_index3-3.jpg,../img/detail_index3-4.jpg,../img/detail_index3-5.jpg,../img/detail_index3-6.jpg', 'shengxian', '1', '农场每日奔跑 怎会不紧实', '200g', '2018-01-06 16:18:52');
INSERT INTO `goods` VALUES ('51', '荷兰青啤梨', '19.90', null, '../img/product1.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '4个', '2018-01-06 18:04:52');
INSERT INTO `goods` VALUES ('52', '越南火龙果', '35.80', null, '../img/product2.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '2.5kg', '2018-01-06 19:01:31');
INSERT INTO `goods` VALUES ('53', '新疆阿克苏冰糖心苹果', '19.80', null, '../img/product3.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '1kg', '2018-01-06 19:02:00');
INSERT INTO `goods` VALUES ('54', '美国华盛顿甜脆红地厘蛇果', '128.00', null, '../img/product4.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '20个', '2018-01-06 19:02:25');
INSERT INTO `goods` VALUES ('55', '墨西哥牛油果', '39.90', null, '../img/product5.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '6个', '2018-01-06 19:04:36');
INSERT INTO `goods` VALUES ('56', '明月千里礼盒生鲜礼盒', '218.00', null, '../img/product6.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.\r\r\njpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '1盒', '2018-01-06 19:05:26');
INSERT INTO `goods` VALUES ('57', '新奇士美国脐橙', '59.90', null, '../img/product7.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.\r\r\njpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '12个', '2018-01-06 19:06:06');
INSERT INTO `goods` VALUES ('58', '四川安岳柠檬', '9.90', null, '../img/product8.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.\r\r\njpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '4个', '2018-01-06 19:06:25');
INSERT INTO `goods` VALUES ('59', '荷兰青啤梨', '19.90', null, '../img/product1.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '4个', '2018-01-06 18:57:16');
INSERT INTO `goods` VALUES ('60', '越南火龙果', '35.80', null, '../img/product2.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '2.5kg', '2018-01-06 19:06:37');
INSERT INTO `goods` VALUES ('61', '新疆阿克苏冰糖心苹果', '19.80', null, '../img/product3.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '1kg', '2018-01-06 19:06:44');
INSERT INTO `goods` VALUES ('62', '美国华盛顿甜脆红地厘蛇果', '128.00', null, '../img/product4.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '20个', '2018-01-06 19:06:58');
INSERT INTO `goods` VALUES ('63', '墨西哥牛油果', '39.90', null, '../img/product5.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.jpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '6个', '2018-01-06 19:07:10');
INSERT INTO `goods` VALUES ('64', '明月千里礼盒生鲜礼盒', '218.00', null, '../img/product6.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.\r\r\njpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '1盒', '2018-01-06 19:07:17');
INSERT INTO `goods` VALUES ('65', '新奇士美国脐橙', '59.90', null, '../img/product7.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.\r\r\njpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '12个', '2018-01-06 19:07:25');
INSERT INTO `goods` VALUES ('66', '四川安岳柠檬', '9.90', null, '../img/product8.jpg,../img/detail1.jpg,../img/detail2.jpg,../img/detail3.jpg,../img/detail4.jpg,../img/detail5.jpg,../img/detail6.\r\r\njpg,../img/detail_3.jpg,../img/detail_4.jpg,../img/detail_5.jpg,../img/detail_6.jpg', 'xianguo', '1', '酥到挖着吃 宝贝辅食推荐', '4个', '2018-01-06 19:07:32');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13465965478', '343b1c4a3ea721b2d640fc8700db0f36', '2018-01-06 11:35:55');
INSERT INTO `user` VALUES ('2', '13652631456', '343b1c4a3ea721b2d640fc8700db0f36', '2018-01-06 11:37:08');
INSERT INTO `user` VALUES ('3', 'lawrence99', 'e10adc3949ba59abbe56e057f20f883e', '2018-01-06 16:54:02');
INSERT INTO `user` VALUES ('4', 'sssss2365', '7fa8282ad93047a4d6fe6111c93b308a', '2018-01-06 17:00:54');
INSERT INTO `user` VALUES ('5', 'wwwwww', '437599f1ea3514f8969f161a6606ce18', '2018-01-06 17:01:11');
INSERT INTO `user` VALUES ('6', 'wwwwwwww', '343b1c4a3ea721b2d640fc8700db0f36', '2018-01-06 17:01:28');
SET FOREIGN_KEY_CHECKS=1;
