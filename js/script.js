
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".scroll-down-window", { opacity: 0.7 }, { opacity: 0, scrollTrigger: { scrub: true, start: "top", end: "10%" } })

gsap.to(".title", {
    x: -1000,
    scale: 0.5,
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

gsap.to("#ellipse1", {
    x: 400,
    scale: 0.2,
    opacity: 0,
    scrollTrigger: {
        scrub: true,
    }
})

gsap.to("#ellipse2", {
    y: -1000,
    scale: 0.2,
    opacity: 0,
    scrollTrigger: {
        scrub: true,
    }
})

gsap.to("#ellipse3", {
    x: -400,
    scale: 0.2,
    opacity: 0,
    scrollTrigger: {
        scrub: true,
        duration: 3,
    }
})

var widthWind = document.querySelector('body').offsetWidth;

// gsap.fromTo(".catalog", { opacity: 0 }, { opacity: 1, scrollTrigger: { scrub: true, trigger: "#what-develop", start: "center 75%", end: "top" } })

var tl_1 = gsap.timeline();
var tl = gsap.timeline();
var tl1 = gsap.timeline();
var tl2 = gsap.timeline();


tl.from("#title-back", { x: -200, duration: 2, opacity: 0, scale: 0.8 })
tl.from("#ellipse1", { duration: 2, delay: 2, x: -100, opacity: 0, scale: 0 })
tl1.from("#ellipse2", { duration: 2, delay: 4, x: 100, opacity: 0, scale: 0 })
tl2.from("#ellipse3", { duration: 2, delay: 4, x: -100, y: 100, opacity: 0, scale: 0 })


tl_1.from(".title img", { delay: 0.5, duration: 3, scale: 1, opacity: 0, ease: "power1" });
tl_1.from(".scroll-down-window", { opacity: 0, duration: 1, ease: "sine.out" })

gsap.to(".typing-title", { delay: 1, duration: 5, text: { value: "Самое главное в бизнесе - сконцентрироваться <br> на создании чего-то важного." }, ease: "none" })

if (widthWind > 767) {
    gsap.from("#landing-item", {
        x: -200,
        // opacity:0,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-250px",
            trigger: "#landing-item",
        }
    })

    gsap.from("#bcard-item", {
        x: 200,
        // opacity:0,
        scrollTrigger: {
            trigger: "#bcard-item",
            scrub: 1,
            start: "-1000px",
            end: "-300px",
        }
    })

    gsap.from("#multi-item", {
        x: -200,
        // opacity:0,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-450px",
            trigger: "#multi-item",
        }
    })

    gsap.from("#shop-item", {
        x: 200,
        // opacity:0,
        scrollTrigger: {
            trigger: "#shop-item",
            scrub: 1,
            start: "-1000px",
            end: "-700px",
        }
    })

    gsap.from(".si-1", {
        x: -550,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-500px",
            trigger: ".si-1",
        }
    })
    gsap.from(".si-2", {
        x: -550,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-500px",
            trigger: ".si-2",
        }
    })
    gsap.from(".si-3", {
        x: -550,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-500px",
            trigger: ".si-3",
        }
    })
    gsap.from(".si-4", {
        x: -550,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-500px",
            trigger: ".si-4",
        }
    })
    gsap.from(".si-5", {
        x: -550,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-500px",
            trigger: ".si-5",
        }
    })
    gsap.from(".si-6", {
        x: -550,
        scrollTrigger: {
            scrub: 1,
            start: "-1000px",
            end: "-500px",
            trigger: ".si-6",
        }
    })

    // gsap.from(".step-icons-box", {
    //     x: 50,
    //     opacity:0,
    //     scrollTrigger: {
    //         trigger: "#how-to-work",
    //         scrub: true,
    //         start: "-800px",
    //         end: "100%",
    //     }
    // })

    // gsap.from(".portfolio-inbox", {
    //     scale:0,
    //     scrollTrigger: {
    //         scrub:true,
    //         start:"-1200px",
    //         end:"-500px",
    //         trigger:".portfolio"
    //     }
    // })

    gsap.from(".why-we-item-left", {
        x: -150,
        y: 150,
        scrollTrigger: {
            scrub: 1,
            start: "-600px",
            end: "-250px",
            trigger: ".why-we"
        }
    })

    gsap.from(".why-we-item-center", {
        y: 150,
        scrollTrigger: {
            scrub: 1,
            start: "-600px",
            end: "-250px",
            trigger: ".why-we"
        }
    })

    gsap.from(".why-we-item-right", {
        x: 150,
        y: 150,
        scrollTrigger: {
            scrub: 1,
            start: "-600px",
            end: "-250px",
            trigger: ".why-we"
        }
    })

    gsap.from(".t1", {
        x: -650,
        scrollTrigger: {
            scrub: 1,
            start: "-1200px",
            end: "-400px",
            trigger: ".t1"
        }
    })

    gsap.from(".t2", {
        x: -650,
        scrollTrigger: {
            scrub: 1,
            start: "-1200px",
            end: "-400px",
            trigger: ".t2"
        }
    })

    gsap.from(".t3", {
        x: -650,
        scrollTrigger: {
            scrub: 1,
            start: "-1200px",
            end: "-400px",
            trigger: ".t3"
        }
    })

    gsap.from(".t1-rev", {
        scale: 0,
        scrollTrigger: {
            scrub: 1,
            start: "-1200px",
            end: "-300px",
            trigger: ".t1"
        }
    })

    gsap.from(".t2-rev", {
        scale: 0,
        scrollTrigger: {
            scrub: 1,
            start: "-1200px",
            end: "-300px",
            trigger: ".t2"
        }
    })

    gsap.from(".t3-rev", {
        scale: 0,
        scrollTrigger: {
            scrub: 1,
            start: "-1200px",
            end: "-300px",
            trigger: ".t3"
        }
    })


}

