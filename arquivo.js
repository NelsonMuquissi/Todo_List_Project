console.log("Hello world")

const form = document.querySelectorById('form')

form.onsubmit = function (event){
    event.preventDefault()
}

form.style.background = 'black'