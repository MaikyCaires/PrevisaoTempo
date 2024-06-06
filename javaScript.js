const key = 'e49db9532cbcb13a728dff388674d6e3'
const btn = document.querySelector('[data-btn="buscar"]')
const cidade = document.querySelector('[data-input="cidade"]')

//dados para alterar
const temperaturaMaxima = document.querySelector('[data-temperatura="maxima"]')
const temperaturaMinima = document.querySelector('[data-temperatura="minima"]')
const temperaturaHumidade = document.querySelector('[data-temperatura="humidade"]')
const temperaturaVelocidade = document.querySelector('[data-temperatura="velocidade"]')
const cidadeSelecionada = document.querySelector('[data-cidade="value"]')
const paisSelecionado = document.querySelector('[data-pais="value"]')
const temperaturaTotal = document.querySelector('[data-temperatura="total"]')
const temperaturaDescricao = document.querySelector('[data-temperatura="descricao"]')
const img = document.querySelector('[data-img="icon"]')


function buscar(event){
    event.preventDefault()
    let nomeCidade = cidade.value
    tempo(nomeCidade)
}

function mostrarDados(dados){
    if(dados.error){
        alert("algo deu errado")
    }else{
        cidadeSelecionada.innerText = dados.name
        paisSelecionado.innerText = dados.sys.country
        temperaturaTotal.innerText = (dados.main.temp).toFixed(1)
        temperaturaMaxima.innerText = (dados.main.temp_max).toFixed(1)
        temperaturaMinima.innerText = (dados.main.temp_min).toFixed(1)
        temperaturaHumidade.innerText = dados.main.humidity
        temperaturaVelocidade.innerText = dados.wind.speed
        temperaturaDescricao.innerText = dados.weather[0].description
        img.setAttribute("src", `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`)

    }
}

async function tempo(cidade){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`
    try{
        const dados = await fetch(url).then(resp => resp.json())
        console.log(dados)
        mostrarDados(dados)
    }catch(error){
        console.log(error)
    }
}

btn.addEventListener("click", buscar)