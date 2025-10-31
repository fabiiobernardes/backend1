const express = require("express");
const { verificarToken, gerarToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/login", (req, res) => {
    try {
      const { usuario } = req.body; 
      const token = gerarToken({ email: usuario });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao gerar token" });
    }
  });
  

router.post("/renovar", verificarToken, (req, res) => {
  try {
    const { email } = req.usuario;
    const novoToken = gerarToken({ email });
    return res.status(200).json({ token: novoToken });
  } catch (error) {
    return res.status(500).json({ msg: "Erro ao renovar token" });
  }
});

module.exports = router;