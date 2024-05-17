var objToday = new Date(),
    weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();
var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + " " + curYear;
document.getElementById("textL").innerHTML = today;


const logo = document.querySelector(".logoH"),
    fov = document.querySelector(".fov"),
    fov2 = document.querySelector(".fov2"),
    titleU = document.querySelectorAll(".upTitle");

const navBar = document.querySelector(".rootNB"),
    navBar2 = document.querySelector(".rootNB2"),
    menu = document.querySelectorAll(".end"),
    menu2 = document.querySelector(".saerchIconA"),
    dropdown1 = document.querySelector(".sb1"),
    subO1 = document.querySelector(".subO1"),
    dropdown2 = document.querySelector(".sb2"),
    subO2 = document.querySelector(".subO2"),
    dropdown3 = document.querySelector(".sb3"),
    subO3 = document.querySelector(".subO3"),
    dropdown4 = document.querySelector(".sb4"),
    subO4 = document.querySelector(".subO4"),
    dropdown5 = document.querySelector(".sb5"),
    subO5 = document.querySelector(".subO5"),
    dropdown6 = document.querySelector(".sb6"),
    subO6 = document.querySelector(".subO6"),
    dropdown7 = document.querySelector(".sb7"),
    subO7 = document.querySelector(".subO7"),
    searchIcon = document.querySelector(".saerchIcon"),
    search = document.querySelector(".flOpenSB");


menu.forEach(menu => {
    menu.addEventListener("click", () => {
        navBar.classList.toggle("open");
        logo.style.display = "block";
        if(document.querySelector(".fov2.open") === null){
            fov.classList.toggle("open");
        }
    });
});

menu2.addEventListener("click", () =>{
    navBar2.classList.toggle("open");
    logo.style.display = "block";
    if(document.querySelector(".fov2.open") === null){
        fov.classList.toggle("open");
    }
})

dropdown1.addEventListener("click",() => {
    subO1.classList.toggle("open");
});

dropdown2.addEventListener("click",() => {
    subO2.classList.toggle("open");
});

dropdown3.addEventListener("click",() => {
    subO3.classList.toggle("open");
});

dropdown4.addEventListener("click",() => {
    subO4.classList.toggle("open");
});

dropdown5.addEventListener("click",() => {
    subO5.classList.toggle("open");
});

dropdown6.addEventListener("click",() => {
    subO6.classList.toggle("open");
});

dropdown7.addEventListener("click",() => {
    subO7.classList.toggle("open");
});

searchIcon.addEventListener("click", () => {
    search.classList.toggle("open");
    logo.style.display = "block";
    if(document.querySelector(".fov.open") === null){
        fov2.classList.toggle("open");
    }
});

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const scrollPositionX = document.documentElement.clientWidth;
    if(scrollPosition >63 || scrollPositionX <=1079){
        logo.style.display = "block";
        titleU.forEach(titleU => {
            titleU.style.boxShadow = "0 1px 8px 0 rgba(0,0,0,0.35)";
        });
    }else if(!fov2.classList.contains("open") && !fov2.classList.contains("open") && 0<=scrollPosition<=63){
        logo.style.display = "none";
        titleU.forEach(titleU => {
            titleU.style.boxShadow = "0 0 0 0 white";
        });
    }
});


const openPV = document.querySelector(".buttonOOTHERPV"),
    openPVTB = document.querySelector(".openPVFB");

openPV.addEventListener("click", () => {
    openPVTB.classList.toggle("open");
    openPV.classList.toggle("open");
});


const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".buttonA");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction= button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider);