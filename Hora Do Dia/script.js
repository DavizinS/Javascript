function carregar() {
    /* Armazenamento de Dados */
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var mtn = window.document.querySelector('div#mtn')
    var data = new Date()
    var hora = data.getHours()
    /* Manipulação de Variaveis. */
    msg.innerHTML = `<strong>Agora são exatamente ${hora} horas</strong>`
    /* Condições Aninhadas */
    if (hora > 0 && hora < 12) {
        // BOM DIA
        img.src = 'Manha.jpeg'
        document.body.style.background = '#e2cd9f'
        mtn.innerHTML = '<p>BOM DIA! <3 </p>'
    } else if(hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'Tarde.jpeg'
        document.body.style.background = '#b9846f'
        mtn.innerHTML = '<p>BOA TARDE! <3 </p>'
    } else {
        // BOA NOITE
        img.src = 'Noite.jpeg'
        document.body.style.background = '#515154'
        mtn.innerHTML = '<p>BOA NOITE! <3 </p>'
    }
}