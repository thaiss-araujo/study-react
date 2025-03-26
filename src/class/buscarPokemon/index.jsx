import './styles.css'
import { useState } from "react"

export default function BuscarPokemon(){

    // aloca o nome do pokemon que vem do input
    const [ pokemon, setPokemon ] = useState('')
    // aloca o dado que vem da api
    const [ data, setData ] = useState(null)
    // informa quando está carregando
    const [ loading, setLoading ] = useState(false)

    // variável que dispara uma função (função anonima)
    const handleGetPokemon = () => {
        // verifica se tem um texto dentro da variável pokemon
        if(!pokemon) return;
        // usuário clicou e antes de começar a processar, eu coloco para carregar
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(result => {
            // salvando o dado do pokemon na variável
            setData(result)
            // desligando o loading       
            setLoading(false)
        
        })
    }

    console.log(pokemon)

    return(
        <div className="pokemon-container">
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
        {/* quando o data da api chegar, traz as informações */}
        {
            data && 
            <div className="">
                <img src={data.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`´Foto do ${pokemon}`} />
                <p>{data.name}</p>
            </div>
        }

        </div>
    )
}