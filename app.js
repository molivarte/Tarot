function pesquisar() {
    console.log(dados);
    let section = document.getElementById
        ("resultados-pesquisa")

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

console.log(campoPesquisa)

    let resultados = ""

    for (let dado of dados) {

        if (dado.titulo.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="https://www.astrolink.com.br/data/tarot/o-louco.jpg">${dado.titulo}</a>
              </h2>
              <h3>Um Salto para o Desconhecido</h3>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Clique aqui para mais informações</a>
            </div>
          `
        }

    }

    section.innerHTML = resultados
}