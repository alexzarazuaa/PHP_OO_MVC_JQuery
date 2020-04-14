-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
--
-- Servidor: 127.0.0.1
-- Versión del servidor: 5.5.49-0ubuntu0.14.04.1


 SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
 SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `DB`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sport_pro`
--

CREATE TABLE `sport_pro` (
  `codref` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `cityShop` varchar(50) DEFAULT NULL,
  `userType` varchar(50) DEFAULT NULL,
  `habitual` varchar(50) DEFAULT NULL,
  `sport` varchar(50) DEFAULT NULL,
  `date_birthday` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`codref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

-- INSERT INTO sport_pro (codref, name, email,cityShop,habitual,sport,userType,date_birthday)
-- VALUES ("456","alex","alex@gmail.com","Ontinyent","SI","Running","Children","12/06/1987")

/*select *
 from sport_1;*/
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



-- VOLCADO PARA LA TABLA DE GEOLOCALIZAR PRODUCTOS

 create table geomaps 
 (
  	select p.idprod , s.idshop
       from products p inner join shops s
  )

------------------------------------------------------------------

 -- VOLCADO PARA LA TABLAR DE MOSTRA LAS IMAGENES DE CARROUSEL JUNTO CON LAS CATEGORIAS PARA DIRIGIR AL SHOP

