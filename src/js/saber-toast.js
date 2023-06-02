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
        this.iconBackground = "rgba(249, 102, 102, 0.15)"
        this.fire(params)
    }
    warn(params) {
        this.color = "#BF9725"
        this.icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><path id="Danger" d="M14.477,4.442l7.269,12.615a2.926,2.926,0,0,1,.25,1,2.76,2.76,0,0,1-.73,2.021,2.837,2.837,0,0,1-1.95.92H4.679a3.146,3.146,0,0,1-.91-.2,2.8,2.8,0,0,1-1.56-3.655L9.528,4.433a2.729,2.729,0,0,1,1.1-1.08A2.851,2.851,0,0,1,14.477,4.442Zm-1.61,8.314a.875.875,0,0,1-1.75,0v-2.8A.875.875,0,0,1,12,9.09a.866.866,0,0,1,.87.862ZM12,17.018a.873.873,0,1,1,0-1.745.867.867,0,0,1,.87.862A.878.878,0,0,1,12,17.018Z" transform="translate(-2 -3)" fill="#bf9725" fill-rule="evenodd"/></svg>`
        this.iconBackground = "rgba(191, 151, 37, 0.15)"
        this.fire(params)
    }
    info(params) {
        this.color = "#5953FF"
        this.icon = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><path id="Icon_ionic-ios-information-circle" data-name="Icon ionic-ios-information-circle" d="M14.875,3.375a11.5,11.5,0,1,0,11.5,11.5A11.5,11.5,0,0,0,14.875,3.375Zm1.05,16.808H13.813V12.216h2.112Zm-1.056-8.835a1.1,1.1,0,1,1,1.144-1.106A1.108,1.108,0,0,1,14.869,11.348Z" transform="translate(-3.375 -3.375)" fill="#5953ff"/></svg>`
        this.iconBackground = "rgba(89, 83, 255, 0.15)"
        this.fire(params)
    }
    fire(params) {
        const DEFAULT_RTL = document.querySelector('html').getAttribute('dir')?.toLowerCase() === 'rtl';
        const { title, text, delay, duration, rtl, position } = { title: "", text: "", delay: 200, duration: 2600, rtl: DEFAULT_RTL, position: "bottom-right", ...params }
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
