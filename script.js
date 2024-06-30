function add (valor) {
    document.getElementById('screen').value += valor
}

function delet () {
    document.getElementById('screen').value = ""
}

function calculate () {
    const screenValue = document.getElementById('screen').value
    const result = eval(screenValue)
    document.getElementById('screen').value = result
}