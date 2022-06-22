## ProjetoCep com painel

* [React Native](https://reactnative.dev/)
* [Axios](https://axios-http.com/)
* [Node](https://nodejs.org/)
* [Express](https://expressjs.com/pt-br/)
* [CORS](https://www.npmjs.com/package/cors)
* [Driver Mysql](https://www.npmjs.com/package/mysql)
* [Mui](https://mui.com/pt/)
* [Mysql](https://www.mysql.com/)
  
Projeto Sendo desenvolvido para estudos para treinar uma consulta pelo Android usando Retrofit,Jackson,Mysql,React,Express,JavaScript,CSS,Axios.
Material de estudos base https://blog.matheuscastiglioni.com.br/consumindo-web-service-no-android-com-retrofit/

A intenção do projeto seria ter as seguintes funções:

- [X] O aplicativo pesquisar o Cep na Api do ViaCep
- [X] O Aplicativo enviar estes dados para o Mysql
- [X] O Express receber estes dados
- [X] Axios fazer o tratamento por rotas enviando para o Mysql
- [X] Axios fazer o tratamento de dados e Listar para o React
- [X] Dentro do banco de dados guardar os dados
- [X] React receber os dados e exir na tela
- [X] React poder cadastrar um Cep pelo front
- [X] React poder deletar os dados pelo front
- [ ] O aplicativo gurdar o Cep pesquisado em historico local
- [ ] O aplicativo ter uma tela para exibir o historico de Cep pesquisado

A estrutura do projeto seria da seguinte forma:

<img src="https://raw.githubusercontent.com/MesopotamiaAlpha/ProjetoCep/Principal/Screenshot_10.png">

Para rodar execute na pasta raiz do projeto
```
npm install
```
Este comando vai fazer a instalação de todas as dependencias necessarias para rodar o servidor.
Faça a instalação do MYSQL e do NODE corretamente, em relação ao banco de dados tem o arquivo com as configurações necessarias dentro de /server/sql.sql.

Depois disso vamos para a configuração express para conectar com o banco de dados, dentro desta mesma pasta temos o arquivo /server/config/db.js e dentro temos esta estrutura:

```
const mysql = require('mysql');


const db = mysql.createConnection({
host: "127.0.0.1",
user: "usuarioMysql",
password: "senhaDoUsuarioMysql",
database:"pesquisaCep" 
})
module.exports = db;
```
preencha os campos de senha e usuario do mysql corretamente, depois disso volte para a pasta raiz /server e execute o comando ``` npm start index.js ``` . Ele vai iniciar o servidor para receber as conexões de post/get/delet no express.


.