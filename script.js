const btnSomar = document.querySelector('#btnSomar')
btnSomar.addEventListener('click', () => {
    soma()
})


function soma(){
    const campoValor1 = document.querySelector('#valor1')
    const campoValor2 = document.querySelector('#valor2')
   
    const valor1 = parseFloat(campoValor1.value)
    const valor2 = parseFloat(campoValor2.value)
    
    const valorSomado = valor1 + valor2
    
    const campoResultado = document.querySelector('#resultado')
    campoResultado.textContent = valorSomado
}