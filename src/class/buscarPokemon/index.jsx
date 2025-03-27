import './styles.css'
import { useState } from "react"

export default function BuscarPokemon(){

    const arrayTypes = {

        'normal' : '#ced4da',
        'fighting' : '#f3722c',
        'flying' : '#a1b5d8',
        'poison' : '#c77dff',
        'ground' : '#ee964b',
        'rock' : '#c9a227',
        'bug' : '#a5be00',
        'ghost' : '#5e548e',
        'steel' : '#43aa8b',
        'fire' : '#c1121f',
        'water' : '#8ecae6',
        'grass' : '#06d6a0',
        'electric' : '#fee440',
        'psychic' : '#ef476f',
        'ice' : '#cae9ff',
        'dragon' : '#62b6cb',
        'dark' : '#03071e',
        'fairy' : '#b23a48',
        'stellar' : '#738290',
        'unknown' : '#f6fff8',
        
        }

    // aloca o nome do pokemon que vem do input
    const [ pokemon, setPokemon ] = useState('')
    // aloca o dado que vem da api
    const [ data, setData ] = useState(null)
    // informa quando está carregando
    const [ loading, setLoading ] = useState(false)
    // variavel para trazer a informação caso tenha erro
    const [ erro, setErro ] = useState(null)

    // variável que dispara uma função (função anonima)
    const handleGetPokemon = () => {
        // verifica se tem um texto dentro da variável pokemon
        if(!pokemon) return;
        // limpar o dado do ultimo pokemon
        setData(null)
        // limpa o erro anterior
        setErro(null)
        // usuário clicou e antes de começar a processar, eu coloco para carregar
        setLoading(true)
        
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(result => {
                // salvando o dado do pokemon na variável
                setData(result)
                // desligando o loading       
                setLoading(false)
            
            })
            .catch(() => {
                setErro('Ocorreu um erro ao buscar o pokemon!')
                setLoading(false)
            })
            
        }, 3000)
    }

    const handleTypeColor = data && arrayTypes[data?.types?.[0].type?.name]

    return(
        <div className="" style={{backgroundColor: handleTypeColor}}>
            <h1>Busque seu Pokemon favorito</h1>
            <input 
                type="text" 
                placeholder='Quem é esse Pokemon?' 
                onChange={(e) => setPokemon(e.target.value)}
                value={pokemon}
            />
            <button
            // caso não tenha nenhum nome fica desabilitado
                disabled={pokemon.length <= 0 ? true : false}
                onClick={handleGetPokemon}
            >Buscar Pokemon</button>
       
        {/* quando o load estiver true mostra o paragrafo */}
        { loading && <p>Carregando...</p>}
        {/* quando a Promisse for rejeitada mostra o erro */}
        {erro && <p>{erro}</p>}
        {/* quando o data da api chegar, traz as informações */}
        {
            data && 
            <div className="">
                <img src={data.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${pokemon}`} />
                <p>{data.name}</p>
            </div>
        }

        </div>
    )
}