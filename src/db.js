const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Musica9422',
  database: 'ecollumia',
});


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão bem-sucedida ao MySQL');
  }
});

module.exports = connection;