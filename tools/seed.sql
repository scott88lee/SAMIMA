DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    SKU VARCHAR(30) NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    product_desc TEXT,
    msrp NUMERIC(10, 2),
    map NUMERIC(10, 2),
    physical_item BOOLEAN,
    deprecated BOOLEAN,
    cat VARCHAR(30),
    subcat VARCHAR(30),
)

UPDATE products SET SKU='OR20', brand='ORANGE', model='Crush 20', product_desc='20W Electric guitar amp', msrp=159, map=135, physical_item=TRUE WHERE product_id=3;

INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('YMAF310NT', 'Yamaha', 'F310 NT', 'F310 Acoustic guitar Natural', 229, 215, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('YMAF310TBS', 'Yamaha', 'F310 TBS', 'F310 Acoustic guitar Sunburst', 229, 215, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('UEN3123', 'Orange', 'Crush 20', '20W Electric guitar amp', 159, 149, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('UEN1231', 'Zoom', 'G3Xn', 'G3Xn Multi-effects Processor', 280, 280, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('UEN1234', 'Zoom', 'G1X Four', 'G1X Four Multi-effects Processor', 140, 140, TRUE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('SVC001', 'Service', 'Restring and Tune', 'Resting and Tune service', 15, 10, FALSE);
INSERT INTO products (SKU, brand, model, product_desc, msrp, map, physical_item) VALUES ('SVC002', 'Service', 'Pickup wiring', 'Guitar pickup wiring', 40, 30, FALSE);

DROP TABLE purchases;
CREATE TABLE IF NOT EXISTS purchases (
  pur_id SERIAL PRIMARY KEY,
  inv_date DATE NOT NULL,
  supplier_id INT NOT NULL,
  inv_num VARCHAR(20) NOT NULL,
  inv_value NUMERIC(12,2) NOT NULL,
  credit BOOLEAN NOT NULL,
  paid BOOLEAN NOT NULL,
  export BOOLEAN,
  pay_date DATE,
  pay_mode VARCHAR(20),
  pay_ref VARCHAR(20)
)

CREATE TABLE IF NOT EXISTS purchase_products (
	purchase_id INT NOT NULL,
	product_id INT NOT NULL,
	quantity INT NOT NULL,
	price NUMERIC(10, 2) NOT NULL
)

CREATE TABLE IF NOT EXISTS sales (
  sale_id SERIAL PRIMARY KEY,
  sale_date DATE NOT NULL,
  sale_value NUMERIC(12,2) NOT NULL,
  sale_source VARCHAR(20),
  src_ref VARCHAR(20),
  pay_mode VARCHAR(20),
  pay_ref VARCHAR(20)
)

-- sale_id,date,value,source,pmode

CREATE TABLE IF NOT EXISTS sale_products (
	sale_id INT NOT NULL,
	product_id INT NOT NULL,
	quantity INT NOT NULL,
	price NUMERIC(10, 2) NOT NULL
)

DROP TABLE IF EXISTS suppliers;
CREATE TABLE IF NOT EXISTS suppliers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  business_name TEXT,
  address TEXT
);

SELECT * FROM purchase_products
  INNER JOIN purchases ON purchases.pur_id = purchase_products.purchase_id
  INNER JOIN products ON products.product_id = purchase_products.product_id
  INNER JOIN suppliers ON purchases.supplier_id = suppliers.id;

SELECT brand, model, SUM(quantity) as total_qty, sum(quantity*price) as total_cost FROM purchase_products
  INNER JOIN purchases ON purchases.pur_id = purchase_products.purchase_id
  INNER JOIN products ON products.product_id = purchase_products.product_id
  INNER JOIN suppliers ON purchases.supplier_id = suppliers.id
GROUP BY products.product_id;

INSERT INTO suppliers (name, business_name, address) VALUES ('Yamaha', 'Yamaha Music (Asia) Pte Ltd', '#02-00, 202 Hougang Street 21, 228149');
INSERT INTO suppliers (name, business_name, address) VALUES ( 'CityMusic', 'CityMusic Co Pte Ltd', '#02-12/13 Peace Centre, 1 Sophia Road, 228149');