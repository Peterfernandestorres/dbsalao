//importar o servidor express
const express = require("express")

//importar a conexao com o banco de dados
const con = require("../../database/conexao");

//fazer importação do comando Routes para configurar as rotas
const router = express.Router()

//endpoint para cadastrar usuarios
router.post("/insert",(req,res)=>{
    con.query("INSERT INTO usuario SET ?",req.body,(erro,resultado)=>{
    if(erro){
        return res.status(500).send({msg:`Erro Inesperado: ${erro}`})
    }
    res.status(201).send({msg:"Usuario Cadastrado",payload:resultado})
    })
})
//para usar a rota de usuário no arquivo de entrypoint(index.js), devemos exporta-lo
module.exports = router;