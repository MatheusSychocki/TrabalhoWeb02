const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    fundo: getStyle(html, "--fundo"),
    claro: getStyle(html, "--claro"),
    fonte: getStyle(html, "--letras"),
    fontelb: getStyle(html, "--fontelb"),
    fonteCotacao: getStyle(html, "--fonte-cotacao"),
}

const darkMode = {
    fundo: "#333333",
    claro: "rgb(37, 34, 34)",
    fonte: "#fffdfd",
    fontelb: "#rgb(37, 34, 34)",
    fonteCotacao: "rgb(37, 34, 34)"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}


checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

function validar() {
    var nome = contato.nome.value;
    var email = contato.email.value;
    var numero = contato.numero.value;

        if (nome == "") {
        alert('Preencha o campo com seu nome');
        contato.nome.focus();
        return false;
        }

        if (email == "") {
        alert('Preencha o campo com seu e-mail');
        contato.email.focus();
        return false;
        }

        if (numero == "" || numero.lenght > 11) {
        alert('Insira um numero válido');
        contato.numero.focus();
        return false;
        }
}