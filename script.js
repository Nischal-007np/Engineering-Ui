// document.addEventListener("DOMContentLoaded", () => {
//     const hamburger = document.getElementById("hamburger");
//     const navLists = document.getElementById("nav-lists");

//     hamburger.addEventListener("click", () => {
//         navLists.classList.toggle("active");
//     });
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute("href")).scrollIntoView({
//                 behavior: "smooth",
//             });
//         });
//     });

    
//     const contactForm = document.getElementById("contactForm");
//     contactForm.addEventListener("submit", (e) => {
//         e.preventDefault();

    
//         const formData = new FormData(contactForm);
//         const name = formData.get("name");
//         const email = formData.get("email");
//         const message = formData.get("message");

       
//         setTimeout(() => {
//             showToast("Message sent successfully!");
//             contactForm.reset();
//         }, 1000);
//     });

   
//     function showToast(message) {
//         const toast = document.getElementById("toast");
//         const toastMessage = document.getElementById("toastMessage");
//         toastMessage.textContent = message;
//         toast.style.display = "block";
//         setTimeout(() => {
//             toast.style.display = "none";
//         }, 3000);
//     }

    
//     const ScrollRevealInstance = ScrollReveal();
//     ScrollRevealInstance.reveal(".fade-in", {
//         delay: 200,
//         distance: "50px",
//         origin: "bottom",
//         duration: 1000,
//         easing: "ease-out",
//         interval: 200,
//     });

   
//     document.querySelectorAll("section").forEach((section) => {
//         section.classList.add("fade-in");
//     });

//     document.querySelectorAll(".service-card").forEach((card) => {
//         card.classList.add("slide-in");
//     });
// });