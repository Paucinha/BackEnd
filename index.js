const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app = express();
const Contato = require('./model/Contato')
const contatos = require('./router/contatoRouter')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());
app.use("/", contatos)

app.get('/', (req, res) =>{
    res.json({msg: "Olá Campinho!"})
})
app.listen(3001)
console.log('O meu app do campinho está no ar!')


const USER = process.env.USER
const SENHA = encodeURIComponent(process.env.SENHA)
mongoose.connect(`mongodb+srv://${USER}:${SENHA}@apicampinho.mwh6imn.mongodb.net/agendaCampinho?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Banco de dados foi conectado com sucesso!")
})
.catch((err) => console.log(err))


