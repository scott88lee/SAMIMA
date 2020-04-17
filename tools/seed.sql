CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    pwd_hash TEXT NOT NULL,
    email VARCHAR(55) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    SKU VARCHAR(30) NOT NULL,
    brand INT NOT NULL,
    model TEXT NOT NULL,
    supplier INT NOT NULL,
    description TEXT,
    color TEXT,
    variation TEXT
);

CREATE TABLE IF NOT EXISTS inventory (
    product_id INT NOT NULL,
    product_quantity INT NOT NULL
);


INSERT INTO products (SKU, brand, model, supplier, description, color, variation)
VALUES ('YMAF310', 1, 'F310 Acoustic Guitar', 2, 'Flag ship beginner Acoustic model', 'Natural', 'Normal');

INSERT INTO products (SKU, brand, model, supplier, description, color)
VALUES ('CR20', 2, 'Crush 20 Guitar amp', 2, 'Beginner electric guitar amp', 'Orange');

INSERT INTO products (SKU, brand, model, supplier, description)
VALUES ('ZMG3XN', 3, 'G3Xn Effects Processor', 1, 'Guitar multi-fx');

INSERT INTO brands (brand_name)
VALUES ('Yamaha');

INSERT INTO brands (brand_name)
VALUES ('Orange Amps');

INSERT INTO brands (brand_name)
VALUES ('Zoom');

CREATE TABLE IF NOT EXISTS suppliers (
    supplier_id SERIAL PRIMARY KEY,
    supplier_name TEXT NOT NULL,
    business_name TEXT,
    supplier_address TEXT
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

INSERT INTO suppliers (supplier_name, business_name, supplier_address)
VALUES ( 'CityMusic', 'CityMusic Co Pte Ltd', '#02-12/13 Peace Centre, 1 Sophia Road, 228149');

INSERT INTO suppliers (supplier_name, business_name, supplier_address)
VALUES ('Yamaha', 'Yamaha Music (Asia) Pte Ltd', '#02-00, 202 Hougang Street 21, 228149');