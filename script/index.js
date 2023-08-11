
// testimonial script ==================================
// let tablinks = document.getElementsByClassName('tab-imglink');
// let tabcontents = document.getElementsByClassName('tab-contents');

// function Opentab(tabname){
//   for(tabcontent of tabcontents){
//     tabcontent.classList.remove('active-tab');
//   }
  
//   for(tablink of tablinks){
//     tablink.classList.remove('active-tablink');
//   }
  
//   event.target.classList.add('active-tablink');
//   document.getElementById(tabname).classList.add('active-tab');
// }




// menu icon toggle 
let menuI = document.querySelector('.fa-bars');
let navs = document.querySelector('.navs');

menuI.addEventListener('click', () => {
  menuI.classList.toggle('fa-xmark');
  navs.classList.toggle('Active-menu');
})

// home background =========================================================


// store carousel ====================================================================
$(".carousel").owlCarousel({
  margin: 30,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
    1100: {
      items: 4,
      nav: false,
    },
  }
})

// testimonial carousel ==============================
$(".profiles").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
    1100: {
      items: 5,
      nav: false,
    },
  }
})
