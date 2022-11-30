const express = require('express')
const router = express.Router();
const controller = require('../controllers/contatoController')

router.get('/contatos', controller.getAll);
router.get('/:id', controller.getById);
router.post('/cadastrar', controller.criarContato);
router.patch('/atualizar/:id', controller.atualizarContato);
router.delete('/delete/:id', controller.deleteContato);

module.exports = router;