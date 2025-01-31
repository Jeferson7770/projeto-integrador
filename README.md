# 📌 Formulário de Cadastro de Clientes  

## 📋 Descrição do Projeto  

Este projeto é um **formulário de cadastro de clientes** desenvolvido com **HTML, CSS, JavaScript, PHP e MySQL**. Ele permite que os usuários insiram suas informações pessoais, incluindo:  

- Nome  
- E-mail  
- CPF  
- Telefone  
- Gênero  
- Data de nascimento  
- Cidade  
- Estado  
- Endereço  

Os dados são armazenados em um banco de dados **MySQL**, garantindo **organização e segurança**.  

---

## 🛠 Tecnologias Utilizadas  

✅ **HTML** → Estruturação do formulário  
✅ **CSS** → Estilização do formulário  
✅ **JavaScript** → Máscaras de entrada para CPF e telefone  
✅ **PHP** → Processamento e inserção dos dados no banco  
✅ **MySQL** → Armazenamento das informações cadastradas  

---

## 🚀 Funcionalidades  

✔️ Cadastro de clientes com informações completas  
✔️ Validação e formatação automática de CPF e telefone  
✔️ Armazenamento seguro dos dados no banco de dados  

---

## ⚙️ Requisitos para Uso  

1️⃣ Ter o **XAMPP** ou outro servidor local instalado  
2️⃣ Ter o **MySQL** ativo  
3️⃣ Criar um banco de dados chamado `formulario_cliente`:  

```sql
CREATE DATABASE formulario_cliente;
```

4️⃣ Criar a tabela `clientes` com os seguintes campos:  

```sql
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL,
    sexo ENUM('masculino', 'feminino', 'outro') NOT NULL,
    data_nasc DATE NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL
);
```

---

## 📝 Como Usar  

1️⃣ **Clone o repositório:**  

```sh
git clone https://github.com/Jeferson7770/projeto-integrador.git
```

2️⃣ **Mova os arquivos para a pasta do XAMPP:**  

```sh
mv projeto-integrador c:/xampp/htdocs/
```

3️⃣ **Inicie o servidor Apache e o MySQL no XAMPP**  

4️⃣ **Acesse o projeto no navegador:**  

- Formulário:  
  ```
  http://localhost/projeto-integrador/PIM/formulario.php
  ```
- Banco de dados (via phpMyAdmin):  
  ```
  http://localhost/phpmyadmin/index.php?route=/sql&db=formulario_cliente&table=clientes&pos=0
  ```

5️⃣ **Preencha o formulário e envie os dados**  

---

## 🔒 Segurança Implementada  

✔️ **Prevenção contra SQL Injection** usando *Prepared Statements*  
✔️ **Máscaras para CPF e telefone**, garantindo formatação correta  
✔️ **Mensagens de erro e sucesso**, melhorando a usabilidade  

---

## 📌 Autor  

👤 **Jeferson Moreira**  
📧 [jefersonmoreira770@gmail.com](mailto:jefersonmoreira770@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/jefersonmoreiradev/)  


