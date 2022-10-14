const mysql = require("mysql");

import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } from "../config.js";

const conexion = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  PORT: DB_PORT,
});

conexion.connect((error) => {
  if (error) {
    console.error("El error de conexion es:" + error);
    return;
  }

  console.log("!Conectado a la BD MYSQL¡");
});

module.exports = conexion;
