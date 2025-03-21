import { useState } from "react"

export default function BuscarPokemon(){

    const [ pokemon, setPokemon ] = useState('')
    const [ data, setData ] = useState(null)

    const handleBuscar = () => {
        if(!pokemon) return
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(result => setData(result))
    }
console.log(pokemon)
console.log(data.species.name)
    return(
        <div className="">
            <h1>Busque um pokemon</h1>
            <input onChange={(e) => setPokemon(e.target.value)} type="text" />
            <button onClick={handleBuscar}>buscar</button>

            {
                data && (
                    <div className="">
                        <p>name: {data.species.name}</p>
                        <img src={data.sprites.front.defautl} alt="" />
                    </div>
                )
            }

        </div>
    )
}