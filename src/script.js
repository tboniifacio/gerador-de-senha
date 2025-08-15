
const frm = document.querySelector("form")
const resp1 = document.querySelector("#InSenha")
const slider = document.getElementById("numeroscaracteres");
const output = document.getElementById("valorRange");

output.textContent = slider.value;

slider.addEventListener("input", function() {
  output.textContent = this.value;
})


frm.addEventListener("submit", (e) => {
    e.preventDefault()

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


        let senha = ""
        for(let i = 0; i < numCaracteres; i++){
             
        let sorteio = Math.floor(Math.random() * resposta.length)
        senha += resposta[sorteio]

    
           
        }
        resp1.value = senha
})