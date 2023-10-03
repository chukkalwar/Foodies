
document.addEventListener("DOMContentLoaded", function () {
    // Active navbar
    let nav = document.querySelector(".navigation_wrap");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    }

    // Nav hide
    let navBar = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');

    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    })
});  


// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(range / duration)), // Corrected the calculation
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                console.log(`Current: ${current}, End: ${end}`);
                if (current == end) {
                    clearInterval(timer);
                    console.log("Counter finished.");
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7410, 3000);
});
