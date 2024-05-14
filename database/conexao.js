//importar as configurações do arquivo env
require ("dotenv").config();

//importar a biblioteca do mysql2
const mysql = require("mysql2");

//criar uma função para exportar a conexao com o banco de dados
const con = ()=>{
    return mysql.createConnection ({
        host: process.eventNames.HOST_API,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}

/*
Estamos Exportando a função con e passando com parentese para que a função seja executada.
assim não será necessario instanciar e ou ativar a função. (Ela ja vem ativada por padrão)
*/
module.exports = con ();