const { Router } = require("express");
const { createOrder, receiveWebhook } = require("../../controllers/payment.controller");

const router = Router();

router.post("/create-order", createOrder);

router.get('/success', (req, res) => res.send('success'));

router.get('/failure', (req, res) => res.send('failure'));

router.post('/webhook', receiveWebhook);

module.exports = router;