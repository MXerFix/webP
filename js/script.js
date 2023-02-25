gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".scroll-down-window", { opacity: 0.7 }, { opacity: 0, scrollTrigger: { scrub: true, start: "top", end: "10%" } })

gsap.to(".title", {
    x: -1000,
    scale: 0.5,
    scrollTrigger: {
        scrub: true,
    }
})

gsap.from(".steps-list", {
    x: -200,
    scrollTrigger: {
        scrub: true,
    }
})

gsap.from(".step-icons-box", {
    x: 100,
    scrollTrigger: {
        scrub: true,
    }
})

gsap.to("#title-back", {
    x: 200,
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        scrub: true,
    }
})

// gsap.fromTo(".catalog", { opacity: 0 }, { opacity: 1, scrollTrigger: { scrub: true, trigger: "#what-develop", start: "center 75%", end: "top" } })

var tl_1 = gsap.timeline();
var tl = gsap.timeline();

tl.from("#title-back", { x: -200, duration: 2, opacity: 0, scale: 0.8 })

tl_1.from(".title img", { delay: 0.5, duration: 3, scale: 1, opacity: 0, ease: "power1" });
tl_1.from(".scroll-down-window", { opacity: 0, duration: 1, ease: "sine.out" })

gsap.to(".typing-title", { delay: 1, duration: 5, text: { value: "Самое главное в бизнесе - сконцентрироваться <br> на создании чего-то важного." }, ease: "none" })


// const Cards = ((() => {
//     window.addEventListener('DOMContentLoaded', () => { setTimeout(init, 1) }, true);

//     function init(e) {
//         if (document.querySelector(".cards")) {
//             let cards = document.querySelector(".cards");
//             cards.addEventListener('click', clicked, false);
//             document.querySelectorAll(".cards .card")[1].click();
//         }
//     }

//     function clicked(e) {
//         let card = e.target;
//         if (card.getAttribute("data-card")) { rearrange(card.getAttribute("data-card")); }
//     }

//     let buttonLeft = document.getElementById("arrow-left");
//     buttonLeft.addEventListener("click", function () {
//         let thatCard = document.querySelector(".card--center");
//         let x = (thatCard.getAttribute("data-card")) - (-1);
//         if (x > 3) { x = 0 };
//         console.log(x)
//         rearrange(x);
//     })
//     let buttonRight = document.getElementById("arrow-right");
//     buttonRight.addEventListener("click", function () {
//         let thatCard = document.querySelector(".card--center");
//         let y = (thatCard.getAttribute("data-card")) - 1;
//         if (y < 0) { y = 3 };
//         console.log(y)
//         rearrange(y);
//     })

//     function rearrange(card) {
//         let cards = document.querySelectorAll(".cards .card");
//         for (let n = 0; n < cards.length; n++) {
//             cards[n].classList.remove("card--left");
//             cards[n].classList.remove("card--center");
//             cards[n].classList.remove("card--right");
//         }
//         cards[card].classList.add("card--center");
//         if (card == 0) {
//             cards[2].classList.add("unvisible");
//             cards[1].classList.remove("unvisible");
//             cards[3].classList.remove("unvisible");
//             cards[3].classList.add("card--left")
//             cards[1].classList.add("card--right");
//         }
//         if (card == 1) {
//             cards[3].classList.add("unvisible");
//             cards[0].classList.remove("unvisible");
//             cards[2].classList.remove("unvisible");
//             cards[0].classList.add("card--left");
//             cards[2].classList.add("card--right");
//         }
//         if (card == 2) {
//             cards[0].classList.add("unvisible");
//             cards[1].classList.remove("unvisible");
//             cards[3].classList.remove("unvisible");
//             cards[1].classList.add("card--left");
//             cards[3].classList.add("card--right");
//         }
//         if (card == 3) {
//             cards[1].classList.add("unvisible");
//             cards[2].classList.remove("unvisible");
//             cards[0].classList.remove("unvisible");
//             cards[2].classList.add("card--left");
//             cards[0].classList.add("card--right");
//         }
//     }

//     return {
//         init
//     }
// })());

