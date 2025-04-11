document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function openTab(tabname) {
        // Remove "active-link" class from all tab links
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }

        // Remove "active-tab" class from all tab contents
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        // Add "active-link" class to clicked tab
        event.currentTarget.classList.add("active-link");

        // Show the selected tab content
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Attach event listeners to all tab links
    for (let tablink of tablinks) {
        tablink.addEventListener("click", function () {
            openTab(this.getAttribute("data-tab"));
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Aligns to the top of the section
                });
            }
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const mobileMenu = document.querySelector(".mobile-menu");
//     const navUl = document.querySelector("nav ul");

//     mobileMenu.addEventListener("click", function () {
//         navUl.classList.toggle("show");
//         mobileMenu.classList.toggle("active");
//     });

//     // Close menu when clicking a link (optional)
//     document.querySelectorAll("nav ul li a").forEach(link => {
//         link.addEventListener("click", () => {
//             navUl.classList.remove("show");
//             mobileMenu.classList.remove("active");
//         });
//     });
// });


function toggleNav() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
}