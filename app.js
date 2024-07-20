
window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
      gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none"
      })
      
  }else{
      gsap.to(".marque", {
          transform: "translateX(0)",
          duration: 4,
          repeat: -1,
          ease: "none"
      })
  }
})


let animm = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2-animm",
    // markers: true,
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
  }
})

animm.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0
})

(function () {
  var scroll = new LocomotiveScroll();
})();


//FOOTER SECTION
function breakTheTexts() {
  let footerH11 = document.querySelector(".footer-anim h1")
  let footerH1Texts = footerH11.textContent


  let splittedTexts = footerH1Texts.split("")
  let halfValues = splittedTexts.length / 2


  let clutters = ""

  splittedTexts.forEach(function (elem, idx) {

    if (idx < halfValues) {
      clutters += `<span class="footerA">${elem}</span>`

    } else {
      clutters += `<span class="footerB">${elem}</span>`
    }
  })
  footerH11.innerHTML = clutters
}
breakTheTexts()



gsap.from(".footer-anim h1 .footerA", {
  y: -60,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "175% 99%",
    end: "175% 75%",
    scrub: 2
  }
})


gsap.from(".footer-anim h1 .footerB", {
  y: -60,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: -0.15,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers: true,
    start: "175% 99%",
    end: "175% 75%",
    scrub: 2
  }
})
gsap.from("#footer .footer-circle-logo img", {
  transform: "rotate(150deg)",
  duration: 4,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "120% 99%",
    end: "120% 60%",
    scrub: 2
  }
})

// gsap.from("#footer p", {
//   scrollTrigger: {
//     trigger: "#footer",
//     scroller: "body",
//     markers: true,
//     start: "60% 99%",
//     end: "60% 60%",
//     Shery.textAnimate("#footer p", {
//       y: 50,
//       duration: 1,
//       ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     }
// })






let nav = document.querySelector(".toggle");
let fullNav = document.querySelector(".full");

nav.onclick = function () {
  nav.classList.toggle("active");
  fullNav.classList.toggle("active");
  if (fullNav.classList.contains("active")) {
    gsap.to(".full", {
      // height: "100%",
      // width:"100%",
      right: "0",
      duration: 0.7
    });

    gsap.from(".full h4", {
      y: 100,
      duration: 0.6,
      stagger: 0.3,
      opacity: 0,
      // transform:"rotate(45deg)"
    });
  }
  else {
    gsap.to(".full", { right: "-70vw", duration: 1 });
  }
};


// temp page big circle ke under small circle animation


let arr = [
  {
    "src": "images/BURGER.png",
    "deg": "45",
    "h1": "Burger",
    "h4": "The Most Delicious"
  },
  {
    "src": "images/icecream.jpg",
    "deg": "90",
    "h1": "Dessert",
    "h4": "Most Famous"
  },
  {
    "src": "images/plate burger.png",
    "deg": "135",
    "h1": "Burger",
    "h4": "Delightful and Savory"
  },
  {
    "src": "images/burger2.png",
    "deg": "180",
    "h1": "Burger",
    "h4": "Tasty Treat"
  },
  {
    "src": "images/coffe.png",
    "deg": "225",
    "h1": "Coffee",
    "h4": "Perfect Brew"
  },
  {
    "src": "images/icecream.jpg",
    "deg": "270",
    "h1": "Ice Cream",
    "h4": "Sweet Delight"
  },
  {
    "src": "images/palatable-chicken-with-spices.png",
    "deg": "315",
    "h1": "Chicken",
    "h4": "Spicy and Juicy"
  },
  {
    "src": "images/burger 3.png",
    "deg": "360",
    "h1": "Burger",
    "h4": "Ultimate Flavor"
  }
]

const centerImg = document.querySelector(".centerimg img")
const tempBox = document.querySelector(".tempbox")
const rightBtn = document.querySelector(".rightbtn")
const leftbtn = document.querySelector(".leftbtn")
const temptexth4 = document.querySelector(".templeftTexts h4")
const temptexth1 = document.querySelector(".templeftTexts h1")

let index = 0;

function rotateRight() {
  centerImg.style.opacity = '0'
  temptexth1.style.opacity = '0'
  temptexth4.style.opacity = '0'
  index = (index + 1) % arr.length;
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    temptexth1.innerText = arr[index].h1
    temptexth4.innerText = arr[index].h4
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
    temptexth1.style.opacity = '1'
    temptexth4.style.opacity = '1'
  }, 220);
}
function rotateLeft() {
  centerImg.style.opacity = '0'
  index = (index - 1 + arr.length) % arr.length;
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
    temptexth1.innerText = arr[index].h1
    temptexth4.innerText = arr[index].h4
  }, 1120);
}


// setInterval(() => {
//   rotateRight()
// }, 2000);



rightBtn.addEventListener("click", rotateRight)
leftbtn.addEventListener("click", rotateLeft)


//VIDEO SECTION
var vl = gsap.timeline({
  scrollTrigger: {
    trigger: "#video-section",
    scroller: "body",
    // markers:true,
    start: "100% 130%",
    end: "100% 80%",
    scrub: 2,
    duration: 2,
    // pin:true,
  }
});
vl.to("#video-section .video video", {
  width: "90vw",
  height: "90vh",
  borderRadius: "20px"
})



