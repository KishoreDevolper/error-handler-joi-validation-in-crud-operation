const controller = require('../controllers/user.controllers')

const router = require('express').Router();

router.post("/create",controller.create);

router.patch("/update/:id",controller.update);

router.get('/findsingle/:id',controller.findsingle);

router.get('/findall',controller.findall);

router.delete('/delete/:id',controller.delete);

module.exports = router