CREATE TABLE `images` (
  `nombre` varchar(30) NOT NULL,
  `link` varchar(30) NOT NULL,
  `categoria` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

-- INSERT DE LA TABLA

--  insert into images (nombre,link,categoria)
--  values ('off-whte1.jpeg','view/img/off-whte1.jpeg','CALZADO')

--  insert into images (nombre,link,categoria)
--  values ('futsalmunich.jpg','view/img/futsalmunich.jpg','CALZADO')

--  insert into images (nombre,link,categoria)
--  values ('runningnike.jpg','view/img/runningnike.jpg','CASUAL')


--------------------------------------------------------------------------------------

-- VOLCADO PARA LA TABLA DE EL GMAPS TANTO SHOP COMO DETAILS.

CREATE TABLE `maps` (
  `Tienda` varchar(50) DEFAULT NULL,
  `dscp` varchar(10000) DEFAULT NULL,
  `latitud` varchar(500) NOT NULL,
  `longitud` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

-- select *
-- from maps;

  
--   UPDATE maps
-- set  dscp =  '<h2><strong>TIENDA ESTACIO</strong></h2><br><p><h6>IES ESTACIO<br>EN ONTINYENT</h6></p>'
-- where tienda = 'estacio';

 
 -- insert into maps (tienda,dscp,latitud,longitud)
  -- values ( 'JD-SPORTS-VALENCIA', '<h2><strong>TIENDA JD VALENCIA</strong></h2><br><p><h6>TIENDA FISICA CALLE MENORCA<br>EN VALENCIA</h6></p>' ,39.456335, -0.345998)

 -- insert into maps (tienda,dscp,latitud,longitud)
   -- values ( 'JD-SPORTS-ALICANTE', '<h2><strong>TIENDA JD ALICANTE</strong></h2><br><p><h6>C.C. Plaza Mar 2<br>EnAvinguda de Dénia, s/n, 03016 Alacant, Alicante</h6></p>' ,38.354535, -0.472077)

  -- insert into maps (tienda,dscp,latitud,longitud)
    -- values ( 'JD-SPORTS-MADRID', '<h2><strong>TIENDA JD MADRID</strong></h2><br><p><h6>Centro Comercial Plaza Río 2,<br>En Calle de Antonio López, 109, 28026 Madrid</h6></p>' ,40.390637, -3.700636)
 
  -- insert into maps (tienda,dscp,latitud,longitud)

    -- values ( 'JD-SPORTS-BARNA', '<h2><strong>TIENDA JD BARCELONA </strong></h2><br><p><h6>C.C. Glòries,<br>En  Avinguda Diagonal, 208, 08018 Barcelona</h6></p>' ,41.405228, 2.190333)



-----------------------------------------------------------------------------------


-- ESTRUCTURA Y VOLCADO DE LA TABLA DE LOS PRODUCTOS DE LA WEB 


  -- SELECT * FROM sport.products;
  
-- SELECT nombre,marca,talla,categoria,imagen,precio,descripcion FROM products WHERE categoria='camisetas'
--  SELECT idprod,nombre,categoria,imagen,precio 
--  from products 
--  where categoria = 'CALZADO';

--   SELECT idprod,nombre,categoria,imagen,precio 
--           from products 
--         where categoria = 'CAMISETAS';images
  
CREATE TABLE `products` (
  `idprod` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `talla` varchar(30) NOT NULL,
  `temporada` varchar(50) DEFAULT NULL,
  `precio` varchar(50) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `existencias` varchar(50) DEFAULT NULL,
  `descripcion` varchar(2000) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `count_view` varchar(20) DEFAULT NULL,
  `stock` varchar(50) DEFAULT '10',
  PRIMARY KEY (`idprod`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4

-- ALTER TABLE products AUTO_INCREMENT=1;

-- ALTER TABLE products
--    ADD idprod INT ;

-- ALTER TABLE products
--    ADD CONSTRAINT 
--    PRIMARY KEY(idprod);

-- ALTER TABLE products DROP idprod;
--   
--   UPDATE products
-- set  categoria  = 'CALZADO'
-- where idprod in ('7','8','9');

-- delete 
-- from products
-- WHERE idprod = '7';

   -- SET SQL_SAFE_UPDATES = 0;

--  insert into products (idprod,nombre,talla,temporada,precio,categoria,existencias,descripcion)
--  values (12,'off-whte1','42.3','2019','650€','casual',2,'Zapatillas casual de vestir bastante difíciles de encontrar.')


--      	insert into products (nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--   	 values ('nikeGoretex','45 ','2020','2','CASUAL',110,'Colaboración de nike air force 1 x GoreTex  ','view/img/zapasnike.jpg')

--       	insert into products (nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--   	 values ('PumaGSX','42 ','2020','95','CASUAL',100,'NUEVAS PUMAS GSX-3 ','view/img/zapaspuma.jpg')

-- insert into products (nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--    	 values ('LACOSTE-S','40','2020','85','CASUAL',100,'NUEVAS LACOSTE SERIE EN BLANCO ESPECIALES PARA VESTIR BIEN Y CÓMODAS PARA UN BUEN PASEO','view/img/zapaslacoste.jpg')  

--        	insert into products (idprod,nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--     	 values (45,'AirJordan','M','2020','80','casual',15,'sudadera de la nueva coleción de jordan ','view/img/chandaljuve.jpg')
   --      	insert into products (idprod,nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--      	 values (47,'PSG','M','2020','100','casual',1000,'CHANDAL de la nueva coleción de paseo psg ','view/img/chandalpsg.jpg')
         
	-- insert into products (nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--     values ('BOTASADIDAS','42.5','2020','82','FUTBOL',1000,'NUEVAS BOTAS ADIDAS TACOS MIXTOS ','view/img/botasadidas.jpg')

--  insert into products (nombre,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--     values ('NEWBALANCE','40','2020','78','FUTBOL',1000,'NUEVAS ZAPATILLAS DE FUTBOL SALA DE LA MARCA  NEW BALANCE ','view/img/futsalnewbalance.jpg')
--     

	-- insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--     	 values ('GUESS','Vertical Stripe','S','2020','85','CASUAL',100,'Un look clásico de los 90 que proporciona un estilo retro, esta camiseta Vertical Stripe para hombre de GUESS hace que destaques dondequiera que vayas. Es de algodón en corte regular, con mangas cortas y cuello redondo. Lo más llamativo es el diseño a rayas verticales, que combina azul marino, blanco y rojo con el logo de la marca en el pecho.','view/img/camisetaguess.jpg') 

   --   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--    	 values ('Vertical Stripe','GUESS','S','2020','85','CASUAL',100,'Un look clásico de los 90 que proporciona un estilo retro, esta camiseta Vertical Stripe para hombre de GUESS hace que destaques dondequiera que vayas. Es de algodón en corte regular, con mangas cortas y cuello redondo. Lo más llamativo es el diseño a rayas verticales, que combina azul marino, blanco y rojo con el logo de la marca en el pecho.','view/img/camisetaguess.jpg') 


 --  insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--    	 values ('Camiseta Kingio','Ellesse','L','2020','75','CASUAL',100,'Siguiendo las reglas del ‘menos es más’, Ellesse y apuesta por un diseño sencillo de color negro para esta camiseta Kingio para hombre. Es de algodón en corte ‘regular fit’, con mangas cortas y cuello redondo. Está decorada con el logo de Ellesse blanco en el pecho.','view/img/camisetaguess.jpg') 

--    insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--  	 values ('Camiseta Core Small Logo','11 DEGRES','L','2020','60','CASUAL',100,'11 Degrees presenta una camiseta básica para hombre de color negro. Es de manga corta y fabricada con un tejido de algodón de gama alta. En su diseño minimalista destaca en blanco el logo de 11 Degrees. Esta camiseta es fácil de combinar con otras prendas, ya sea un pantalón de chándal o vaqueros.','view/img/camiseta11.jpg') 

   
  --   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--   	 values ('Sudadera con capucha French Terry','Jordan','L','2020','160','CASUAL',100,'Abrigarse ya no significa ocultar tu personalidad bajo capas y capas de ropa. El invierno cobra un nuevo sentido con esta sudadera con capucha French Terry para hombre de Jordan. Diseñada a partir de algodón suave en color negro y rojo, podrás combinarla con mucha facilidad','view/img/sudaderairJordan.jpg') 


--   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--   	 values ('Sudadera con capucha Jordan X PSG','Jordan','L','2020','70','CASUAL',100,'Sudadera de paseo oficial del Paris Saint-Germain de la colección especial Jordan de Nike. Tejido Fleece, agradable y suave. Diseño de corte normal y bolsillo tipo canguro. Logo estampado y escudo del club bordado.','view/img/sudaderajordanxpsg.jpg') 

--   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--   	 values ('Sudadera con capucha Jordan X PSG','Jordan','L','2020','70','CASUAL',100,'Sudadera de paseo oficial del Paris Saint-Germain de la colección especial Jordan de Nike. Tejido Fleece, agradable y suave. Diseño de corte normal y bolsillo tipo canguro. Logo estampado y escudo del club bordado.','view/img/sudaderajordanxpsg.jpg') 

 --   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--    	 values ('Nike Air Force 1 ','Nike','40','2020','100','CASUAL',100,'El fulgor sigue vivo en las Nike Air Force 1 ’07, un modelo original de baloncesto que introduce un nuevo giro a su ya característica piel impecable en una combinación de colores en blanco para un look increíble tanto dentro como fuera de la cancha.','view/img/zapasnike.jpg') 

--   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--    	 values ('Vans Old School colab','Vans','40','2020','100','CASUAL',100,'En una gama de colores icónica que combina blanco y negro, estas deportivas llevan el empeine de textil con refuerzos de ante en la puntera y en el talón. Con cierre de cordones consiguiendo una buena sujeción y tobillera acolchada','view/img/zapasvans.jpg') 

--   insert into products (nombre,marca,talla,temporada,precio,categoria,existencias,descripcion,imagen)
--    	 values ('RSX-G3','Puma','40','2020','100','CASUAL',100,'Lo bueno siempre vuelve. Las RS-X de PUMA son las zapatillas ochenteras por excelencia, y esta versión X3 Puzzle para hombre llega con un acabado muy colorido.','view/img/zapaspuma.jpg') 

 -- CHANDALS 

---------------------------------------------------------------------------------------

-- VOLCADO Y ESTRUCTURA MAS SENTECIA INSERT DE LA TABLAS DE CATEGORIAS DEL HOME


create table categories (
  
    categoria varchar (50),
    imagen varchar (50),
    cont_viewed varchar (20) default 0

)

-- insert into categories 
-- select categoria,imagen,count_view from products























-----------------------------------------------------------------------------------------------------


 -- TABLA Y VOLCADO DE LAS DISTINTAS TIENDAS QUE SALEN EN EL GMAPS

 -- SELECT * FROM sport.shops;

-- ALTER TABLE shops
--    ADD idshop INT ;

 -- ALTER TABLE shops drop  descrip ;
 
 -- ALTER TABLE shops AUTO_INCREMENT=1;

CREATE TABLE `shops` (
  `idshop` int(11) NOT NULL AUTO_INCREMENT,
  `Tienda` varchar(50) DEFAULT NULL,
  `dscp` varchar(10000) DEFAULT NULL,
  `latitud` varchar(500) NOT NULL,
  `longitud` varchar(500) NOT NULL,
  PRIMARY KEY (`idshop`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4


 -- ALTER TABLE shops ADD  dscp varchar(1000);
 
  -- insert into shops (tienda,dscp,latitud,longitud)
   -- values ( 'JD-SPORTS-VALENCIA', '<h2><strong>TIENDA JD VALENCIA</strong></h2><br><p><h6>TIENDA FISICA CALLE MENORCA<br>EN VALENCIA</h6></p>' ,39.456335, -0.345998)

 -- insert into shops (tienda,dscp,latitud,longitud)
  --  values ( 'JD-SPORTS-ALICANTE', '<h2><strong>TIENDA JD ALICANTE</strong></h2><br><p><h6>C.C. Plaza Mar 2<br>EnAvinguda de Dénia, s/n, 03016 Alacant, Alicante</h6></p>' ,38.354535, -0.472077)

 --  insert into shops (tienda,dscp,latitud,longitud)
-- values ( 'JD-SPORTS-MADRID', '<h2><strong>TIENDA JD MADRID</strong></h2><br><p><h6>Centro Comercial Plaza Río 2,<br>En Calle de Antonio López, 109, 28026 Madrid</h6></p>' ,40.390637, -3.700636)
 
    -- insert into shops (tienda,dscp,latitud,longitud)
    --  values ( 'JD-SPORTS-BARNA', '<h2><strong>TIENDA JD BARCELONA </strong></h2><br><p><h6>C.C. Glòries,<br>En  Avinguda Diagonal, 208, 08018 Barcelona</h6></p>' ,41.405228, 2.190333)

--------------------------------------------------------------------------------------


-- VOLCADO Y ESTRUCTURA DE LA TABLA DE USERS

--  
--  SELECT * FROM sport.user;

-- SELECT * FROM user WHERE user_email='alex@gmail.com'
--  



-- ALTER TABLE USER AUTO_INCREMENT = 1
--   delete 
--     from user
--    


--   DROP TABLE user

-- SET SQL_SAFE_UPDATES=0

CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(1000) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `type` varchar(20) DEFAULT 'Client',
  `points` varchar(50) DEFAULT '0',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4

 -------------------------------------------------------------

 -- MEJORA DE LOS PUNTOS DE COMPRAR PARA EL USER

-- alter table user
-- add column points varchar(20);

-- update user
-- set points = '0'

--------------------------------------------------------------------

-- VOLCADO Y ESTRUCTURA TABLA LIKES

-- Volcando estructura para tabla likes

CREATE TABLE IF NOT EXISTS likes (
	user_ID varchar(50) NOT NULL ,
  product_code varchar(10) NOT NULL
) ;

-------------------------------------------

-- ESTRUCTURA DE LA TABLA DE CART

CREATE TABLE IF NOT EXISTS `cart` (
  `id_prod` varchar(50) not null,
	id varchar (50)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-----------------------------------------------
/* TABLA LINEAS */

create table lineas (
 	idlinea int (10) not null AUTO_INCREMENT,
     nickname varchar (50),
    id_prod int (10),
     cant int (10),
     precio_unidad varchar (20),
     cod_factura int (50),
     fecha varchar (50),
     constraint claveajena 
      FOREIGN KEY (cod_factura) REFERENCES facturas(cod_fact),
 	  primary key (idlinea)
 )

-------------------------------------------------------------------

/* TABLA FACTURAS */

 create  table facturas (
 	cod_fact  int (10) not null AUTO_INCREMENT,
     nickname varchar (10),
     precio varchar (10),
     Fecha varchar (10),
     primary key (cod_fact)
 )


------------------------------------------

-- VOLCADO TABLA CHECKOUT

-----------------------------------------

-- VOLCADO TABLA HISTORIAL FACTURAS


-- delimiter //

create trigger historial_facturas_AI after 
insert on facturas
for each row

	insert into historial_facturas values (new.cod_fact,new.nickname,new.precio,now())
    
--     //


 create  table historial_facturas (
 	cod_fact  int (10) not null ,
     nickname varchar (10),
     precio varchar (10),
     Fecha varchar (10),
      primary key (cod_fact)
 )

-----------------------------------------------------------------
-- VOLCADO TABLA HISTORIAL FACTURAS

-- delimiter //

create trigger historial_lineas_AI 
after insert on lineas
for each row
	insert into historial_lineas values (new.idlinea,new.nickname,new.id_prod,new.cant,new.precio_unidad,new.cod_factura,now())

-- //


create table historial_lineas (
 	idlinea int (10) not null ,
     nickname varchar (50),
    id_prod int (10),
     cant int (10),
     precio_unidad varchar (20),
     cod_factura int (50),
     fecha varchar (50)
 
 )


--------------------------------------------------------------------------


-- VOLCADO  Y ESTRUCTURA TABLA Y TRIGGER HISTORIAL USERS

-- ADD COLUM POINTS EN LE TRIGGER  MEJORA DE LOS PUNTOS DE COMPRA DEL USER 

--  delimiter //
  create trigger historial_users_AI 
  after insert on user
  for each row
 	insert into historial_users value (new.userid,new.user_email,new.nickname,new.password,new.avatar,new.type,new.points)
--  //


-----
-- ADD COLUM POINTS MEJORA DE LOS PUNTOS DE COMPRA DEL USER 

 create table historial_users 
 (

  	 userid int(11) NOT NULL ,
		user_email varchar (1000) not null,
     nickname varchar (20) not null ,
     password varchar (100) not null,
     avatar varchar (100) not null,
     type varchar (20) DEFAULT 'Client',
     points varchar (50),
     primary key (userid)
     
 )


--------------------------------------------------------------------

-- VOLCADO Y ESTRUCTURA TABLA CHEQUES DE COMPRA

create table check_purchase
(
		id_nick varchar (50) not null,
        checks varchar (50)
	
)

-- alter table check_purchase
-- add column  chek_status tinyint(1) DEFAULT false;


----------------------------------------------