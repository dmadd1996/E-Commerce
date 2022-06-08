-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLE Category (
--     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     category_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE Product (
--     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     product_name VARCHAR(30) NOT NULL,
--     price DEC (30, 2) NOT NULL,
--     stock INT NOT NULL DEFAULT(10),
--     category_id INT,
--     INDEX category_id (category_id),
--     CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE CASCADE
-- );

-- CREATE TABLE Tag (
--     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     tag_name VARCHAR(30)
-- );

-- CREATE TABLE ProductTag (
--     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     product_id INT,
--     INDEX product_id (product_id),
--     CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE CASCADE,
--     tag_id INT,
--     INDEX tag_id (tag_id),
--     CONSTRAINT fk_tag FOREIGN KEY (tag_id) REFERENCES Tag(id) ON DELETE CASCADE
-- );