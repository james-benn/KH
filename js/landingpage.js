let swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1130: {
            slidesPerView: 3,
        }
    }
  });
  
let swiPer = new Swiper('.slide-contentt', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-paginationn',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1130: {
            slidesPerView: 3,
        }
    }
  });


// accordion
function myDisplay() {
    let add = document.getElementById("Div-display");
    if (add.style.display === "block") {
        add.style.display = "none";
    } else {
        add.style.display = "block";
    }
  }

function myFunctionShow() {
    let add = document.getElementById("Div-2");
    if (add.style.display === "block") {
        add.style.display = "none";
    } else {
        add.style.display = "block";
    }
  }

function functionShow() {
    let add = document.getElementById("div");
    if (add.style.display === "block") {
        add.style.display = "none";
    } else {
        add.style.display = "block";
    }
  }

function myFunctionDisplay() {
    let add = document.getElementById("Div-4");
    if (add.style.display === "block") {
        add.style.display = "none";
    } else {
        add.style.display = "block";
    }
}

// toggle function
function myFunction() {
  let add = document.getElementById("myDiv");
  if (add.style.display === "block") {
    add.style.display = "none";
  } else {
    add.style.display = "block";
  }
} 