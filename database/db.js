const mysql = require("mysql");

//import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } from "../config.mjs";

DB_HOST = "containers-us-west-88.railway.app";
DB_NAME = "railway";
DB_USER = "root";
DB_PASSWORD = "6mnzMlgR7I1d6SfLKAyd";
DB_PORT = 3000;

const conexion = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  PORT: 7230,
});

conexion.connect((error) => {
  if (error) {
    console.error("El error de conexion es:" + error);
    return;
  }

  console.log("!Conectado a la BD MYSQL¡");
});

module.exports = conexion;
