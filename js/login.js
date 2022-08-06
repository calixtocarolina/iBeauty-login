'use strict'

const loginContainer = document.getElementById('login-container')
 
const switchOverlay = () =>
    loginContainer.classList.toggle('switch')
 
document.getElementById('open-register').addEventListener('click', switchOverlay)
document.getElementById('open-login').addEventListener('click', switchOverlay)

document.getElementById('open-register-mobile').addEventListener('click', switchOverlay)
document.getElementById('open-login-mobile').addEventListener('click', switchOverlay)