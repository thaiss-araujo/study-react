import { useState } from 'react'
import styles from './style.module.css'

export default function BuscarCep(){

    const [ cep, setCep ] = useState('')
    const [ data, setData ] = useState(null)

    // constante que dispara uma função
    const handleBuscar = () => {
       if(!cep) return
       fetch(`https://viacep.com.br/ws/${cep}/json/`) 
       .then(res => res.json())
       .then(result => setData(result))
    }
    console.log(cep, 'debug cep')
    console.log(data,'debug data')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Busque seu CEP</h1>
            <input minLength ={8} onChange={(e) => setCep(e.target.value)} type="text" className={styles.input}/>
            <button disabled={cep.length < 8 ? true : false}className={styles.button} onClick={handleBuscar}>pesquisar</button>
            {
                data && (
                    <div className="">
                        <p>endereço: {data.logradouro}</p>
                        <p>cidade: {data.localidade}</p>
                        <p>bairro: {data.bairro}</p>
                        <input type="color" name="" id="" />
                    </div>
                )
            }
        </div>
    )
}