const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// "Banco de dados" fake
const usuarios = [
  { email: "admin@empresa.com", senha: "123456" }
];

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const user = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (user) {
    return res.json({ sucesso: true, mensagem: "Login OK" });
  } else {
    return res.status(401).json({ sucesso: false, mensagem: "Credenciais inválidas" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