const steps = ((() => {
    window.addEventListener('DOMContentLoaded', () => { setTimeout(initial, 1) }, true);

    function initial(e) {
        if (document.querySelector(".steps-list")) {
            let steps = document.querySelector(".steps-list");
            steps.addEventListener('mouseover', clicked, false);
            document.querySelectorAll(".step-item")[0].click();
        }
    }

    function clicked(e) {
        let step = e.target;
        if (step.getAttribute("data-step")) { rearrange(step.getAttribute("data-step")); }
    }



    function rearrange(step) {
        let steps = document.querySelectorAll(".step-icon");
        for (let n = 0; n < steps.length; n++) {
            steps[n].classList.remove("step-down");
            steps[n].classList.remove("step-center");
            steps[n].classList.remove("step-up");
        }
        steps[step].classList.add("step-center");
        if (step == 0) {
            steps[3].classList.add("unvisible");
            steps[4].classList.add("unvisible");
            steps[2].classList.add("unvisible");
            steps[0].classList.remove("unvisible");
            steps[1].classList.remove("unvisible");
            steps[5].classList.remove("unvisible");
            steps[5].classList.add("step-up");
            steps[1].classList.add("step-down");
        }
        if (step == 1) {
            steps[3].classList.add("unvisible");
            steps[4].classList.add("unvisible");
            steps[5].classList.add("unvisible");
            steps[1].classList.remove("unvisible");
            steps[0].classList.remove("unvisible");
            steps[2].classList.remove("unvisible");
            steps[0].classList.add("step-up");
            steps[2].classList.add("step-down");
        }
        if (step == 2) {

            steps[0].classList.add("unvisible");
            steps[4].classList.add("unvisible");
            steps[5].classList.add("unvisible");
            steps[2].classList.remove("unvisible");
            steps[1].classList.remove("unvisible");
            steps[3].classList.remove("unvisible");
            steps[1].classList.add("step-up");
            steps[3].classList.add("step-down");
        }
        if (step == 3) {
            steps[1].classList.add("unvisible");
            steps[0].classList.add("unvisible");
            steps[5].classList.add("unvisible");
            steps[3].classList.remove("unvisible");
            steps[2].classList.remove("unvisible");
            steps[4].classList.remove("unvisible");
            steps[2].classList.add("step-up");
            steps[4].classList.add("step-down");
        }
        if (step == 4) {
            steps[0].classList.add("unvisible");
            steps[1].classList.add("unvisible");
            steps[2].classList.add("unvisible");
            steps[4].classList.remove("unvisible");
            steps[3].classList.remove("unvisible");
            steps[5].classList.remove("unvisible");
            steps[3].classList.add("step-up");
            steps[5].classList.add("step-down");
        }
        if (step == 5) {
            steps[2].classList.add("unvisible");
            steps[3].classList.add("unvisible");
            steps[1].classList.add("unvisible");
            steps[5].classList.remove("unvisible");
            steps[4].classList.remove("unvisible");
            steps[0].classList.remove("unvisible");
            steps[4].classList.add("step-up");
            steps[0].classList.add("step-down");
        }
    }

    return {
        initial
    }
})());


// const closeBtn = document.getElementById("close-btn-header");
// closeBtn.addEventListener("click", function () {
//     let navMenu = document.getElementsByClassName("nav-list-item");
//     for (navMenuItem of navMenu) {
//         navMenuItem.classList.toggle("nav-close")
//     }
//     let homeIcon = document.querySelector(".burger-home-img");
//     homeIcon.classList.toggle("rotate1");
// });

const closeAnimBtn = document.getElementById("close-btn");
closeAnimBtn.addEventListener("click", function () {
    let navMenu = document.getElementsByClassName("nav-list-item");
    for (navMenuItem of navMenu) {
        navMenuItem.classList.toggle("nav-close")
    }
    let homeIcon = document.querySelector(".burger-home-img");
    homeIcon.classList.toggle("rotate1");
    let spans = document.getElementsByClassName("btn-span");
    for (span of spans) {
        span.classList.toggle("active");
    }
});

const prouctCards = document.getElementsByClassName("products-item");
for (productCard of prouctCards) {
    productCard.addEventListener("click", function() {
        for (card of prouctCards) {
            card.classList.toggle("off")
        }
        inbox = this.querySelector("#outbox")
        if (inbox.classList.contains("inbox-on")) {
            setTimeout(function() {
                inbox.classList.remove("inbox-on")
            }, 300)
        }
        else {inbox.classList.add("inbox-on")}
        this.classList.remove("off");
        this.classList.toggle("on");
        inbox.querySelector(".product-descr-hidden").classList.toggle("product-descr-visible")
    })
}

const goHome = document.getElementById("go-home")
goHome.addEventListener("click", function(){
    window.document.getElementById("content").scrollIntoView();
})

// const toCUbtns = document.getElementsByClassName("to-cu-btn");
// for (toCUbtn of toCUbtns) {
//     toCUbtn.addEventListener("click", function(){

//     })
// }

// $(document).ready(function () {
//     $(".burger-btn-standart").click(function () {
//         $(this).find("span").toggleClass("active");
//     });
// });


const $header = $("#header-scrolled")
let prevScroll
let lastShowPos

$(window).on("scroll", function () {
    const scrolled = $(window).scrollTop()

    if (scrolled > 100 && scrolled > prevScroll) {
        $header.addClass("header-out")
        lastShowPos = scrolled
    } else if (scrolled <= Math.max(lastShowPos - 250, 0)) {
        $header.removeClass("header-out")
    }
    prevScroll = scrolled
});


