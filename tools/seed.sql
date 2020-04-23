DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    pwd_hash TEXT NOT NULL,
    user_role TEXT NOT NULL
);

SELECT * FROM products;
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    SKU VARCHAR(30) NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    product_desc TEXT,
    msrp NUMERIC(5, 2),
    map NUMERIC(5, 2),
    physical_item BOOLEAN
);

UPDATE products SET SKU='OR20', brand='ORANGE', model='Crush 20', product_desc='20W Electric guitar amp', msrp=159, map=135, physical_item=TRUE WHERE product_id=3;

INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('YMAF310NT', 'Yamaha', 'F310 NT', 'F310 Acoustic guitar Natural', 229, 215, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('YMAF310TBS', 'Yamaha', 'F310 TBS', 'F310 Acoustic guitar Sunburst', 229, 215, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('UEN3123', 'Orange', 'Crush 20', '20W Electric guitar amp', 159, 149, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('UEN1231', 'Zoom', 'G3Xn', 'G3Xn Multi-effects Processor', 280, 280, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('UEN1234', 'Zoom', 'G1X Four', 'G1X Four Multi-effects Processor', 140, 140, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('SVC001', 'Service', 'Restring and Tune', 'Resting and Tune service', 15, 10, FALSE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item)
VALUES ('SVC002', 'Service', 'Pickup wiring', 'Guitar pickup wiring', 40, 30, FALSE);


DROP TABLE IF EXISTS inventory;
CREATE TABLE IF NOT EXISTS inventory (
    product_id INT NOT NULL,
    product_quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS purchases (
    purchase_id SERIAL PRIMARY KEY,
    supplier_id INT NOT NULL,
    product_id INT NOT NULL,
    purchase_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS product_purchases (
	id SERIAL PRIMARY KEY,
	purchase_id INT NOT NULL,
	product_id INT NOT NULL,
	product_quantity INT NOT NULL,
	unit_price NUMERIC(5, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS sales (
    sale_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    _id INT NOT NULL,
    purchase_date DATE NOT NULL
);

DROP TABLE IF EXISTS suppliers;
CREATE TABLE IF NOT EXISTS suppliers (
    supplier_id SERIAL PRIMARY KEY,
    supplier_name TEXT NOT NULL,
    business_name TEXT,
    supplier_address TEXT
);

INSERT INTO suppliers (supplier_name, business_name, supplier_address)
VALUES ( 'CityMusic', 'CityMusic Co Pte Ltd', '#02-12/13 Peace Centre, 1 Sophia Road, 228149');
INSERT INTO suppliers (supplier_name, business_name, supplier_address)
VALUES ('Yamaha', 'Yamaha Music (Asia) Pte Ltd', '#02-00, 202 Hougang Street 21, 228149');