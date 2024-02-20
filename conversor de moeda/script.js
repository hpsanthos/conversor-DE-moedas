const button = document.querySelector("button")
const selecionarValor = document.querySelector(".selecionarMoeda")
const selecionarValor1 = document.querySelector(".primeiraselecao")

function convertervalue() {

     const valorconverter = document.querySelector(".valorConverter").value

     const valorReal = document.querySelector(".valor1")

     const valorConvertido = document.querySelector(".valor2")


     const valorDolar = 5.2
     const valorEuro = 6.2
     const valorLibra = 6.24
     const valorBitcoin = 254.104

     if (selecionarValor.value == "dolar") {
          valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
               style: "currency",
               currency: "USD"
          }).format(valorconverter / valorDolar)

     }
     if (selecionarValor.value == "euro") {
          valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
               style: "currency",
               currency: "EUR"
          }).format(valorconverter / valorEuro)
     }
     /*if (selecionarValor.value == "peso") {
          valorConvertido.innerHTML = new Intl.NumberFormat("ar-AR", {
               style: "currency",
               currency: "ARS"
          }).format(valorconverter / valorPeso)*/
     if (selecionarValor.value == "libra") {
          valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
               style:"currency",
               Currency: "GBP"
          }).format(valorconverter / valorLibra)
     } 
     if (selecionarValor.value == "bitcoin") {
          valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
               style:"currency",
               Currency: "BTC"
          }).format(valorconverter / valorBitcoin)
     }


     valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
     }).format(valorconverter)
}

function mudarMoeda() {
     const trocarImage = document.getElementById("trocarimagem")
     const img = document.querySelector(".imagemm")
     if (selecionarValor.value == "dolar") {
          trocarImage.innerHTML= "Dolar americano"
          img.src = "./img/dolar.png"
     }
     if (selecionarValor.value == "euro") {
          trocarImage.innerHTML= "Euro"
          img.src = "./img/euro.png"
     }
     if (selecionarValor.value == "libra"){
          trocarImage.innerHTML= "Libra"
          img.src="./img/libra.png"
     }
     if (selecionarValor.value == "bitcoin"){
          trocarImage.innerHTML= "Bitcoin"
          img.src="./img/bitcoin.png"
     }
      convertervalue()
}

     
selecionarValor.addEventListener("change", mudarMoeda)
button.addEventListener("click", convertervalue)

function converterprimeiraSelecao(){

     
}