"use strict"

const botaoTrocarCor = document.getElementById('trocar-foto')

function trocarfoto () {
    
    const foto = document.getElementById('cor').value

    document.documentElement.style.setProperty('--foto-fundo', foto)
}

botaoTrocarCor.addEventListener('click', trocarfoto)