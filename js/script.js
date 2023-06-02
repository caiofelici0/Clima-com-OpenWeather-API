// Variáveis

const apiClimaKey = "546da5a3b17ab473fdd5416e1e8d63b8";
const apiCountryURL = "https://flagsapi.com/BR/flat/32.png";

const pesquisaInput = document.querySelector("#pesquisa-input");
const pesquisaForm = document.querySelector("#pesquisa");
const infoClimaDiv = document.querySelector("#info-clima");
const cidadeSpan = document.querySelector("#cidade");
const paisImg = document.querySelector("#bandeira-pais");
const climaIcon = document.querySelector("#clima-icon");
const temperaturaSpan = document.querySelector("#temperatura span");
const descricaoP = document.querySelector("#descricao");
const umidadeSpan = document.querySelector("#umidade span");
const ventoSpan = document.querySelector("#vento span");

// Funções

const getDadosClima = async(cidade) => {
  const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiClimaKey}&lang=pt_br`;

  const res = await fetch(apiClimaURL);
  const data = await res.json();

  console.log(data);
  console.log(data.main.temp);

  return data;
}

const showClima = async(cidade) => {
  const data = await getDadosClima(cidade);

  cidadeSpan.innerText = data.name;
  paisImg.src = `https://flagsapi.com/${data.sys.country}/flat/32.png`;
  climaIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  descricaoP.innerText = data.weather[0].description;
  temperaturaSpan.innerText = data.main.temp.toFixed(0);
  umidadeSpan.innerText = `${data.main.humidity}%`;
  ventoSpan.innerText = `${data.wind.speed.toFixed(1)} km/h`;

  pesquisaInput.value = "";
  infoClimaDiv.classList.remove("hide");
}

// Eventos

pesquisaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cidade = pesquisaInput.value;

  showClima(cidade);
});

pesquisaInput.addEventListener("keyup", (e) => {
  if(e.code === "Enter"){
    showClima(cidade);
  }
});