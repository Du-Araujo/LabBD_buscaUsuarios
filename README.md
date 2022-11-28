## Projeto BD - NAva

<p>@Rodrigo Araujo</p>
<p>@Eduardo Araujo</p>

<img src="https://raw.githubusercontent.com/Du-Araujo/LabBD_buscaUsuarios/main/source/img/exemplo.jpg">


<h1> Projeto para obtenção de nota em: LAB. BANCO DE DADOS </h1>
<h2>Dependencias utilizadas: </h2>
_"ejs": "^3.1.8"_
_"express": "^4.18.2"_
_"mysql": "^2.18.1"_
_"node": "^19.1.0"_
_"nodemon": "^2.0.20"_
<hr>

<h2>Como utilizar: </h2>
<p>Para istalar o projeto, utilize o comando [ NPM INSTALL] </p>
<p>Depois de instalado todas as dependencias, utilize o comando [NPM START] no terminal.</p>
<br>
<p>O servidor retorna os dados do banco de dados MYSQL no endpoint: [http://127.0.0.1:4000/usuarios] </p>

<h2>Configurações das tabelas do MYSQL</h2>

{

CREATE DATABASE projectdudu;
CREATE TABLE usuarios;

}

<p>INSERT / SELECT padrão para o SQL</p>

{

INSERT INTO usuarios (userNumber, userName, userTeam) values (1, "Dudu a Lenda", "Palmeiras");
SELECT * FROM usuarios;

}

**INFO:** _Você pode inserir quantas entradas desejar via SQL, pois o endpoint retorna todos os valores_
encontrados na tabela **Usuarios**_
