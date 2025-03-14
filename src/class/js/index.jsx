
export default function Js({fullName, age}) {
    
    let brand = {
        name: 'Suporte',
        founded: '2023',
        city: 'SãoPaulo'
    }

    const{city} = brand

    return <h1>Nome completo: {fullName}, {age}</h1>
}