import SaberToast from "../src/js/saber-toast.js";

document.querySelector(".success-btn").addEventListener('click', () => {
    new SaberToast().success({
        title: "تمت العملية بنجاح",
        text: "تم اضافة المنتج الى السلة",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "top-left"
    });
});

document.querySelector(".error-btn").addEventListener('click', () => {
    new SaberToast().error({
        title: "حدث خطأ ما",
        text: "يرجى المحاولة مرة اخرى",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    });
});

document.querySelector(".warn-btn").addEventListener('click', () => {
    new SaberToast().warn({
        title: "حدث خطأ ما",
        text: "يرجى المحاولة مرة اخرى",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    });
});

document.querySelector(".info-btn").addEventListener('click', () => {
    new SaberToast().info({
        title: "حدث خطأ ما",
        text: "يرجى المحاولة مرة اخرى",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    });
});