DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS beers;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE beers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brewery VARCHAR(255),
  country VARCHAR(50),
  category VARCHAR(255),
  style VARCHAR(255),
  flavors VARCHAR(255),
  cuisine VARCHAR(255)
);
