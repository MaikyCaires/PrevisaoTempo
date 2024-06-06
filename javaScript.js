const key = 'e49db9532cbcb13a728dff388674d6e3'
async function tempo(cidade){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`
    try{
        const dados = await fetch(url).then(resp => resp.json())
        console.log(dados)
    }catch{
        console.log(error)
    }
}

tempo("anadqweqwed")