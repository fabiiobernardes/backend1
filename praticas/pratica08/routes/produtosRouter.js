const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/authMiddleware');

router.get('/produtos', verificarToken, (req, res) => {
    return res.status(200).json([]);
});

module.exports = router;