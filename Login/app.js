const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    corfundo: getStyle(html, "--corfundo"),
    lightmode: getStyle(html, "--lightmode"),
    letras: getStyle(html, "--letras"),
}

const darkMode = {
    corfundo: "#333333",
    lightmode: "rgb(37, 34, 34)",
    letras: "#fffdfd"
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