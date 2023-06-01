// Variáveis

const apiClimaKey = "546da5a3b17ab473fdd5416e1e8d63b8";
const apiCountryURL = "https://flagsapi.com/BR/flat/32.png";

const pesquisaInput = document.querySelector("#pesquisa-input");
const pesquisaForm = document.querySelector("#pesquisa");
const cidadeSpan = document.querySelector("#cidade");
const paisImg = document.querySelector("#bandeira-pais");
const climaIcon = document.querySelector("#clima-icon");
const temperaturaSpan = document.querySelector("#temperatura span");
const descricaoP = document.querySelector("#descricao");
const umidadeSpan = document.querySelector("#umidade span");
const ventoSpan = document.querySelector("#vento span");

// Funções

const getDadosClima = async(cidade) => {
  const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiClimaKey}&lan=pt_br`;

  const res = await fetch(apiClimaURL);
  const data = await res.json();

  console.log(data);
}

const showClima = (cidade) => {
  getDadosClima(cidade);

  cidadeSpan.innerText = cidade;
}

// Eventos

pesquisaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cidade = pesquisaInput.value;

  showClima(cidade);
});