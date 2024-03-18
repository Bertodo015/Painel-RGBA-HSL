//RGB
const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)

const directRed = $('#direct-red')
const directGreen = $('#direct-green')
const directBlue = $('#direct-blue')

//Para eliminar a seleção após recarregar a página
directRed.checked = false
directGreen.checked = false
directBlue.checked = false

const onChangeRangesRGBA = () => {
    const red = $('#red').value
    //const red = document.querySelector('#red').value        simplificado pelo $
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value

    $('#color-display-rgba').style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`

    directRed.checked = false
    directGreen.checked = false
    directBlue.checked = false
}

$all(
    '#color-controls-rgba input[type=range]'
).forEach((range) => range.oninput = onChangeRangesRGBA)
/**
    *$all > simplifica essa parte abaixo
    *$('#red').oninput = onChangeRangesRGBA   
    *$('#green').oninput = onChangeRangesRGBA
    *$('#blue').oninput = onChangeRangesRGBA
    *$('#alpha').oninput = onChangeRangesRGBA
*/

const changeByDirectColor = (color) => {
    $('#color-display-rgba').style.backgroundColor = color
    $('#red').value = 0
    $('#green').value = 0
    $('#blue').value = 0
    $('#alpha').value = 1
}

directRed.onclick = () => changeByDirectColor('rgb(255,0,0)')
directGreen.onclick = () => changeByDirectColor('rgb(0,255,0)')
directBlue.onclick = () => changeByDirectColor('rgb(0,0,255)')


//HSL (Hue, Saturation, Lightness)
//Tom, saturação e luminosidade
const directHSLRed = $('#direct-hsl-red')
const directHSLGreen = $('#direct-hsl-green')
const directHSLBlue = $('#direct-hsl-blue')

//eliminar a seleção ao atualizar a página
directHSLRed.checked = false
directHSLGreen.checked = false
directHSLBlue.checked = false

const onChangeRangesHSL = () => {
    const hue = $('#hue').value
    const saturation = $('#saturation').value
    const lightness = $('#lightness').value

    $('color-display-hsl').style.backgroundColor = `hsl(${hue}, ${saturation}, ${lightness})`

    directHSLRed.checked = false
    directHSLGreen.checked = false
    directHSLBlue.checked = false
}

$all(
    '#color-controls-hsl input[type=range]'
).forEach((range) => range.oninput = onChangeRangesHSL)

const changeByDirectColorHSL = (color) => {
    $('#color-display-hsl').style.backgroundColor = color
    $('#hue').value = 0
    $('#saturation').value = 100
    $('#lightness').value = 50
}

directHSLRed.onclick = () => changeByDirectColorHSL('hsl(0, 100%, 50%)')
directHSLGreen.onclick = () => changeByDirectColorHSL('hsl(120, 100%, 50%)')
directHSLBlue.onclick = () => changeByDirectColorHSL('hsl(240, 100%, 50%)')