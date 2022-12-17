document.querySelector(".success-btn").addEventListener('click', () => {
    saberToast.success({
        title: "تمت العملية بنجاح",
        text: "تم اضافة المنتج الى السلة",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "top-left"
    })
})

document.querySelector(".error-btn").addEventListener('click', () => {
    saberToast.error({
        title: "حدث خطأ ما",
        text: "يرجى المحاولة مرة اخرى",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    })
})