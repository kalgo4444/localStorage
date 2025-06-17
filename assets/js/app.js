addEventListener("DOMContentLoaded", () => {
    // header
    const loginButtonEl = document.querySelector("#loginButton")
    const registerButtonEl = document.querySelector("#registerButton")

    // loginModal
    const loginModalEl = document.querySelector("#loginModal")
    const userEmailLogEl = document.querySelector("#userEmailLog")
    const userPasswordLogEl = document.querySelector("#userPasswordLog")
    //button
    const loginBtnEl = document.querySelector("#loginBtn")
    const cancerBtnLogEl = document.querySelector("#cancerBtnLog")


    // registerModal
    const registerModalEl = document.querySelector("#registerModal")
    const userNameEl = document.querySelector("#userName")
    const userEmailEl = document.querySelector("#userEmail")
    const userPasswordEl = document.querySelector("#userPassword")
    // button
    const registerBtnEl = document.querySelector("#registerBtn")
    const cancerBtnRegEl = document.querySelector("#cancerBtnReg")

    //form button preventDefault
    loginBtnEl.addEventListener("click", (e) => {
        e.preventDefault()
    })
    registerBtnEl.addEventListener("click", (e) => {
        e.preventDefault()
    })

    //open modal
    //login
    loginButtonEl.addEventListener("click", () => {
        loginModalEl.classList.toggle("hidden")
        if (!registerModalEl.classList.contains("hidden")) {
            registerModalEl.classList.add("hidden")
        }
    })
    cancerBtnLogEl.addEventListener("click", () => {
        loginModalEl.classList.add("hidden")
    })

    //register
    registerButtonEl.addEventListener("click", () => {
        registerModalEl.classList.toggle("hidden")
        if (!loginModalEl.classList.contains("hidden")) {
            loginModalEl.classList.add("hidden")
        }
    })
    cancerBtnRegEl.addEventListener("click", () => {
        registerModalEl.classList.add("hidden")
    })
})