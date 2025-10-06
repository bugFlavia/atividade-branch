// login.js
function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return "Login realizado com sucesso!";
    }
    return "Usuário ou senha inválidos.";
}

console.log(login("admin", "1234"));
console.log(login("user", "senhaerrada"));
