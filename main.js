window.addEventListener('scroll', function() {
    let navbar = document.getElementById("navbar");
    let windowThreshold = window.scrollY > 0;

    navbar.classList.toggle('navbar-sticky', windowThreshold);
})

// window.onscroll = function() { myFunction() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("navbar-sticky")
//     } else {
//         navbar.classList.remove("navbar-sticky");
//     }
// }