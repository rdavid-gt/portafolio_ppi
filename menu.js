document.addEventListener("DOMContentLoaded", function () {

    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        });

});

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}
        
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    if (sidebar &&
        sidebar.classList.contains("active") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
        ){
            sidebar.classList.remove("active");
        }
});