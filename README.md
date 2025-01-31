# projeto-integrador

📌 Formulário de Cadastro de Clientes

📋 Descrição do Projeto

Este projeto é um formulário de cadastro de clientes desenvolvido com HTML, CSS, JavaScript, PHP e MySQL. Ele permite que os usuários insiram suas informações pessoais, como nome, e-mail, CPF, telefone, gênero, data de nascimento, cidade, estado e endereço.

Os dados são armazenados em um banco de dados MySQL, garantindo que o cadastro seja salvo de forma organizada e segura.

🛠 Tecnologias Utilizadas

HTML → Estruturação do formulário
CSS → Estilização do formulário
JavaScript → Máscaras de entrada para CPF e telefone
PHP → Processamento e inserção dos dados no banco
MySQL → Armazenamento das informações cadastradas
🚀 Funcionalidades

✅ Cadastro de clientes com informações completas

✅ Validação e formatação de CPF e telefone

✅ Armazenamento seguro no banco de dados

✅ Mensagem de sucesso ou erro após o cadastro

⚙️ Requisitos para Uso

1️⃣ Ter o XAMPP ou outro servidor local instalado

2️⃣ Ter o MySQL ativo

3️⃣ Criar um banco de dados chamado cadastro_clientes

4️⃣ Criar uma tabela clientes com os seguintes campos:

sql
Copiar
Editar
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    sexo ENUM('masculino', 'feminino', 'outro') NOT NULL,
    data_nasc DATE NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL
);

📝 Como Usar

1️⃣ Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/site-de-servicos-de-informatica.git

2️⃣ Mova os arquivos para a pasta do XAMPP:

bash
Copiar
Editar
mv site-de-servicos-de-informatica /c/xampp/htdocs/

3️⃣ Inicie o servidor Apache e o MySQL no XAMPP

4️⃣ Acesse o projeto no navegador:

bash
Copiar
Editar
http://localhost/site-de-servicos-de-informatica/formulario.php

5️⃣ Preencha o formulário e envie os dados

🔒 Segurança Implementada

✔️ Prevenção contra SQL Injection usando Prepared Statements

✔️ Máscaras para CPF e telefone garantindo formatação correta

✔️ Mensagens de erro/sucesso para melhor usabilidade

📌 Autor
👤 Jeferson Moreira

📧 jefersonmoreira770@gmail.com

🔗 https://www.linkedin.com/in/jefersonmoreiradev/

