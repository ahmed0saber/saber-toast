import SaberToastContainer from "./ToastContainer.js";

import ToastUtility from "./ToastUtility.js";

SaberToastContainer.createAll();

class SaberToast {
    constructor() {
        this.color = "";
        this.icon = "";
        this.iconBackground = "";
    }

    success(params) {
        const { color, icon, iconBackground } = ToastUtility.getProps("success");

        this.color = color;
        this.icon = icon;
        this.iconBackground = iconBackground;

        this.fire(params);
    }

    error(params) {
        const { color, icon, iconBackground } = ToastUtility.getProps("error");

        this.color = color;
        this.icon = icon;
        this.iconBackground = iconBackground;

        this.fire(params);
    }

    warn(params) {
        const { color, icon, iconBackground } = ToastUtility.getProps("warn");

        this.color = color;
        this.icon = icon;
        this.iconBackground = iconBackground;

        this.fire(params);
    }

    info(params) {
        const { color, icon, iconBackground } = ToastUtility.getProps("info");

        this.color = color;
        this.icon = icon;
        this.iconBackground = iconBackground;

        this.fire(params);
    }

    fire(params) {
        const DEFAULT_RTL = document.querySelector("html").getAttribute("dir")?.toLowerCase() === "rtl";

        const { title, text, delay, duration, rtl, position } = { title: "", text: "", delay: 200, duration: 2600, rtl: DEFAULT_RTL, position: "bottom-right", ...params };

        const div = document.createElement("div");

        div.classList.add("saber-toast");

        div.style.textAlign = rtl ? "right" : "left";

        div.innerHTML = `
            <span class="right-border" style="background-color:${this.color}"></span>

            <div class="state-icon-holder">
                <span class="state-icon" style="color:${this.color};background-color:${this.iconBackground}">
                    ${this.icon}
                </span>
            </div>
            
            <div class="text-container">
                <p class="title" style="color:${this.color}">${title}</p>

                <p class="text">${text}</p>
            </div>

            <div class="close-icon-holder">
                <span class="close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </span>
            </div>
        `;

        let isRight;

        switch (position) {
        case "bottom-right":
            document.querySelector(".saber-toasts-container-bottom-right").append(div);
            isRight = true;
            break;
        case "top-right":
            document.querySelector(".saber-toasts-container-top-right").append(div);
            isRight = true;
            break;
        case "bottom-left":
            document.querySelector(".saber-toasts-container-bottom-left").append(div);
            isRight = false;
            break;
        case "top-left":
            document.querySelector(".saber-toasts-container-top-left").append(div);
            isRight = false;
            break;
        default:
            document.querySelector(".saber-toasts-container-bottom-right").append(div);
            isRight = true;
        }

        if (isRight) {
            div.style.right = "-20rem";
        } else {
            div.style.left = "-20rem";
        }

        div.style.transitionDuration = `${delay}ms`;

        setTimeout(() => {
            if (isRight) {
                div.style.right = "0";
            } else {
                div.style.left = "0";
            }
        }, 10);

        let mySecondTimeout = setTimeout(() => {
            div.style.transitionDuration = `${delay}ms`;

            if (isRight) {
                div.style.right = "-20rem";
            } else {
                div.style.left = "-20rem";
            }
        }, delay + duration);

        let myThirdTimeout = setTimeout(() => div.remove(), 2 * delay + duration);

        div.addEventListener("mouseover", () => {
            clearTimeout(mySecondTimeout);
            clearTimeout(myThirdTimeout);
        });

        div.addEventListener("mouseout", () => {
            mySecondTimeout = setTimeout(() => {
                div.style.transitionDuration = `${delay}ms`;

                if (isRight) {
                    div.style.right = "-20rem";
                } else {
                    div.style.left = "-20rem";
                }
            }, delay + duration);

            myThirdTimeout = setTimeout(() => div.remove(), 2 * delay + duration);
        });

        div.querySelector(".close-icon").addEventListener("click", () => {
            div.style.transitionDuration = `${delay}ms`;

            setTimeout(() => {
                if (isRight) {
                    div.style.right = "-320px";
                } else {
                    div.style.left = "-320px";
                }

                setTimeout(() => div.remove(), delay);
            }, 10);
        });
    }
}

export default SaberToast;