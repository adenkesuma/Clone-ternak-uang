let popupInsight = document.querySelector(".pop-up__insight");
let popupAcademy = document.querySelector(".pop-up__academy");
let faqOption = document.querySelectorAll(".faq-option");

const whenMouseOverI = () => {
    popupInsight.style.display = "block";
}

const whenMouseOutI = () => {
    popupInsight.style.display = "none";
}

const whenMouseOverA = () => {
    popupAcademy.style.display = "block";
}

const whenMouseOutA = () => {
    popupAcademy.style.display = "none";
}

faqOption.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
    })
})
