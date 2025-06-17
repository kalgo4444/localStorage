document.addEventListener("DOMContentLoaded", () => {
    // header
    const loginButtonEl = document.querySelector("#loginButton")
    const registerButtonEl = document.querySelector("#registerButton")

    // loginModal
    const loginModalEl = document.querySelector("#loginModal")
    const userEmailLogEl = document.querySelector("#userEmailLog")
    const userPasswordLogEl = document.querySelector("#userPasswordLog")
    const forResEl = document.querySelector("#forRes")
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


    // form button preventDefault
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


    // take a value input register and set to storage
    registerBtnEl.addEventListener("click", () => {
        const userName = userNameEl.value
        const userEmail = userEmailEl.value
        const userPasswd = userPasswordEl.value
        if (!userName.trim()) return null
        if (!userEmail.trim()) return null
        if (!userPasswd.trim()) return null
        localStorage.setItem("name", userNameEl.value.toString())
        localStorage.setItem("email", userEmailEl.value.toString())
        localStorage.setItem("password", userPasswordEl.value.toString())
        const text = document.createElement("h1")
        text.textContent = `Hello ${userName}`
        text.className = "text-center text-2xl mt-10"
        document.body.appendChild(text)
        registerModalEl.classList.add("hidden")
    })

    // take a value input login and much them
    loginBtnEl.addEventListener("click", () => {
        const userEmail = userEmailLogEl.value
        const userPassword = userPasswordLogEl.value
        const userRegEmail = localStorage.getItem("email")
        const userRagPasswd = localStorage.getItem("password")
        if (!userEmail.trim()) return null
        if (!userPassword.trim()) return null
        if (userEmail === userRegEmail && userPassword) {
            forResEl.textContent = "You are log-in"
            setTimeout(() => {
                loginModalEl.classList.add("hidden")
            }, 1000)
        } else {
            forResEl.textContent = "Email or Password is mistake"
            setTimeout(() => {
                forResEl.textContent = ""
            }, 3000)
        }
        userEmailLogEl.value = ""
        userPasswordLogEl.value = ""
    })

})