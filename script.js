const key = "7c3ae53f897f93b81e68fe18d28ab280"

function colocardadosNaTela(dados) {
  console.log(dados)
  document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
  document.querySelector('.tempo').innerHTML = Math.floor(dados.main.temp) + '°C'
  document.querySelector('.previsao').innerHTML = dados.weather[0].description
  document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
  document.querySelector('.img-nuvem').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}

async function buscarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

  colocardadosNaTela(dados)
}

function cliqueiNoBotao() {
  const cidade = document.querySelector('.input-cidade').value

  buscarCidade(cidade)
}

