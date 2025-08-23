function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("open");
}

// Close menu when a nav link is clicked (mobile view)
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("open");
    });
});
