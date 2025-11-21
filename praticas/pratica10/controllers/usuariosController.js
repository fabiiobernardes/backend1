const { cifrarSenha, gerarToken, compararSenha } = require('../middlewares/authMiddleware');
const usuariosModel = require('../models/usuariosModel');

async function criar(req, res) {
    try {
        if (!req.body.email || !req.body.senha) {
            return res.status(422).json({ msg: "Email e Senha são obrigatórios" });
        }
        const senhaCifrada = cifrarSenha(req.body.senha);
        const novoUsuario = await usuariosModel.create({ email: req.body.email, senha: senhaCifrada });
        return res.status(201).json({ _id: novoUsuario._id, email: novoUsuario.email });
    } catch (error) {
        return res.status(422).json({ msg: "Email e Senha são obrigatórios" });
    }
}

async function entrar(req, res) {
    try {
        const { usuario: email, senha } = req.body;
        const usuarioEncontrado = await usuariosModel.findOne({ email });

        if (!usuarioEncontrado) {
            return res.status(401).json({ msg: "Credenciais inválidas" });
        }

        const senhaCorreta = compararSenha(senha, usuarioEncontrado.senha);

        if (senhaCorreta) {
            const token = gerarToken({ email: usuarioEncontrado.email });
            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ msg: "Credenciais inválidas" });
        }
    } catch (error) {
        return res.status(401).json({ msg: "Credenciais inválidas" });
    }
}

async function renovar(req, res) {
    const token = gerarToken({ email: req.usuario });
    return res.status(200).json({ token });
}

async function remover(req, res) {
    try {
        await usuariosModel.findOneAndDelete({ _id: req.params.id });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).send();
    }
}

module.exports = {
    criar,
    entrar,
    renovar,
    remover
};