// login.js
function login(usuario, senha) {
    if (usuario.length < 3 || senha.length < 3) {
        return "Usuário e senha devem ter pelo menos 3 caracteres.";
    }

    if (usuario === "admin" && senha === "1234") {
        return "Login realizado com sucesso!";
    }
    return "Usuário ou senha inválidos.";
}

console.log(login("ad", "12"));  
console.log(login("admin", "1234")); 
