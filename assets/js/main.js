const buttonHtml = document.getElementById("generaNumeri")
const spanHtml = document.getElementById("vincitore")

buttonHtml.addEventListener("click", function(){

  let numeroGenerato = document.getElementById("dado")
  numeroGenerato =  Math.floor(Math.random() * 6) + 1

  let numeroGenerato2 = document.getElementById("dado2")
 numeroGenerato2 = Math.floor(Math.random() * 6) + 1


 document.getElementById("dado").textContent = numeroGenerato

 document.getElementById("dado2").textContent = numeroGenerato2
 
   if (numeroGenerato > numeroGenerato2){
    spanHtml.innerHTML = `il vincitore è Giocatore, Numero vincente ${numeroGenerato}`
   }else if (numeroGenerato2 > numeroGenerato){
    spanHtml.innerHTML = `il vincitore è Computer, Numero vincente ${numeroGenerato2}`
   }else {
    spanHtml.innerHTML = "Pareggio!"
   }
})


