const gerar = document.querySelector("#Submit")
const frm = document.querySelector("form")


frm.addEventListener("click", () => {

let resposta = ""

    let numCaracteres = parseInt(document.getElementById("numeroscaracteres").value)
     // pega string numerica e transforma em number
 let letmaiusculas = document.querySelector('input[name="letrasmaiusculas"]')
 let letminusculas =  document.querySelector('input[name="letrasminusculas"]')
 let sim =  document.querySelector('input[name="simbolos"]')
 let num =  document.querySelector('input[name="numeros"]')



 if(letmaiusculas.checked){
 letmaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 resposta +=letmaiusculas

 }
 if(letminusculas.checked){
    letminusculas = "abcdefghijklmnopqrstuvwxyz" 
     resposta += letminusculas
 }
 if(sim.checked){
     sim = "!@#$%^&*()_+{}[]:;<>,.?/"
      resposta +=sim
 }
 if(num.checked){
    num = "0123456789"
     resposta += num
 }
 
 if (resposta.length === 0) {
            alert("Selecione pelo menos uma opção!")
            return
        }

})