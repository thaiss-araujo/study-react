import { useEffect, useState } from "react"

export default function Fetch(){
        //  dado, seta odado,          estado inicial
    const [ data, setData ] = useState([])

    // console.log(data, 'estado inicial')
   
    //mock - cria um formulario em que o usuário fale o cep 
    const url = 'https://viacep.com.br/ws/05820120/json/'
    
    useEffect(() => {
        console.log('rodou useEffect')
    }, [])
    
//     fetch(url)
//     .then(res => {
//         if(!res.ok){
//             throw new Error('Deu ruim njsso aqui:' + res.status);
            
//         }
//         return res.json()
//     })
//     .then(data => {
//         //  inserindo o dado na variavel
//         return setData(data)
//     })
//     .catch(err => {
//         console.error('Erro:', err)
//     })
    
    // console.log(data, 'estado depois do setDat')
 
    return (
        <div className="">
            <h1>Fetch</h1>
        </div>
    )
}