DROP TABLE IF EXIST products;
DROP TABLE IF EXIST users;
DROP TABLE IF EXIST inventory;
DROP TABLE IF EXIST suppliers;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    pwd_hash TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    SKU VARCHAR(30) NOT NULL,
    brand INT NOT NULL,
    model TEXT NOT NULL,
    description TEXT,
    msrp NUMERIC(5, 2),
    map NUMERIC(5, 2),
    physical_item BOOLEAN
);

CREATE TABLE IF NOT EXISTS inventory (
    product_id INT NOT NULL,
    product_quantity INT NOT NULL
);


INSERT INTO products (SKU, brand, model, description, msrp, map)
VALUES ('YMAF310NT', 'Yamaha', 'F310 NT', 'F310 Acoustic guitar Natural', 229', 215, TRUE);

INSERT INTO products (SKU, brand, model, description, msrp, map)
VALUES ('YMAF310TBS', 'Yamaha', 'F310 TBS', 'F310 Acoustic guitar Sunburst', 229', 215, TRUE);

INSERT INTO products (SKU, brand, model, description, msrp, map)
VALUES ('UEN3123', 'Orange, 'Crush 20', '20W Electric guitar amp', 159, 149, TRUE);

INSERT INTO products (SKU, brand, model, description, msrp, map)
VALUES ('UEN1231', 'Zoom', 'G3Xn', 'G3Xn Multi-effects Processor', 280, 280, TRUE);

INSERT INTO products (SKU, brand, model, description, msrp, map)
VALUES ('UEN1234', 'Zoom', 'G1X Four', 'G1X Four Multi-effects Processor', 140, 140, TRUE);

INSERT INTO products (SKU, brand, model, description, msrp, map)
VALUES ('SVC001', 'Service', 'Restring & Tune', 'Resting and Tune service', 15, 10, FALSE);


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