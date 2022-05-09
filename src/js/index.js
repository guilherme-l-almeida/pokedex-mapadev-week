/* 
quando clicar no pokemom da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 

pra isso trabalharemos com os elementos: listagem e cartão do pokemon

precisamos criar duas variaveis no JS para trablhar com os elementos da tela

vamos precissar trabalhar com evento de clique feito pelo usuário na listagem de pokemons

-remover a classe aberto só do cartão que está aberto
-ao clicar em  um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
-remover a classe ativa que marca o pokemon selecionado na listagem
-adicionar a classe ativo no item da lista selecionado

*/

 // PRECISAMOS CRIAR 2 VARIAVEIS NO JS PARA TRABALHAR COM OS ELEMENTOS DA TELA
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => {
        //vamos precissar trabalhar com evento de clique feito pelo usuário na listagem de pokemons
    pokemon.addEventListener("click", () => {
        //remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove("aberto")  


        //ao clicar em um pokemon da listagem, pegamos o id desse pokemon para saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value
        

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokemon selecionado na listagem
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove ('ativo')

        //adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add ('ativo')  

    })
} )