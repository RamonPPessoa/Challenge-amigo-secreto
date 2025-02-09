let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    // Verifica se o nome contém apenas letras e espaços
    let regex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert("Por favor, insira um nome válido (somente letras e espaços).");
        input.value = "";
        return;
    }
    
    if (nome === "") {
        alert("O nome não pode estar vazio!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto;
        do {
            amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigos[i] === amigoSecreto);
        
        resultado.push(`${amigos[i]} → ${amigoSecreto}`);
        sorteio.splice(sorteio.indexOf(amigoSecreto), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        let item = document.createElement("li");
        item.textContent = par;
        listaResultado.appendChild(item);
    });
}
