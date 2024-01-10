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





const buttonHtml2 = document.getElementById("btnEmail")


buttonHtml2.addEventListener("click",function(){

    const emailHtml = document.getElementById("emailUtente").value

    const iscritti = [
        'utente1@example.com',
        'utente2@example.com',
        'utente3@example.com',
        'utente4@example.com',
        'utente5@example.com'
    ]

    let controlloEmail = false


    for (let i = 0 ; i < iscritti.length; i++){
        if (emailHtml === iscritti [i]){
            controlloEmail = true
            break
        }
    }
     
    if (controlloEmail){
        document.getElementById("acesso").innerHTML = "acesso consentito"
    }else{
        document.getElementById("acesso").innerHTML = "acesso non consentito"
        
    }
})
