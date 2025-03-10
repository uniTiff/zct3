document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    let menuOpen = false;

    const mailSubmit = document.querySelector("#form-submit")
    

    
    mailSubmit.addEventListener("click", async () => {
        let mail = document.querySelector("#email").value
        let message = document.querySelector("#message").value
        alert("TEMPORARILY DISABLED, PLEASE MAIL info@zct3.eu")
    })

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            nav.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            nav.classList.remove('active');
            menuOpen = false;
        }
    });


});
