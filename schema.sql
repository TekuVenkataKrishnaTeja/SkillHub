CREATE DATABASE IF NOT EXISTS skillhub_db;
USE skillhub_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL,
  image TEXT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS tracking_status (
  email VARCHAR(255) PRIMARY KEY,
  bsw26_status VARCHAR(50) DEFAULT 'not_started',
  nict_status_school VARCHAR(50) DEFAULT 'not_started',
  nict_status_college VARCHAR(50) DEFAULT 'not_started',
  nict_status_graduate VARCHAR(50) DEFAULT 'not_started',
  FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
);
