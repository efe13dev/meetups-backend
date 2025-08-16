/* eslint-disable no-console */

require('dotenv').config();
const getPool = require('./getPool.js');

const { DATABASE_NAME } = process.env;

// Función que crea desde cero la DB con todas sus tablas

const initDb = async () => {
  try {
    const pool = getPool();

    console.log('Dropping database...🧨');
    await pool.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME};`);
    console.log('Creating database...');
    await pool.query(`CREATE DATABASE ${DATABASE_NAME};`);
    await pool.query(`USE ${DATABASE_NAME};`);

    console.log('Database created');

    console.log('Creating users table...');

    await pool.query(`
            CREATE TABLE users 
        (id INT UNSIGNED UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(100)NOT NULL,
        name VARCHAR(50) NOT NULL,
        biography VARCHAR(2000),
        avatar VARCHAR(500) DEFAULT 'avatar-default.png');
    `);

    console.log('Creating meetups table...');

    await pool.query(`
        CREATE TABLE meetups
    (id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(4000) NOT NULL,
    photo VARCHAR(500) DEFAULT 'default-meetup-image.png',
    category ENUM('Fotografia','Ciencia','Tecnologia','Gastronomia','Naturaleza','Literatura','Musica','Salud','Arte','Cultura','Otras'),
    city ENUM ('Andalucia','Aragon','Asturias','Cantabria','Castilla_León','Castilla_La_Mancha','Cataluña','Madrid', 
    'Valencia','Extremadura','Galicia','Baleares','Canarias','Rioja','Murcia','Navarra','Pais_Vasco'),
    date DATETIME NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE);

    `);

    console.log('Creating assistants table...');

    await pool.query(`
        CREATE TABLE inscriptions
    (id_user INT UNSIGNED NOT NULL,
    id_meetup INT UNSIGNED NOT NULL,
    PRIMARY KEY (id_user, id_meetup),
    FOREIGN KEY (id_user) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (id_meetup) REFERENCES meetups (id) ON DELETE CASCADE);
    `);

    console.log('¡All done!🌠');
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

initDb();
