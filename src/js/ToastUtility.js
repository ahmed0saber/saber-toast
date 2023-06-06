const ToastUtility = (function () {
    const toastTypes = ["success", "error", "warn", "info"];

    function getIcon(color = "") {
        const SUCCESS_ICON =
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>`;

        const ERROR_ICON =
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>`;

        const WARN_ICON =
            `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                <path id="Danger" d="M14.477,4.442l7.269,12.615a2.926,2.926,0,0,1,.25,1,2.76,2.76,0,0,1-.73,2.021,2.837,2.837,0,0,1-1.95.92H4.679a3.146,3.146,0,0,1-.91-.2,2.8,2.8,0,0,1-1.56-3.655L9.528,4.433a2.729,2.729,0,0,1,1.1-1.08A2.851,2.851,0,0,1,14.477,4.442Zm-1.61,8.314a.875.875,0,0,1-1.75,0v-2.8A.875.875,0,0,1,12,9.09a.866.866,0,0,1,.87.862ZM12,17.018a.873.873,0,1,1,0-1.745.867.867,0,0,1,.87.862A.878.878,0,0,1,12,17.018Z" transform="translate(-2 -3)" fill="${color}" fill-rule="evenodd"/>
            </svg>`;

        const INFO_ICON =
            `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                <path id="Icon_ionic-ios-information-circle" data-name="Icon ionic-ios-information-circle" d="M14.875,3.375a11.5,11.5,0,1,0,11.5,11.5A11.5,11.5,0,0,0,14.875,3.375Zm1.05,16.808H13.813V12.216h2.112Zm-1.056-8.835a1.1,1.1,0,1,1,1.144-1.106A1.108,1.108,0,0,1,14.869,11.348Z" transform="translate(-3.375 -3.375)" fill="${color}"/>
            </svg>`;

        return {
            success: SUCCESS_ICON,
            error: ERROR_ICON,
            warn: WARN_ICON,
            info: INFO_ICON
        };
    }


    function getToastProperties(toastType = "success") {
        if (toastTypes.indexOf(toastType) === -1) {
            throw new Error("Please, Enter a valid toast type. It must be one of these: (success, error, warn, info)");
        }

        let iconSVG = ``;

        const iconBgRoot = getComputedStyle(document.body).getPropertyValue(`--icon-${toastType}-bg`);
        
        const colorRootValue = getComputedStyle(document.body).getPropertyValue(`--${toastType}-clr`);

        if (toastType === "success") {
            iconSVG = getIcon(colorRootValue).success;
        } else if (toastType === "error") {
            iconSVG = getIcon(colorRootValue).error;
        } else if (toastType === "warn") {
            iconSVG = getIcon(colorRootValue).warn;
        } else if (toastType === "info") {
            iconSVG = getIcon(colorRootValue).info;
        }

        return {
            color: colorRootValue,
            icon: iconSVG,
            iconBackground: iconBgRoot
        };
    }

    return {
        getProps: getToastProperties
    };
})();

export default ToastUtility;