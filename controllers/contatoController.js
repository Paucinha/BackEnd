const mongoose = require('mongoose')
const Contato = require('../model/Contato')
const USER = process.env.USER
const SENHA = process.env.SENHA


const getAll = async (req, res) =>{
    try{
        const pessoa = await Contato.find()
        res.status(200).json(pessoa)
    } catch(error){
        res.status(500).json({error: error})
    }
}

const getById = async (req, res) =>{
    const id = req.params.id

    try{
        const pessoa = await Contato.findOne({_id: id})
        if(!pessoa){
            res.status(422).json({error: 'Esse contato não existe!'})
        }
        res.status(200).json(pessoa)
    } catch(error){
        res.status(500).json({error: error})
    }
}
const deleteContato = async (req, res) =>{
    const id = req.params.id
        const pessoa = await Contato.findOne({_id: id})
        if(!pessoa){
            res.status(422).json({error: 'Esse contato não existe!'})
            return
        }
    try{
        await Contato.deleteOne({_id: id})
        res.status(200).json({msg: 'Contato removido com sucesso!'})
    } catch(error){
        res.status(500).json({error: error})
    }
}
const atualizarContato = async (req, res)=>{
    const id = req.params.id

    const {nome, email, telefone, area, linkedin, idade} = req.body
    const pessoa = {
        nome,
        email,
        telefone,
        area,
        linkedin,
        idade
    }
    try{
        const atualizarContato = await Contato.updateOne({_id: id}, pessoa)
        res.status(200).json(pessoa)
    }catch(error){
        res.status(500).json({error: error})
    }

}
const criarContato = async (req, res)=>{
    const {nome, email, telefone, area, linkedin, idade} = req.body
    if(!nome){
        res.status(422).json({error: 'O nome é um campo obrigatório!'})
    }
    if(!email){
        res.status(422).json({error: 'O email é um campo obrigatório!'})
    }
    if(!telefone){
        res.status(422).json({error: 'O telefone é um campo obrigatório!'})
    }
    const pessoa = {
        nome,
        email,
        telefone,
        area,
        linkedin,
        idade
       
    }
    try{
        await Contato.create(pessoa)
        res.status(201).json({msg: 'Novo contato inserido com sucesso!'})
    }catch(error){
        res.status(500).json({error: error})
    }

}
module.exports = {
    getAll,
    criarContato,
    getById,
    atualizarContato,
    deleteContato
}