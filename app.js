const form = document.getElementById("contact-form");
console.log(form);

const email = document.getElementById("email");
email.value = "ilovegoats@example.com";

const thankYouDiv = document.getElementById("thank-you");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    
    thankYouDiv.classList.remove("hide");

    form.classList.add("hide");
});