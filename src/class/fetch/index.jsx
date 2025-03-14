export default function Fetch(){
   
    //mock
    const url = 'https://viacep.com.br/ws/05820120/json/'
    
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw new Error('Deu ruim njsso aqui:' + res.status);
            
        }
        return res.json()
    })
    .then(data => {
        console.log('Dados recebidos:', data)
    })
    .catch(err => {
        console.error('Erro:', err)
    })
    
    
    
    
    return <h1>Fetch</h1>
}