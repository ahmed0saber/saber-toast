const initSaberToast = () => {
    const bottomRightContainer = document.createElement('div')
    bottomRightContainer.classList.add('saber-toasts-container-bottom-right')
    bottomRightContainer.classList.add('saber-toasts-containers')
    document.body.append(bottomRightContainer)

    const topRightContainer = document.createElement('div')
    topRightContainer.classList.add('saber-toasts-container-top-right')
    topRightContainer.classList.add('saber-toasts-containers')
    document.body.append(topRightContainer)

    const bottomLeftContainer = document.createElement('div')
    bottomLeftContainer.classList.add('saber-toasts-container-bottom-left')
    bottomLeftContainer.classList.add('saber-toasts-containers')
    document.body.append(bottomLeftContainer)

    const topLeftContainer = document.createElement('div')
    topLeftContainer.classList.add('saber-toasts-container-top-left')
    topLeftContainer.classList.add('saber-toasts-containers')
    document.body.append(topLeftContainer)
}
initSaberToast()

class SaberToast {
    constructor() {
        this.color = ""
        this.icon = ""
        this.iconBackground = ""
    }
    success(params) {
        this.color = "#52BF5A"
        this.icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>`
        this.iconBackground = "rgba(82, 191, 90, 0.15)"
        this.fire(params)
    }
    error(params) {
        this.color = "#F96666"
        this.icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg>`
        this.iconBackground = "rgb(249, 102, 102, 0.15)"
        this.fire(params)
    }
    fire(params) {
        const { title, text, delay, duration, rtl, position } = { title: "", text: "", delay: 200, duration: 2600, rtl: false, position: "bottom-right", ...params }
        const div = document.createElement('div')
        div.classList.add('saber-toast')
        div.style.textAlign = rtl ? "right" : "left"
        div.innerHTML = `
            <span class="right-border" style="background-color:${this.color}"></span>
            <div class="state-icon-holder">
                <span class="state-icon" style="color:${this.color};background-color:${this.iconBackground}">
                    ${this.icon}
                </span>
            </div>
            <div class="text-container">
                <p class="title" style="color:${this.color}">
                    ${title}
                </p>
                <p class="text">
                    ${text}
                </p>
            </div>
            <div class="close-icon-holder">
                <span class="close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </span>
            </div>
        `

        let isRight
        switch (position) {
            case "bottom-right":
                document.querySelector('.saber-toasts-container-bottom-right').append(div)
                isRight = true
                break
            case "top-right":
                document.querySelector('.saber-toasts-container-top-right').append(div)
                isRight = true
                break
            case "bottom-left":
                document.querySelector('.saber-toasts-container-bottom-left').append(div)
                isRight = false
                break
            case "top-left":
                document.querySelector('.saber-toasts-container-top-left').append(div)
                isRight = false
                break
            default:
                document.querySelector('.saber-toasts-container-bottom-right').append(div)
                isRight = true
        }

        if (isRight) {
            div.style.right = "-320px"
        } else {
            div.style.left = "-320px"
        }

        div.style.transitionDuration = `${delay}ms`
        setTimeout(() => {
            if (isRight) {
                div.style.right = "0px"
            } else {
                div.style.left = "0px"
            }
        }, 10)

        let mySecondTimeout = setTimeout(() => {
            div.style.transitionDuration = `${delay}ms`
            if (isRight) {
                div.style.right = "-320px"
            } else {
                div.style.left = "-320px"
            }
        }, delay + duration)
        let myThirdTimeout = setTimeout(() => {
            div.remove()
        }, 2 * delay + duration)

        div.addEventListener("mouseover", () => {
            clearTimeout(mySecondTimeout)
            clearTimeout(myThirdTimeout)
        })
        div.addEventListener("mouseout", () => {
            mySecondTimeout = setTimeout(() => {
                div.style.transitionDuration = `${delay}ms`
                if (isRight) {
                    div.style.right = "-320px"
                } else {
                    div.style.left = "-320px"
                }
            }, delay + duration)
            myThirdTimeout = setTimeout(() => {
                div.remove()
            }, 2 * delay + duration)
        })

        div.querySelector(".close-icon").addEventListener("click", () => {
            div.style.transitionDuration = `${delay}ms`
            setTimeout(() => {
                if (isRight) {
                    div.style.right = "-320px"
                } else {
                    div.style.left = "-320px"
                }
                setTimeout(() => {
                    div.remove()
                }, delay)
            }, 10)
        })
    }
}

const saberToast = new SaberToast()