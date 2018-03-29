DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER(11) NOT NULL,
    stock_quantity INTEGER (11) NOT NULL,
    PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("basketball", "sports", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tennis racket", "sports", 40, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sneakers", "sports", 100, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("football", "sports", 20, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("golf club", "sports", 150, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper", "office", 5, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pens", "office", 10, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencils", "office", 1, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("notecards", "office", 10, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("highlighter", "office", 4, 40);