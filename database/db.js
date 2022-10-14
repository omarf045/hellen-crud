const mysql =require('mysql');


const conexion = mysql.createConnection({
    host: 'containers-us-west-56.railway.app',
    user: 'root',
    password: 'w9KWTEd2VOYwJrytmom9',
    database: 'railway',
    PORT:"5820",
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:'+error);
        return
    }

    console.log('!Conectado a la BD MYSQL¡');
})

module.exports = conexion;