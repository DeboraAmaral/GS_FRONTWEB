const express = require('express');
const cors = require('cors');
const db = require('../src/db');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


app.post('/login', async (req, res) => {
  const { email, password } = req.body;


  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    } else {
      if (result.length > 0) {
        const match = await bcrypt.compare(password, result[0].senha);

        if (match) {

          const user = {
            id: result[0].id,
            nome: result[0].nome,
            apelido: result[0].apelido,
            email: result[0].email,
            alergias: result[0].alergias,  // Certifique-se de que este campo está na tabela
            medicamentos: result[0].medicamentos,  // Certifique-se de que este campo está na tabela
          };


          res.status(200).json({ user, message: 'Login bem-sucedido' });
        } else {

          res.status(401).json({ message: 'Credenciais inválidas' });
        }
      } else {

        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    }
  });
});

app.post('/create-account', async (req, res) => {
  console.log('Rota de criação de conta acessada');
  const { name, nickname, email, password, confirmPassword, allergies, medications } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    } else {
      if (result.length > 0) {
        res.status(409).json({ message: 'Email já cadastrado' });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
          'INSERT INTO usuarios (nome, apelido, email, senha, alergias, medicamentos) VALUES (?, ?, ?, ?, ?, ?)',
          [name, nickname, email, hashedPassword, allergies, medications],
          (err, result) => {
            if (err) {
              console.error('Erro ao salvar no banco de dados:', err);
              res.status(500).json({ message: 'Erro interno do servidor' });
            } else {
              console.log('Dados salvos no banco de dados:', result);
              res.status(200).json({ message: 'Conta criada com sucesso' });
            }
          }
        );
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});