if (widthWind < 768) {
    gsap.from(".mobile-menu", { duration: 1, ease: "bounce", y: 70 })
}



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


window.addEventListener("DOMContentLoaded", function () {

    const closeAnimBtn = document.getElementById("close-btn");
    closeAnimBtn.addEventListener("click", function () {
        let navMenu = document.getElementsByClassName("nlia");
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
        productCard.addEventListener("click", function () {
            pis = document.getElementsByClassName("pi")
            for (let pi of pis) {
                pi.classList.toggle("pi-0")
            }
            for (let card of prouctCards) {
                card.classList.toggle("off")
                card.querySelector(".product-inbox").classList.toggle("off")
            }
            inbox = this.querySelector("#outbox")
            if (inbox.classList.contains("inbox-on")) {

                setTimeout(function () {
                    inbox.classList.remove("inbox-on")
                }, 300)
            }
            else {
                setTimeout(function () {
                    inbox.scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    })
                }, 150)
                inbox.classList.add("inbox-on")
            }
            this.classList.remove("off");
            this.querySelector(".product-inbox").classList.remove("off")
            this.classList.toggle("on");
            inbox.querySelector(".product-descr-hidden").classList.toggle("product-descr-visible")
        })
    }
})




const goHome = document.getElementById("go-home")
goHome.addEventListener("click", function () {
    window.document.getElementById("content").scrollIntoView();
})

const checkbox = document.getElementById("checkbox");
const checkboxBox = document.getElementById("check-div");
checkboxBox.addEventListener("click", function () {
    if (checkboxBox.querySelector(".checkbox-unchecked").classList.contains("checkbox-checked")) {
        checkboxBox.querySelector(".checkbox-unchecked").classList.remove("checkbox-checked");
        checkbox.checked = false;
    }
    else {
        checkboxBox.querySelector(".checkbox-unchecked").classList.add("checkbox-checked");
        checkbox.checked = true;
    }
})

const checkbox2 = document.getElementById("checkbox2");
const checkboxBox2 = document.getElementById("check-div2");
checkboxBox2.addEventListener("click", function () {
    if (checkboxBox2.querySelector(".checkbox-unchecked").classList.contains("checkbox-checked")) {
        checkboxBox2.querySelector(".checkbox-unchecked").classList.remove("checkbox-checked");
        checkbox2.checked = false;
    }
    else {
        checkboxBox2.querySelector(".checkbox-unchecked").classList.add("checkbox-checked");
        checkbox2.checked = true;
    }
})

const form2 = document.getElementById("form2")
const form2btns = document.getElementsByClassName("form2-toggle-btn")
for (let form2btn of form2btns) {
    form2btn.addEventListener("click", function () {
        form2.classList.toggle("form2-active")
        this.querySelector("svg").classList.toggle("rotate45")
    })
}



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



$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.mobile-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 64 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.mobile-menu a').removeClass("active-menu-item");
            currLink.addClass("active-menu-item");
        }
        else {
            currLink.removeClass("active-menu-item");
        }
    });
}


$('#footer-num').submit(function () {
    $.post(
        'post-email.php',
        $("#footer-num").serialize(),

        function (msg) {
            $('#footer-num').hide('slow');
            $('#message').html(msg);
            $('#form-title').text('Ваша заявка в пути! Ответим в ближайшее время!')
            $('#form-title').addClass('form-title-agree')
        }
    );

    return false;
});

$('#footer-num2').submit(function () {
    $.post(
        'post-email.php',
        $("#footer-num2").serialize(),

        function (msg) {
            $('#footer-num2').hide('slow');
            $('#message2').html(msg);
            $('#form-title2').text('Ваша заявка в пути! Ответим в ближайшее время!')
            $('#form-title2').addClass('form-title-agree')
        }
    );

    return false;
});




