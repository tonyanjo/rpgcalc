function resultado() {
    let ladostxt = window.document.getElementById('lados')
    let lados = Number(ladostxt.value)
    let dado = function(){
        return Math.ceil(Math.random()*`${lados}`)
        }
    let rolagem = dado()
    let bbatxt = window.document.getElementById('bba')
    let danotxt = window.document.getElementById('dano')
    let bba = Number(bbatxt.value)
    let dano = Number(danotxt.value)
    let resDado = window.document.getElementById('resDado')
    let calculo = window.document.getElementById('calculo')
    let resultado = function(){
        return bba + dano + rolagem
        }
    let resultadoFinal = resultado()
    resDado.innerHTML = `O resultado da rolagem do <strong>d${lados}</strong> foi: <strong>${rolagem}</strong>`
    calculo.innerHTML = `O resultado final com os bônus foi de: <strong>${Math.ceil(resultadoFinal)}</strong>`
}