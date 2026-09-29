function calcular(){
   let nota1trim = Number(prompt("Digiti a nota do primeiro trimestre"))
   let nota2trim = Number(prompt("Digiti a nota dosegundo trimestre"))

   let resultado = 180-(nota1trim+nota2trim)
   alert("Voce precisa de" + resultado + "para ser aprovado");

   if(resultado >= 180){
      alert("parabens voce foi aprovado por nota!!");
     } else {
      alert("voce precisa de" );
     }
}   