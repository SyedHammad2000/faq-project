const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach((toggles) => {
    toggles.addEventListener("click", () => {
        toggles.parentNode.classList.toggle("active");
    });
})