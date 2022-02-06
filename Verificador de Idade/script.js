function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.jpeg')
            } else if (idade >= 10 && idade < 30) {
                // Adolescente
                img.setAttribute('src', 'jovem.jpeg')
            } else if(idade >= 30 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'velhinho.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menina.jpeg')
            } else if (idade >= 10 && idade < 30) {
                // Adolescente
                img.setAttribute('src', 'moça.jpeg')
            } else if(idade >= 30 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'velhinha.jpeg')
            }
        }
        res.style.textAlign = 'center'  // Centralizar o texto após a verificação.
        res.innerHTML = `Detectamos: ${genero} com ${idade}`
        res.appendChild(img)
    }
}