let lastScrollTop = 0;
let navbar = document.querySelector("#navbar");
let isScrolling;
let scrolled = false;
if (!scrolled) {
    setTimeout(function() {
        closeNavbar();
    }, 1000);
}
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function() { // or window.addEventListener("scroll"....
    window.clearTimeout(isScrolling);

    // window.clearTimeout(scrolling);
    scrolled = true;
    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        // downscroll code
        closeNavbar();
    } else {
        // upscroll code
        openNavbar();

    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    isScrolling = setTimeout(function() {

        // scrolling = false;
    }, 1500)

}, false);



function closeNavbar() {
    if (!opened) {
        navbar.classList.add("navbar-animate");
    }
}

function openNavbar() {
    navbar.classList.remove("navbar-animate");
}
