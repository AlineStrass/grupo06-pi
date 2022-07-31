-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: happyPet
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20220603231241-produtos.js'),('20220603231342-clientes.js'),('20220603231351-admin.js'),('20220603231401-categorias.js'),('20220603231447-enderecos.js'),('20220603231511-itensPedido.js'),('20220603231523-pedidos.js'),('20220627224311-campoSenhaCliente.js'),('20220713010900-imagemProduto.js'),('20220714005627-imagemProduto.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `session_id` varchar(32) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('ay8nRVPHr7Pq8l0uUwDqqjP4w-FsuBNx','2022-07-21 19:56:48','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"expires\":\"2022-07-21T19:56:48.949Z\",\"logado\":true,\"idUsuario\":23}','2022-07-20 19:56:36','2022-07-20 19:56:48');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `senha` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (22,'teste88','$2a$10$S3ddsyBV3EOr6jAD8TmrBOJ0HuEsRU2owOrEnLfMjP0p0Fk/ciNFa'),(23,'alineflores','$2a$10$xn6DCCGWsHemkRoJmoV4P.twC2cZNFmTOx6.KRveIbR/P/d1lrX1K'),(33,'joaninha258744','$2a$10$TPIXstOACVMczJTLKCqGC.2FduwnKUe210mFLW3COPD2ySyZzYM9S');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Ração'),(2,'Petiscos'),(3,'Brinquedos'),(4,'Higiene'),(5,'Camas'),(6,'Outros Acessorios');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nomeCompleto` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(12) NOT NULL,
  `datanascimento` date NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `senha` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Paulo Abreu','paulinho@uol.com.br','13981050809','1978-05-30','12396358741','333879'),(2,'Augusto Silva','guto@uol.com.br','13981050809','1985-08-25','95802314785','124786'),(3,'Julio Pinto','juliopinto@uol.com.br','13974159821','1942-08-09','12369852147','854796'),(4,'Fernando Flores','nandoo@uol.com.br','1196325417','1987-05-17','12396358741','333879'),(5,'Sebastiana Salgado','tiana@gmail.com','219052536','1999-02-06','98745625841','258746'),(6,'Eliana Maia','maiaeliane@gmail.com','15987452101','1999-06-18','58714789632','584220'),(7,'Fulano de Talll','meuemail@email.com','5499999999','1999-12-01','0251487745','$2a$10$BvTYxBkLrz/hqIMTETmp.uhXqEqt5rpnnzbIMCSsVqF5..FkvQ3MC'),(8,'Ana Comédia da Comédia','anacomedia55@gmail.com','88888888888','2022-04-05','0251487745','$2a$10$QTSToo5HRPJT6jwAwSLVu.LkPbWRrq3jQVl/wSf6Op.ldIV4w8Boy'),(9,'Eu Mesmo','umemail@gmail','55222221144','2022-06-02','5558887744','$2a$10$Rr6kttbelkdWu96vN6DUoONJYijT31aQbryCvUys/ruHHzI3b../q'),(10,'Ana Catarina','anacatarina@email.com','54112121455','2022-07-01','9585444','$2a$10$SWWevYRkg4DoTYGqOSEiK.Lb8sNkznjJk/b11fX9aLfwjc.KRj1Fi'),(11,'Maria Benta Souza faria','emailmaria@email.com','54998744874','2022-07-02','5558887744','$2a$10$gYWttWhajjYNju0lguNV2OvdD995KVq2db14Q5GghkY67DYbykC6y');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `clientes_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_enderecos_clientes1_idx` (`clientes_id`),
  CONSTRAINT `fk_enderecos_clientes1` FOREIGN KEY (`clientes_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (7,'Dos Bobos','000','Da Mágia','casa 02','Das Fadas','Do Nunca','0121111',7),(8,'xxx','11','yukfyukyu','iulguil','hfgfgf','fgdfgdfg','584444',9),(9,'São Lucas','258','Bom Jesus Tucuruí','ap 22','Porto Alegre','RS','68460260',8),(10,'Avenida Giovanni Gronchi','854','Vila Andrade','ap587','São Paulo','SP','05724002',10),(11,'Alexandre Zucketti','12555','Minas Gerais','casa fundos','Uberlândia','MG','38402680',11);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagensProdutos`
--

DROP TABLE IF EXISTS `imagensProdutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagensProdutos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagem` varchar(250) DEFAULT NULL,
  `produtos_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagensProdutos`
--

LOCK TABLES `imagensProdutos` WRITE;
/*!40000 ALTER TABLE `imagensProdutos` DISABLE KEYS */;
INSERT INTO `imagensProdutos` VALUES (1,'racao-gato.webp',1),(2,'arranhador.png',2),(3,'racao-cachorro.png',3),(4,'caixaTransporte5.png',4),(5,'maquinatosa5.jpg',5);
/*!40000 ALTER TABLE `imagensProdutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itensPedido`
--

DROP TABLE IF EXISTS `itensPedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itensPedido` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `quantidade` int unsigned NOT NULL,
  `valor` float unsigned NOT NULL,
  `produtos_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_itensPedido_produtos1_idx` (`produtos_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itensPedido`
--

LOCK TABLES `itensPedido` WRITE;
/*!40000 ALTER TABLE `itensPedido` DISABLE KEYS */;
INSERT INTO `itensPedido` VALUES (37,1,149.99,3),(38,1,17.9,1),(39,1,149.99,3),(40,1,17.9,1),(41,1,149.99,3),(42,1,17.9,1),(43,1,59.99,8),(44,1,10.35,26);
/*!40000 ALTER TABLE `itensPedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `preco` float NOT NULL,
  `descricao` text NOT NULL,
  `foto` varchar(150) DEFAULT NULL,
  `categorias_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produtos_categorias_idx` (`categorias_id`),
  CONSTRAINT `fk_produtos_categorias` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Ração Whiskas Carne para Gatos Adultos',17.9,'Embalagens de 500g. Indicada para gatos adultos. Ração premium. 100% completa e balanceada para gatos adultos.','racao-gato.webp',1),(2,'Arranhador para Gatos',250,'Indicado para gatos. Mantém seu pet entretido e livre de estresse. Feito com material atóxico.','arranhador.png',3),(3,'Ração Magnus Premium',149.99,'Feita com proteínas de alta qualidade.','racao-cachorro.png',1),(4,'Caixa de Transporte - Tamanho Grande',150,'Caixa para transporte de cães - tamanho grande','caixaTransporte5.png',6),(5,'Maquina de Tosa',89.9,' Indicada para cães e gatos; Perfeita para fazer o acabamento da tosa; Ideal para áreas como patinhas, focinho e região dos olhos; Fácil de manusear e super leve; Contém 4 pentes de altura, óleo lubrificante e protetor de lâmina, Possui 2 anos de garantia do fabricante.','maquinatosa5.jpg',6),(6,'Cama para cães e gatos',69.9,'Indicada para cães e gatos; Produzida em microfibra 100% poliéster; Enchimentos removíveis; Fibra siliconada; Estampa exclusiva; Dupla face, Disponível nos tamanhos P, M e G.','cama6.jpg',5),(7,'Ração Úmida Whiskas Sachê para Gatos',2.99,'Indicada para gatos. Refeição completa e balanceada.','wiskas-gato-lata.png',1),(8,'Areia Higiênica para Gatos Viva Verde',59.99,'Melhor rendimento. Sem poeira. Eliminação imediata e duradoura do odor da urina.','viva-verde.PNG',4),(9,'Antipulgas Frontline  para Gatos',34.43,'Indicado para gatos. Ação rápida. Pode ser usado em gatas gestantes ou em lactação. Proteção prolongada.','frontline.PNG',4),(21,'Petisco Dreamies ',5.94,'Carne Para Gatos Adultos 40 g','petisco.PNG',2),(22,'Almofada Pet Paris para Cães e Gatos',39.99,'A linha de almofadas e caminhas da Furacão Pet tem todo o conforto que seu pet merece; Uma variedade de cores e estampas; Disponível em embalagem com uma unidade.','almofadas.PNG',5),(23,'Cama Chevron para Cães Rosa',184.99,'Indicada para cães; Super macia e confortável; Dupla face; Excelente isolante térmico, firme resistente e lavável; Fácil remoção do enchimento através de zíper, pode ser lavado em máquina, Disponível no tamanhos P, M e G.','camaRosa01.PNG',5),(24,'Brinquedo Interativo Petball Pet Games',29.99,'Indicado para cães; É uma forma divertida e saudável de estimular seu pet; A brincadeira é mais proveitosa quando seu cão estiver com fome; É atóxico, lavável e super resistente; Disponível em quatro tamanhos PP, P e M.','bolinha-interativa.PNG',3),(25,'Macaco Chalesco Para Cães',31,' Indicado para cães; Ideal para os pets de todos os portes e idades; Diversão garantida para seu cão; Pelúcia macia e atrativa; Formato que permite a brincadeira de cabo de guerra,  Mantém seu cão livre de estresses.','brinquedo-macaco-pelucia.PNG',3),(26,'Petisco Whiskas Anti Bola de Pelo',10.35,'Indicado para gatos; Saboroso e funcional; Casquinha crocante por fora e macio por dentro; Auxilia na eliminação de bolas de pelo; Melhora o transito intestinal;','petisco-anti-bola-de-pelos.PNG',2),(27,'Sabonete Matacura 80g',15.5,' Indicado para cães; mata piolhos, carrapatos, pulgas e outros parasitas da pele; Combate caspas, coceiras e sarnas psorótica, sarcópitica e notoédrica; Conservando o pêlo fino e sedoso;','sabonete-matacura.PNG',4),(38,'Snack Petitos Health Fit para Cães',9.49,'Indicado para cães; Coberto com sabor; Recheados com saúde; Controle de peso; Ideal para oferecer como recompensa; Disponível em embalagem de 85g','8efc187725fe88a7db885b3c165926a8',2),(39,'Barreira Bragança Stop',289.99,'Indicada para ambientes; Agora delimitar o espaço do seu cãozinho ficou muito mais fácil; Um produto inovador indicado para pequenos cães; Desenvolvida para manter seu cão em um espaço restrito; Com design em Z articulado;','609a0203543f53b3da4d5cf6ee8938c2',6);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-31 13:37:05
