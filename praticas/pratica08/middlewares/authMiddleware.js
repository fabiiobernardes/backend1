const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ msg: "Não autorizado" });

    const token = authorization;
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload; 
    return next();
  } catch (err) {
    return res.status(401).json({ msg: "Token inválido" });
  }
}

function gerarToken(payload) {
  try {
    const expiresIn = 120;
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
  } catch (err) {
    throw Error("Erro ao gerar token");
  }
}

module.exports = { gerarToken, verificarToken };
