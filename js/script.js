// Controle do tamanho do texto
const pagina = document.querySelector('html');
const diminuirFonte = document.querySelector('#diminuir-fonte');
const aumentarFonte = document.querySelector('#aumentar-fonte');
let nivelFonte = 1;

function atualizarFonte() {
    pagina.classList.remove('fonte-menor', 'fonte-maior', 'fonte-maxima');

    if (nivelFonte === 0) {
        pagina.classList.add('fonte-menor');
    } else if (nivelFonte === 2) {
        pagina.classList.add('fonte-maior');
    } else if (nivelFonte === 3) {
        pagina.classList.add('fonte-maxima');
    }
}

if (diminuirFonte) {
    diminuirFonte.addEventListener('click', function () {
        if (nivelFonte > 0) {
            nivelFonte--;
            atualizarFonte();
        }
    });
}

if (aumentarFonte) {
    aumentarFonte.addEventListener('click', function () {
        if (nivelFonte < 3) {
            nivelFonte++;
            atualizarFonte();
        }
    });
}

// Controle de alto contraste
const contraste = document.querySelector('#alternar-contraste');

if (contraste) {
    contraste.addEventListener('click', function () {
        const ativo = document.body.classList.toggle('alto-contraste');
        contraste.setAttribute('aria-pressed', ativo);
    });
}

// Checklist de acessibilidade
const formulario = document.querySelector('#formulario-teste');
const resultado = document.querySelector('#resultado');

if (formulario && resultado) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const total = formulario.querySelectorAll('input[type="checkbox"]:checked').length;
        let mensagem = '';

        if (total <= 3) {
            mensagem = 'Seu site ainda possui vários pontos que podem ser melhorados.';
        } else if (total <= 6) {
            mensagem = 'Seu site possui uma boa base, mas ainda pode melhorar alguns pontos.';
        } else {
            mensagem = 'Seu site apresenta uma boa preocupação com acessibilidade.';
        }

        resultado.textContent = 'Você marcou ' + total + ' de 8 boas práticas.\n' + mensagem;
    });

    formulario.addEventListener('reset', function () {
        resultado.textContent = '';
    });
}
