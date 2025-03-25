function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";
    let img = "";

    //se o campo de pesquisa tiver vazio
    if (campoPesquisa === "") {
        for (let dado of dados) {
            resultados += `
                <div class="item-resultado">
                    <img class= "img" src="${dado.img}" alt="" height="200px" width="200px" >
                    <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
                </div>
            `;
        }
        section.innerHTML = resultados;
        return;
    }

    //filtrar itens que correspondem a busca
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <img class= "img" src="${dado.img}" alt="" height="200px" width="200px" >
                    <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
                </div>
            `;
        }
    }

    //se não tiver resultados, exibir todos os itens
    if (!resultados) {
        resultados = "<p>Resultado não encontrado! Exibindo todos os itens disponíveis:</p>";
        for (let dado of dados) {
            resultados += `
                <div class="item-resultado">
                    <img class= "img" src="${dado.img}" alt="" height="200px" width="200px" >
                    <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
                </div>
            `;
        }
    }

    section.innerHTML = resultados;
}