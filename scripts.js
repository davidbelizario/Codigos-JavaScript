
let nome = "Matheus"
let idade = 20

//IF, ELSE
if(nome != undefined && nome == "David"){
    console.log("O nome é David")
}   else if(nome=="Matheus" && nome.length>8 && idade>21){
        console.log("o nome é Matheus")
    }   else{
            console.log("O nome é matheus e a idade é 20")
        }

 // WHILE
let x = 10
let y=1
while (x>0) {
    console.log("Tabuada do 5: 5 * " + x + " = " + 5*x)
    x=x-1
}

//FOR
for(let numero=2; numero <= 100; numero++){
    console.log("o numero é" + numero *2)
}

//CONTINUE
for (let i=1; i < 11; i++){
    if (i%2==0){
        continue
    }
 console.log(i)
}

//SWITCH
 nome = "David"

switch(nome) {
    case "Matheus":
        console.log("seu nome é Matheus")
        break
    case "David":
        console.log("seu nome é David")
        break
    default:
        console.log("voce não tem nome")
}

//TIPOS DE VARIÁVEIS

 nome= "David"
 idade = 10
 let cnh = true

 console.log(typeof nome)
 console.log(typeof idade)
 console.log(typeof cnh)

 ///FUNÇÕES
 
 //declarando a função
 function imprimirNoConsole(){
     console.log("Olá Mundo")
 }
//chamando a função
 imprimirNoConsole()

 //Função com parâmetro
 function imprimirUmNumero(num){
    console.log("o numero é " + num)
 }
//passando o números como parametros para a função imprimirUmNumero
 imprimirUmNumero(2)
 imprimirUmNumero(4)
 imprimirUmNumero(6)
 imprimirUmNumero(8)

//atribuindo uma funcao a uma variavel
 function multiplicarNumeros(x, y, z){
     return x*y*z
 }

 const mult = multiplicarNumeros(2,3,1)
 console.log(mult)

 function podeDirigir(idade, cnh){
     if (idade>18 && cnh==true){
         console.log("pode dirigir")
     }else{
             console.log("não pode dirigir")
         }
 }

 podeDirigir(20, true)
 podeDirigir(28, false)


 
 //ESCOPO LOCAL E GLOBAL
 let c = 10
 if (c>5){
     let c = 20
     c++
     console.log(c)
 }
 console.log(c)


 //ARROW FUNCTION "=>"
 const parOuImpar = (n) => {
     return n % 2
 }
 console.log(parOuImpar(3))



 //FUNÇÃO COM PARAMETRO PRÉ DETERMINADO
 function potencia(base, exp=2){
     return Math.pow(base, exp)
 }
 console.log(potencia(2)) // Resultado: 4
 console.log(potencia(2, 3))  // Resultado: 8



 //-OBJETOS

 let pessoa = {
     nome: "Matheus",
     profissao: "programador",
     idade: function(){
         console.log('20')
     }
 }

 console.log(pessoa.nome)
 console.log(pessoa.profissao)
 pessoa.idade()

 //criando e deletando propiedades para os objetos
  delete pessoa.nome
  pessoa.casado= true
  console.log(pessoa)
 

  //-COPIANDO OBJETOS DE UMA PROPIEDADE PARA OUTRA

  let carro = {
      portas: 2,
      motor: '2.0',
      portamalas: '420l'
  }

  let adicionais = {
      arcondicionado: true,
      tetosolar: true
  }

  Object.assign(carro, adicionais)

  console.log(carro)

  //LOOP EM ARRAY

  let numeros = [1, 2, 3, 4];
  for (let i = 0; i <= numeros.length; i++){
      console.log(numeros[i]);
  }

  //POP= REMOVE ELEMENTO; PUSH= ADICIONA ELEMENTO -> MUDANÇA NO 1º ELEMENTO
  //SHIFT= REMOVE ELEMENTO; UNSHIFT= ADICIONA ELEMENTO -> MUDANÇA NO ÚLTIMO ELEMENTO

  let numeroRemovido = numeros.pop();
  console.log("o número removido é: " + numeroRemovido);
  console.log(numeros);

  numeros.push(5);
  console.log(numeros);

  //IndexOf= MOSTRA EM QUAL INDICE ESTÁ O PRIMERIO ELEMENTO; LastIndexOf= MOSTRA EM QUAL INDICE ESTÁ O ÚLTIMO ELEMENTO

  let nms=[4,3,1,4,5,1,6,1];

  console.log(nms.indexOf(1)); // Indice=2
  console.log(nms.lastIndexOf(1)); // Indice=7

  //RETORNA UMA PARTE DO ARRAY

  console.log(nms.slice(2,6)); // 1,4,5,1
  console.log(nms.slice(5)); // 1,6,1

  //ForEach= Funciona igual o "For" para varrer o array
  nms.forEach(i => {
      console.log("os números são: " + nms);
  })

  //Includes= verifica se o elemento está dentro do array

  console.log(nms.includes(4)); // true
  console.log(nms.includes(7)); // false

  //Reverse: Inverte o array

  console.log(nms.reverse());

 // Strim= remove tudo o que não é string

 let nom= "     David";
 
 console.log(nom.trim()); // "David"

 //SKU= INSERINDO CARACTERES ANTES DA STRING
 let sku = '34';

 console.log(sku.padStart(8,0)); // 000034

 let sku2 = '3456'; 

 console.log(sku2.padStart(6,0)); // 003456




  

