let nombre=prompt("Ingrese su nombre")
let usuario= document.getElementById('usuario').innerHTML=nombre
let piedra=document.getElementById('piedra')
let papel=document.getElementById('papel')
let tijera=document.getElementById('tijera')
let piedra2=document.getElementById('piedra2')
let papel2=document.getElementById('papel2')
let tijera2=document.getElementById('tijera2')
let contador= document.getElementById('contador')
let contador2=document.getElementById('contador2')
let contador3=document.getElementById('contador3')
var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");


        if (jugada=="piedra") {
            piedra.style.display='flex'
        }else if(jugada=="papel"){
            papel.style.display='flex'
        }else if(jugada=="tijera"){
            tijera.style.display='flex'
        }
        var aleatorio = Math.floor((Math.random() * 9) + 1);
        var elige=""

        if (aleatorio<=3) {
            elige="piedra2"
            piedra2.style.display='flex'
        }else if(aleatorio>3 && aleatorio<=6){
            elige="papel2"
            papel2.style.display='flex'
        }else if(aleatorio>6 && aleatorio<=9){
            elige="tijera2"
            tijera2.style.display='flex'
        }
        if (jugada=="piedra" && elige=="tijera2") {
            contador.innerHTML="Has Ganado que pro 😎"   
        }else if (jugada=="piedra" && elige=="papel2") {
            contador3.innerHTML="Has Perdido que pendejo JAJAJAJAJ"
        }else if (jugada=="piedra" && elige=="piedra2") {
            contador2.innerHTML="Podria ser Peor XD"
        }

        if (jugada=="papel" && elige=="piedra2") {
            contador.innerHTML="Has Ganado que pro 😎"   
        }else if (jugada=="papel" && elige=="tijeras2") {
            contador3.innerHTML="Has Perdido que pendejo JAJAJAJAJ"
        }else if (jugada=="papel" && elige=="papel2") {
            contador2.innerHTML="Podria ser Peor XD"
        }

        if (jugada=="tijera" && elige=="papel2") {
            contador.innerHTML="Has Ganado que pro 😎"   
        }else if (jugada=="tijera" && elige=="piedra2") {
            contador3.innerHTML="Has Perdido que pendejo JAJAJAJAJ"
        }else if (jugada=="tijera" && elige=="tijera2") {
            contador2.innerHTML="Podria ser Peor XD"
        }




// }else if(aleatorio>3 && aleatorio<=6){
//     papel2.style.display='flex'
// }else if(aleatorio>6 && aleatorio<=9){
//     tijera2.style.display='flex'
// }







