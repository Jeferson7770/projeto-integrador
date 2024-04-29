<?php

if(isset($_POST['submit']))
{
    // echo 'Nome: ' . $_POST['nome'] . '<br>';
    // echo 'Email: ' . $_POST['email'] . '<br>';
    // echo 'CPF: ' . $_POST['cpf'] . '<br>';
    // echo 'Telefone: ' . $_POST['telefone'] . '<br>';
    // echo 'Sexo: ' . $_POST['genero'] . '<br>';
    // echo 'Data de nascimento: ' . $_POST['data_nascimento'] . '<br>';
    // echo 'Cidade: ' . $_POST['cidade'] . '<br>';
    // echo 'Estado: ' . $_POST['estado'] . '<br>';
    // echo 'Endereço: ' . $_POST['endereco'] . '<br>';

include_once('config.php');

$nome = $_POST['nome'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$telefone = $_POST['telefone'];
$sexo =  $_POST['genero'];
$data_nasc = $_POST['data_nascimento'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$endereco = $_POST['endereco'];

$result = mysqli_query($conexao, "INSERT INTO clientes(nome,email,cpf,telefone,sexo,data_nasc,cidade,estado,endereco) 
VALUES ('$nome','$email','$cpf','$telefone','$sexo','$data_nasc','$cidade','$estado','$endereco')");

}
?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Cadastro de Clientes</title>

    <link rel="stylesheet" href="style.form.css">

</head>
<body>
   
              

  
    <div class="box">
        <form action="formulario.php" method="POST">
            <fieldset>
                <legend><b>Cadastro de Clientes</b></legend>
                <br><br><br>
                <div class="inputBox">
                    <input type="text" name="nome" id="nome" class="inputUser exemplo-transparente" required>
                    <label for="nome" class="labelInput">Nome completo</label>
                    <p class="exemplo-comment">Exemplo: Jeferson Moreira de Amurim</p>

                </div>
                <br><br>

                <div class="inputBox">
                    <input type="email" name="email" id="email" class="inputUser exemplo-transparente" required>
                    <label for="email" class="labelInput">Email</label>
                    <p class="exemplo-comment">Exemplo: jeferson@example.com</p>

                </div>
                
                <br><br>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="cpf" id="cpf" class="inputUser exemplo-transparente" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" maxlength="14">
                    <label for="cpf" class="labelInput">CPF</label>
                    <p class="exemplo-comment">Exemplo: 123.456.789-10</p>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="telefone" id="telefone" class="inputUser exemplo-transparente" required pattern="\(\d{2}\) \d{5}-\d{4}" maxlength="15">
                    <label for="telefone" class="labelInput">Telefone</label>
                    <p class="exemplo-comment">Exemplo: (11) 98765-4321</p>
                </div>
                <br><br>
                <p>Sexo:</p>
                <input type="radio" id="feminino"  name="genero" value="feminino" required>
                <label for="feminino" >Feminino</label>
                <input type="radio" id="masculino"  name="genero" value="masculino" required>
                <label for="masculino" >Masculino</label>
                <input type="radio" id="outro"  name="genero" value="outro" required>
                <label for="outro" >Outro</label>
                <br><br>
                <label for="data_nascimento"><b>Data de Nascimento:</b></label>
                <input type="date" name="data_nascimento" id="data_nascimento" required>
                <p class="exemplo-comment">Exemplo: 01-01-1990 (Data de Nascimento: 1 de janeiro de 1990)</p>
                <br><br><br>
                <div class="inputBox">
                    <input type="text" name="cidade" id="cidade" class="inputUser exemplo-transparente" required>
                    <label for="cidade" class="labelInput">Cidade</label>
                    <p class="exemplo-comment">Exemplo: São Paulo</p>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="estado" id="estado" class="inputUser exemplo-transparente" required>
                    <label for="estado" class="labelInput">Estado</label>
                    <p class="exemplo-comment">Exemplo: São Paulo</p>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="endereco" id="endereco" class="inputUser exemplo-transparente" required>
                    <label for="endereco" class="labelInput">Endereço</label>
                    <p class="exemplo-comment">Exemplo: Rua das Flores, 123, Bairro Feliz</p>
                </div>
                <br><br>
                <input type="submit" name="submit" id="submit" value="Enviar">
            </fieldset>
        </form>
    </div>

   
    <script src="scriptform.js"></script>
    
   
  
  
    
      
    </body>
    </html>
    