let swiper = new Swiper('.slide-content', {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-paginationn',
        clickable: true,
        dynamicBullets: true,
      },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        560: {
            slidesPerView: 2,
        },
        1130: {
            slidesPerView: 3,
        }
    }
  });


// toggle function
function myFunction() {
    let add = document.getElementById("myDiv");
    if (add.style.display === "block") {
      add.style.display = "none";
    } else {
      add.style.display = "block";
    }
} 

// search function
function search(){
    let searchBar = document.querySelector("#search-item").value.toUpperCase();
    let productList = document.querySelector(".product-list");
    let product = document.querySelectorAll(".project");
    let productName = document.getElementsByTagName("h5");
    let frontendTracks = document.getElementById("frontend-heading")
    let backendTracks = document.getElementById("backend-heading")
    let androidTracks = document.getElementById("android-heading")
    let productMangTracks = document.getElementById("product-mang-heading")
    let newlyAdded = document.getElementById("newly-added-heading")
    let productDesTracks = document.getElementById("product-design-heading")

    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
            frontendTracks.style.display = "block"
            backendTracks.style.display = "block"
            androidTracks.style.display = "block"
            productMangTracks.style.display = "block"
            newlyAdded.style.display = "block"
            productDesTracks.style.display = "block"
            
        } else {
            product[i].style.display = "none";
            frontendTracks.style.display = "none"
            backendTracks.style.display = "none"
            androidTracks.style.display = "none"
            productMangTracks.style.display = "none"
            newlyAdded.style.display = "none"
            productDesTracks.style.display = "none"
        }
    }
}


