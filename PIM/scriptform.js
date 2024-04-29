document.addEventListener("DOMContentLoaded", function() {
    // Exemplo de preenchimento correto para cada campo do formulário
    document.getElementById("nome").value = ""; // Exemplo: João da Silva Santos
    document.getElementById("email").value = ""; // Exemplo: joao@example.com
    document.getElementById("cpf").value = ""; // Exemplo: 123.456.789-10
    document.getElementById("telefone").value = ""; // Exemplo: (11) 98765-4321
    document.getElementById("feminino").checked = true; // Seleciona o gênero Feminino
    document.getElementById("data_nascimento").value = ""; // Data de Nascimento: 1 de janeiro de 1990
    document.getElementById("cidade").value = ""; // Exemplo: São Paulo
    document.getElementById("estado").value = ""; // Exemplo: São Paulo
    document.getElementById("endereco").value = ""; // Exemplo: Rua das Flores, 123, Bairro Feliz

 
    // O evento de envio do formulário
    document.getElementById("formulario").addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio automático do formulário

        // Verifica se todos os campos estão preenchidos
        var camposPreenchidos = true;
        var campos = document.querySelectorAll('.inputUser');
        campos.forEach(function(campo) {
            if (campo.value.trim() === '') {
                camposPreenchidos = false;
                campo.style.backgroundColor = 'red'; // Muda a cor de fundo do campo não preenchido
            } else {
                campo.style.backgroundColor = 'transparent'; // Retorna à cor de fundo padrão se o campo estiver preenchido
            }
        });

        if (!camposPreenchidos) {
            // Se algum campo não estiver preenchido, exibe uma mensagem e não envia o formulário
            alert("Por favor, preencha todos os campos antes de enviar o formulário.");
            return;
        }

        // Chama todas as funções de validação
        if (
            !validarNome() ||
            !validarEmail() ||
            !validarCPF() ||
            !validarTelefone() ||
            !validarGenero() ||
            !validarDataNascimento() ||
            !validarCidade() ||
            !validarEstado() ||
            !validarEndereco()
        ) {
            // Se houver erros, não envia o formulário e exibe uma mensagem
            alert("Por favor, corrija os erros antes de enviar o formulário.");
            return;
        }

        // Se não houver erros, pode enviar o formulário
        document.getElementById("formulario").submit();
    });

    function limparExemplo(event) {
        event.target.value = '';
    }

    function mostrarErro(campo, mensagem) {
        var aviso = campo.nextElementSibling;
        if (!aviso) {
            aviso = document.createElement("span");
            aviso.className = "aviso-erro";
            campo.parentNode.appendChild(aviso);
        }
        aviso.innerHTML = mensagem;
        return false; // Retorna falso indicando erro
    }

    function removerErro(campo) {
        var aviso = campo.nextElementSibling;
        if (aviso && aviso.className === "aviso-erro") {
            campo.parentNode.removeChild(aviso);
        }
        return true; // Retorna verdadeiro indicando sucesso
    }

    // Funções de validação individuais
    function validarNome() {
        var nome = document.getElementById("nome").value;
        if (!nome) {
            return mostrarErro(document.getElementById("nome"), "Por favor, preencha o campo Nome.");
        }
        removerErro(document.getElementById("nome"));
        return true;
    }

    function validarEmail() {
        var email = document.getElementById("email").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return mostrarErro(document.getElementById("email"), "Por favor, insira um endereço de email válido.");
        }
        removerErro(document.getElementById("email"));
        return true;
    }

    function validarCPF() {
        var cpf = document.getElementById("cpf").value;
        var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            return mostrarErro(document.getElementById("cpf"), "Por favor, insira um CPF válido no formato ###.###.###-##.");
        }
        removerErro(document.getElementById("cpf"));
        return true;
    }

    function validarTelefone() {
        var telefone = document.getElementById("telefone").value;
        var telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!telefoneRegex.test(telefone)) {
            return mostrarErro(document.getElementById("telefone"), "Por favor, insira um número de telefone válido no formato (##) #####-####.");
        }
        removerErro(document.getElementById("telefone"));
        return true;
    }

    function validarGenero() {
        var genero = document.querySelector('input[name="genero"]:checked');
        var generoRadio = document.querySelectorAll('input[name="genero"]');
        if (!genero) {
            return mostrarErro(generoRadio[0], "Por favor, selecione uma opção.");
        }
        removerErro(generoRadio[0]);
        return true;
    }

    function validarDataNascimento() {
        var data_nascimento = document.getElementById("data_nascimento").value;
        if (!data_nascimento) {
            return mostrarErro(document.getElementById("data_nascimento"), "Por favor, preencha o campo Data de Nascimento.");
        }
        removerErro(document.getElementById("data_nascimento"));
        return true;
    }

    function validarCidade() {
        var cidade = document.getElementById("cidade").value;
        if (!cidade) {
            return mostrarErro(document.getElementById("cidade"), "Por favor, preencha o campo Cidade.");
        }
        removerErro(document.getElementById("cidade"));
        return true;
    }

    function validarEstado() {
        var estado = document.getElementById("estado").value;
        if (!estado) {
            return mostrarErro(document.getElementById("estado"), "Por favor, preencha o campo Estado.");
        }
        removerErro(document.getElementById("estado"));
        return true;
    }

    function validarEndereco() {
        var endereco = document.getElementById("endereco").value;
        if (!endereco) {
            return mostrarErro(document.getElementById("endereco"), "Por favor, preencha o campo Endereço.");
        }
        removerErro(document.getElementById("endereco"));
        return true;
    }
});
