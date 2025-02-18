'use strict'

const disciplinas = [
{nome:    'PWBE', cor: '#8A2BE2', icon: 'PPDM.png'},
{nome:    'PWFE', cor: '#BFEFFF', icon: 'PRO.png'},
{nome:    'PPDM', cor: '#54FF9F ', icon: 'PWBE.png'},
{nome:    'PRO', cor: '#FFD700', icon: 'PWFE.png'}

]

function criarItemMenu(disciplina){ 
    const listaMenu = document.getElementById('menu') 
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novaImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novaImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
    
}

disciplinas.forEach(criarItemMenu)