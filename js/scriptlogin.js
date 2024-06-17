
const inputs = document.querySelector(".username")
const passwordUser = document.querySelector(".password")
const model = document.querySelector(".modal")
const btn_script = document.querySelector(".btn-script-login")


function dataValidation() {
    const inputsValue = inputs.value
    const userValue = passwordUser.value

    if(inputsValue.length < 8 || userValue.length < 12) {
        model.style.display = 'inline'
        model.innerHTML = 'user name or password is wrong'
        model.style.backgroundColor = 'red'
    }else {
        model.style.display = 'inline'
        model.innerHTML = 'you log in'
        model.style.backgroundColor = 'green'
        window.location.href = 'index.html'
    }

    setTimeout(function() {
        model.style.display = 'none'
    },3000)
}


btn_script.addEventListener('click', dataValidation)

const user_span = document.querySelector(".span-user")
const pass_span = document.querySelector(".span-pass")

function UsertypeUser() {
    const uservaltype = inputs.value
    if(uservaltype.length < 8) {
        user_span.style.display = 'block'
        user_span.innerHTML = 'please more 8 world'
        user_span.style.color = 'red'
    }else {
        user_span.style.display = 'block'
        user_span.innerHTML = 'correct:)'
        user_span.style.color = 'green'

    }

    
}

inputs.addEventListener('keypress', UsertypeUser)

function UsertypePass() {
    const userpasstype = passwordUser.value
    if(userpasstype.length < 12) {
        pass_span.style.display = 'block'
        pass_span.innerHTML = 'please more 12 world'
        pass_span.style.color = 'red'
    }else {
        pass_span.style.display = 'block'
        pass_span.innerHTML = 'correct:)'
        pass_span.style.color = 'green'
    }

}

passwordUser.addEventListener('keypress', UsertypePass)