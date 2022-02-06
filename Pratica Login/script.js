function carregar() {
    var nome = document.getElementById('txtnome').value
    var reg = document.getElementById('res')
    var img = document.createElement('img')
    var idade = document.getElementById('idade')
    img.setAttribute('id', 'foto')
    if (nome == 'Davi') {
        reg.innerHTML = `Olá, Davi! ADM LINDO! U.u <3`
    } else if (nome == 'Poliana') {
        reg.innerHTML = `HUUUUMMM, POLIANA SUA LINDA! <3 DAVI TE AMA <3`
    } else {
        reg.innerHTML = `Jogador(a) ${nome}, registrado com sucesso!`
    }
    reg.style.textAlign = 'center'
    img.style.width = '20px'
    img.setAttribute('src', 'unnamed.png')
    reg.appendChild(img)
}