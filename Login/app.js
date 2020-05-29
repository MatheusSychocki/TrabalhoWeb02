const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    fundo: getStyle(html, "--corfundo"),
    claro: getStyle(html, "--lightmode"),
    fonte: getStyle(html, "--letras"),
}

const darkMode = {
    fundo: "#333333",
    claro: "rgb(37, 34, 34)",
    fonte: "#fffdfd"
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