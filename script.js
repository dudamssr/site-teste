const { json } = require("express");

/*função para clica no botão e aparece msg*/
async function dolar(bt){
    /*faz com q apareça valor do dolar*/
   const api = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
   const json = await (await api).json();
    bt.innerHTML = `R$ ${Number(json.USDBRL.bid).toFixed(2).replace(".", ",")}`;
}