let am = gsap.timeline({
  scrollTrigger: {
    trigger: ".page",
    // markers:true,
    start: "30% 80%",
    end: "30% 45%",
    scrub: 1,
  },
})
am.to(".text-hover .first", {
  width: "100%",
})
am.to(".text-hover .second", {
  width: "100%",
})
am.to(".text-hover .third", {
  width: "100%",
})



// our secreate recipe page animation

let recipeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top 80%",
  }
});

recipeTimeline
  .from(".yellowbox", { y: "200%" })
  .from(".yellowbox img", { scale: 0.5, start: "top 50%" }, "<") // "<" starts this animation at the same time as the previous one
  .from(".recipecard1", { scale: 0, left: "50%", start: "top 40%" }, "<")
  .from(".recipecard4", { scale: 0, left: "50%", start: "top 40%" }, "<");

// Create another timeline for the animations with different start positions
let recipeTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top -20%"
  }
});

recipeTimeline2
  .from(".recipecard2", { scale: 0, left: "50%" })
  .from(".recipecard3", { scale: 0, left: "50%" }, "<");


// burgeranimation page

let burgerpageTimeline = gsap.timeline({
  scrollTrigger: {
    start: "50% 50%",
    end: "bottom top",
    // markers:true,
    scrub: true,
    trigger: "#burgeranimation",
    pin: true,
  }
})

gsap.from(".burgerimg", {
  top: "100%",
  scrollTrigger: {
    trigger: "#burgeranimation",
    start: "30% 50%",
    end: "50% 50%",
    // markers:true,
    scrub: true

  }
})

burgerpageTimeline.from(".bi", {
  top: "50%",
  left: "50%",
  duration: 2,
  zindex: -1,
  scale: 0
}, "a")

burgerpageTimeline.from("#burgeranimation h1", {
  top: "50%",
  left: "50%",
  opacity: 0,
  scale: 0
}, "a")






const allTextP = document.querySelectorAll(".textp")
allTextP.forEach((text) => {
  const textcontent = text.textContent
  const splitedText = textcontent.split("");
  let clutter = ''
  splitedText.forEach((e) => {
    if (e == " ") {
      e = "-"
    }
    clutter += `<span class="a" >${e}</span>`
  })

  text.innerHTML = clutter
})

const createAnimation = (selector, properties, scrollTrigger) => {
  gsap.from(selector, {
    ...properties,
    scrollTrigger: {
      trigger: ".menu",
      scrub: true,
      ...scrollTrigger
    }
  });
};

// Text animations
createAnimation(".textp.first span", { opacity: 0, stagger: 0.1 }, { start: "10% 50%", end: "50% 90%" });
createAnimation(".textp.second span", { opacity: 0, stagger: 0.1 }, { start: "30% 50%", end: "50% 90%" });
createAnimation(".textp.third span", { opacity: 0, stagger: 0.1 }, { start: "60% 50%", end: "80% 90%" });
createAnimation(".textp.fourth span", { opacity: 0, stagger: 0.1 }, { start: "80% 70%", end: "90% 60%" });

// Image animations
createAnimation(".firstImg", { rotate: 90, stagger: 0.1 }, { start: "10% 50%", end: "50% 90%" });
createAnimation(".secondImg", { rotate: 90, stagger: 0.1 }, { start: "30% 50%", end: "50% 40%" });
createAnimation(".thirdImg", { rotate: 90, stagger: 0.1 }, { start: "60% 50%", end: "80% 70%" });
createAnimation(".fourthImg", { rotate: 90, stagger: 0.1 }, { start: "80% 70%", end: "90% 50%" });

// smoke or salt img animation
createAnimation(".saltimg img", { x: "-100%" }, { start: "10% 50%", end: "50% 90%" })
createAnimation(".saltimg1 img", { x: "-100%" }, { start: "40% 50%", end: "50% 20%" })


// review page animation

const reviewLeft = document.querySelector(".reviewBtnleft");
const reviewRight = document.querySelector(".reviewBtnRight");
const allReviewCard = document.querySelectorAll(".reviewcard");
let reviewIndex = 0;

function animateReview(direction) {
  const previousIndex = reviewIndex;
  const nextIndex = (reviewIndex + direction + allReviewCard.length) % allReviewCard.length;

  gsap.to(allReviewCard[previousIndex], {
    left: direction > 0 ? "125%" : "-24%",
    duration: 0.9,
  });

  gsap.to(allReviewCard[nextIndex], {
    zIndex: 9,
    duration: 0.9,
    // delay: 0.1
  });

  gsap.to(allReviewCard[previousIndex], {
    left: "50%",
    zIndex: 1,
    delay: 0.9
  });

  reviewIndex = nextIndex;
}

reviewRight.addEventListener("click", () => animateReview(1));
reviewLeft.addEventListener("click", () => animateReview(-1));
Shery.imageEffect(".img", {
  style: 4,
  debug: true,
});












