// scroll
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.top-header .menu-column .menubar li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.top-header .menu-column .menubar li a[href="#' + id + '"]').classList.add('active');
            });  
        }
    });
};

// auto text js code
let typed = new Typed (".auto_type", {
    strings: ["web designer", "web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop : true
});
// scroll top button
// Function to scroll to the top smoothly
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// Function to handle scroll event
const scrollFunction = () => {
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
// Event listener for scroll event
window.addEventListener('scroll', scrollFunction);

//scroll button end
document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("content1").classList.remove("hidden");
    document.getElementById("content2").classList.add("hidden");
  });
  
  document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("content1").classList.add("hidden");
    document.getElementById("content2").classList.remove("hidden");
});
// mobile menu
    let toggle_btn = document.querySelector('.toggle-btn');
    let close_btn = document.querySelector('.close-btn');
    let menu_bar = document.querySelector('.menubar');
    let items = document.querySelectorAll('.item');

    toggle_btn.addEventListener('click', function(){
    toggle_btn.classList.remove('active');
    menu_bar.classList.add('active');
    });

    close_btn.addEventListener('click', function () {
    toggle_btn.classList.add('active');
    menu_bar.classList.remove('active');
    });

    // Adding click event listener to each item
    items.forEach(function(item) {
        item.addEventListener('click', function () {
            menu_bar.classList.remove('active');
            toggle_btn.classList.add('active');
        });
    });
