$(document).ready(function() {
    
    $("#botao-busca").click(function() {
        $("#div-busca").toggleClass("oculto-gg");
        $("#botao-busca i").toggleClass("fa-search").toggleClass("fa-times");
    });

    $("#botao-cookies").click(function() {
        $(".cookies").addClass("oculto-gg oculto-g oculto-m oculto-p oculto-pp");
    });

});

function carregarProdutosPorTipo(){
    let titulo = document.querySelector("#titulo-produtos");
    let params = new URLSearchParams(document.location.search);
    let tipo = params.get("tipo");

    if (tipo == "destaques") {
        renderizarProdutos(produtos.filter(produto => produto.destaque));
    }
    else if (tipo == "lancamentos") {
        renderizarProdutos(produtos.filter(produto => produto.lancamento));
    }
    else {
        renderizarProdutos(produtos.filter(produto => produto.tipo == tipo));
    }

    titulo.innerHTML = renderizarTipo(tipo);
}

function carregarProdutosHome(){
    renderizarProdutos(produtos.filter(produto => produto.destaque));
}

function renderizarProdutos(produtos){
    let template = "";
    let divProdutos = document.querySelector(".produtos");
    let divSemProdutos = document.querySelector(".sem-produtos");

    if (produtos.length > 0){
        for (const produto of produtos) {
            template += `
                <div class="produto">
                    <a href="produto.html?id=${produto.codigo}">
                        <img src="${produto.imagem}" alt="${produto.minititulo}">
                        <p>
                            ${produto.titulo}<br>
                            <strong>
                                ${produto.preco}<br>
                            </strong>
                        </p>
                    </a>
                    <div class="produto-comprar">
                        <button>comprar</button>
                    </div>
                </div>`;
        }
        
        divProdutos.innerHTML = template;
        
        if (produtos.length % 3 != 0) {
            divProdutos.style.setProperty("justify-content", "start", "important");
        }
    } else {
        divSemProdutos.style.setProperty("display", "block", "important");
    }
}

function renderizarTipo(tipo){
    switch(tipo){
        case "lancamentos":
            return "Lançamentos";
        case "destaques":
            return "Destaques";
        case "jogos":
            return "Jogos";
        case "pcgamer":
            return "PC Gamer";
        case "eletronicos":
            return "Eletrônicos";
        case "perifericos":
            return "Periféricos";
        case "colecionaveis":
            return "Colecionáveis";
        case "consoles":
            return "Consoles";
        case "notebooks":
            return "Notebooks";
        case "smartphone":
            return "Smartphones & tablets";
        case "audio":
            return "Áudio";
        case "smarthome":
            return "Smart home";
        case "drones":
            return "Drones";
        default:
            return "Produtos";
    }
}