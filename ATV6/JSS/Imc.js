const txtNome = document.querySelector("#nome")
const txtAltura = document.querySelector("#altura")
const txtPeso = document.querySelector("#peso")
const btnCalc = document.querySelector("#btnCalcular")
const btnVoltar = document.querySelector("#btnVoltar")
const cxForm = document.querySelector("#form")
const cxResultado = document.querySelector("#resultado")
const cxNome = document.querySelector("#divNome")
const cxImc = document.querySelector("#divIMC")
const cxSituacao  = document.querySelector("#divSituacao")

/*Eventos da página */
btnCalc.addEventListener("click", ()=>{
    let imc = parseFloat(txtPeso.value) / (parseFloat(txtAltura.value) * parseFloat(txtAltura.value))
    let sit = ""

    if(imc < 18.5){
        sit = "Abaixo do peso"
    }else if(imc < 25) {
        sit = "Peso Normal"
    }else if(imc < 30) {
        sit = "Sobrepeso"
    }else if(imc < 35) {
        sit = "Obesidade Grau I"
    }else if(imc < 40) {
        sit = "Obesidade Grau II"
    }else{
        sit = "Obesidade Grau III"
    }

    cxNome.innerHTML += txtNome.value
    cxImc.innerHTML += " " + imc.toFixed(2.5)
    cxSituacao.innerHTML += " " + sit

    cxForm.classList.toggle("ocultar")
    cxResultado.classList.toggle("ocultar")
})

btnVoltar.addEventListener("click", ()=>{
    limpaInput();
    cxForm.classList.toggle("ocultar")
    cxResultado.classList.toggle("ocultar")
    
})

const limpaInput = () => {
    txtNome.value = ""
    txtAltura.value = ""
    txtPeso.value = ""
    cxNome.innerHTML = ""
    cxImc.innerHTML = ""
    cxSituacao.innerHTML = ""
}
