const express = require('express');
const router = express.Router();
const service = require('../services/orders');
const requestHandler = require('./requestHandler');

router.post(
  '/create-trade',
  requestHandler.handleRequest(async function (req, res, next) {
    return res.status(200).send({
      message: 'success',
      data:
        (await service.upsertTrade({
          ...req.body,
          portfolio_id: req.decodedTokenData.data.portfolio_id
        })) || {}
    });
  })
);

module.exports = router;
