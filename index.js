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


// cadastroUsuario.js
function cadastrarUsuario(nome, email, senha) {
    if (!nome || !email || !senha) {
        return "Todos os campos são obrigatórios.";
    }

    if (senha.length < 4) {
        return "A senha deve ter pelo menos 4 caracteres.";
    }

    return {
        nome: nome,
        email: email,
        senha: senha
    };
}

console.log(cadastrarUsuario("", "maria@email.com", "1234"));   // erro
console.log(cadastrarUsuario("Maria", "maria@email.com", "12")); // erro
console.log(cadastrarUsuario("Maria", "maria@email.com", "1234")); // sucesso

// listagemProdutos.js
function listarProdutos(precoMaximo = null) {
    const produtos = [
        { id: 1, nome: "Camiseta", preco: 50 },
        { id: 2, nome: "Calça Jeans", preco: 120 },
        { id: 3, nome: "Tênis", preco: 200 }
    ];

    if (precoMaximo !== null) {
        return produtos.filter(p => p.preco <= precoMaximo);
    }

    return produtos;
}

console.log("Todos os produtos:", listarProdutos());
console.log("Produtos até R$100:", listarProdutos(100));

// carrinhoCompras.js
const carrinho = [];

function adicionarProduto(produto) {
    carrinho.push(produto);
    return carrinho;
}

function removerProduto(id) {
    const index = carrinho.findIndex(p => p.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1);
    }
    return carrinho;
}

function calcularTotal() {
    return carrinho.reduce((total, p) => total + p.preco, 0);
}

// Testes
adicionarProduto({ id: 1, nome: "Camiseta", preco: 50 });
adicionarProduto({ id: 2, nome: "Calça Jeans", preco: 120 });
console.log("Carrinho:", carrinho);
console.log("Total:", calcularTotal());
removerProduto(1);
console.log("Carrinho após remover:", carrinho);
console.log("Total após remover:", calcularTotal());




