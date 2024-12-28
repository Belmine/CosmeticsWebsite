let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
let hamburger_div = document.querySelector(".menu-icon");

hamburger_div.addEventListener("click", function() {
    // Sélectionne l'élément <i> à l'intérieur du div
    let icon = hamburger_div.querySelector("i:nth-child(5)"); 

    // Vérifie la classe actuelle de l'icône et la remplace par l'autre , c'est là que l'effet toogle est utilisé 
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

    toggleMenu();
});