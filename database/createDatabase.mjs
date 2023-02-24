import client from './client.mjs';
import dbConnect from './dbConnect.mjs';
dbConnect();
const table = `CREATE TABLE products (
  id SERIAL  PRIMARY KEY,
  sku VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  product_values_id SERIAL NOT NULL
);

CREATE TABLE product_values (
  id SERIAL PRIMARY KEY,
  size VARCHAR(255) NULL,
  weight VARCHAR(255)  NULL,
  dimension INTEGER NULL
);

CREATE TABLE proportions (
  id SERIAL  PRIMARY KEY,
  height INTEGER NULL,
  width INTEGER  NULL,
  length INTEGER  NULL
);

ALTER TABLE products ADD FOREIGN KEY (product_values_id) REFERENCES product_values (id);

ALTER TABLE product_values ADD FOREIGN KEY (dimension) REFERENCES proportions (id);`

client.query(table, (err, results) => {
  if (err) {
      console.log("something went wrong" + err);
      return;
  }
  console.log("Table was created successfully");
  client.end();
});

CREATE TABLE "products"(
  "id" SERIAL NOT NULL,
  "sku" CHAR(255) NOT NULL,
  "name" CHAR(255) NOT NULL,
  "price" BIGINT NOT NULL
);
ALTER TABLE
  "products" ADD PRIMARY KEY("id");
ALTER TABLE
  "products" ADD CONSTRAINT "products_sku_unique" UNIQUE("sku");
CREATE TABLE "product_values"(
  "id" SERIAL NOT NULL,
  "size" BIGINT  NULL,
  "weight" BIGINT NULL,
  "height" BIGINT NULL,
  "width" BIGINT NULL,
  "length" BIGINT NULL,
  "product_id" BIGINT NULL
);
ALTER TABLE
  "product_values" ADD PRIMARY KEY("id");
ALTER TABLE
  "product_values" ADD CONSTRAINT "product_values_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");