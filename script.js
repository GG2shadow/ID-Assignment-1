/* Transparent Header turns White Background with Black Text on Scroll */
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    document.querySelector(".current-page").style.color = "#CEAB5C";
})

/* Back To Top Button */
function scrollToTop() {
    window.scrollTo(0,0);
}

/* Windows Pop-up that Informs User of a Successful Ticket Submission */
function successfulFormSubmission() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    var date = new Date();
    /* Gets today's date, ticket number is randomly generated */
    alert("Form submitted successfully on " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear() + ".\r\nYour support ticket number is #" + (Math.floor(Math.random() * 100000) + 1) + ".\r\nOur support team will reach out to you within 3 business days.\r\nThank you!");
}

/* Vote for EDG, change figures for EDG */
function changeEDG() {
    /* Changes voting bar */
    document.querySelector("div.vs-left").style.width = "60%";
    document.querySelector("div.vs-right").style.width = "40%";
    /* Changes figures */
    document.querySelector("p.cheer-team-left").innerHTML = "60%<br>(658)";
    document.querySelector("p.cheer-team-right").innerHTML = "40%<br>(985)";
}

/* Vote for DK, change figures for DK */
function changeDK() {
    /* Changes voting bar */
    document.querySelector("div.vs-left").style.width = "30%";
    document.querySelector("div.vs-right").style.width = "70%";
    /* Changes figures */
    document.querySelector("p.cheer-team-left").innerHTML = "30%<br>(657)";
    document.querySelector("p.cheer-team-right").innerHTML = "70%<br>(986)";
}