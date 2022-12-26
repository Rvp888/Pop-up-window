
const googleAccount = document.querySelector(".google-account");
const profileImgPopUp = document.querySelector(".profile-img-popUp");


document.addEventListener("click", (e) => {

    if (e.target.classList.contains("profile-img")){
        profileImgPopUp.style.display = "flex";
        googleAccount.style.display = "none";
    }else {
        profileImgPopUp.style.display = "none";
    }

})