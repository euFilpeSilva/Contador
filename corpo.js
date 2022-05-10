//função responsável por armazenar em variaveis os dados numéricos
//digitados nos inputs
//alem de também realizar um teste logico
// pra saber se tem algum campo vazio e realizar a conversão
//dos valores de string pra number e por fim
//encrementar a contagem de acordo com os dados passados.

function contar(){
  //armazenando os dados passados
  let inicio =document.getElementById('txt1');
  let fim =document.getElementById('txt2');
  let passo =document.getElementById('txt3');
  let res =document.getElementById('result');
  //verificando se há algum campo vazio
  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('ERRO, Faltam Dados.');
  }else{
  res.innerHTML = 'contando...';
  //Convertendo de string pra number
  let i = Number(inicio.value);
  let f = Number(fim.value);
  let p = Number(passo.value);
  //manipulando o encremento
  for(x = i;x <= f;x += p){
    res.innerHTML += `${x}\u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
  }
 
}
