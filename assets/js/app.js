document.addEventListener("DOMContentLoaded", () => {
    // header buttons
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
    const regTextEL = document.querySelector("#regText")
    // button
    const registerBtnEl = document.querySelector("#registerBtn")
    const cancerBtnRegEl = document.querySelector("#cancerBtnReg")

    //cardWrapper
    const cardWrapperEl = document.querySelector("#cardWrapper")



    // form button no submit (refresh)
    loginBtnEl.addEventListener("click", (e) => {
        e.preventDefault()
    })
    registerBtnEl.addEventListener("click", (e) => {
        e.preventDefault()
    })


    //open modal login
    loginButtonEl.addEventListener("click", () => {
        loginModalEl.classList.toggle("hidden")
        if (!registerModalEl.classList.contains("hidden")) {
            registerModalEl.classList.add("hidden")
        }
    })
    //close
    cancerBtnLogEl.addEventListener("click", () => {
        loginModalEl.classList.add("hidden")
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            loginModalEl.classList.add("hidden")
        }
    })

    //open modal register 
    registerButtonEl.addEventListener("click", () => {
        registerModalEl.classList.toggle("hidden")
        if (!loginModalEl.classList.contains("hidden")) {
            loginModalEl.classList.add("hidden")
        }
    })
    //close
    cancerBtnRegEl.addEventListener("click", () => {
        registerModalEl.classList.add("hidden")
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            registerModalEl.classList.add("hidden")
        }
    })


    // take a value input register and set to storage
    registerBtnEl.addEventListener("click", () => {
        //input value
        const userName = userNameEl.value
        const userEmail = userEmailEl.value
        const userPasswd = userPasswordEl.value

        //clean value
        if (!userName.trim()) return null
        if (!userEmail.trim()) return null
        if (!userPasswd.trim()) return null

        //set
        localStorage.setItem("name", userNameEl.value.toString())
        localStorage.setItem("email", userEmailEl.value.toString())
        localStorage.setItem("password", userPasswordEl.value.toString())

        //result about register
        regTextEL.textContent = "You are registered"
        setTimeout(() => {
            registerModalEl.classList.add("hidden")
        }, 1000)
    })



    // take a value input login and much them
    loginBtnEl.addEventListener("click", () => {

        //input value
        const userEmail = userEmailLogEl.value
        const userPassword = userPasswordLogEl.value
        const userRegEmail = localStorage.getItem("email")
        const userRagPasswd = localStorage.getItem("password")

        //clean value
        if (!userEmail.trim()) return null
        if (!userPassword.trim()) return null

        //much value local and user input value
        if (userEmail === userRegEmail && userPassword === userRagPasswd) {
            forResEl.textContent = "You are log-in"
            setTimeout(() => {
                forResEl.textContent = ""
            }, 1000)

            // if true login in html cardWrapper inner content
            function bodyText() {
                loginModalEl.classList.add("hidden")
                cardWrapperEl.innerHTML = `
                <!-- card1  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

					<!-- card2  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

					<!-- card3  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

					<!-- card4  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

                    <!-- card5  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

					<!-- card6  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

					<!-- card7  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>

					<!-- card9  -->
					<div
						class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<div class="px-4 py-2">
							<h1
								class="text-xl font-bold text-gray-800 uppercase dark:text-white"
							>
								NIKE AIR
							</h1>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								quos quidem sequi illum facere recusandae voluptatibus
							</p>
						</div>

						<img
							class="object-cover w-full h-48 mt-2"
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
							alt="NIKE AIR"
						/>

						<div
							class="flex items-center justify-between px-4 py-2 bg-gray-900"
						>
							<h1 class="text-lg font-bold text-white">$129</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
							>
								Add to cart
							</button>
						</div>
					</div>
                `
            }
            setTimeout(bodyText, 1000)
        } else {
            forResEl.textContent = "Email or Password is mistake"
            setTimeout(() => {
                forResEl.textContent = ""
            }, 3000)
        }

        //clear input value
        userEmailLogEl.value = ""
        userPasswordLogEl.value = ""
    })
})