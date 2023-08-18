
// const slides = [
//   {
//     "image": "background.jpg"
//   },
//   {
//     "image": "backgound4.jpg"
//   },{
//     "image": "background1.jpg"
//   },{
//     "image": "background2.jpg"
//   },{
//     "image": "background3.jpg"
//   }
// ]
// let maincontent = document.querySelector('.main-content');
// let dot_set = document.querySelector('.dots');
// let previous = document.querySelector('#previous');
// let nextbtn = document.querySelector('#next');

// previous.addEventListener('click', left);
// nextbtn.addEventListener('click', right);

// let etape = 0;
// let slidelength = slides.length;
// let tabimages = [];
// let Timage = document.querySelector('.banner-img');
// // let text = document.querySelector('.banner-p');
// // console.log(text);
// tabimages = Object.values(slides);
// console.log(tabimages);

// for( let e = 0; e < slidelength; e++){
// 	let divs = document.createElement('div');
// 	divs.classList.add('dot');
// 	dot_set.appendChild(divs);
// }

// let dot = document.getElementsByClassName('dot');

// function left(){
	// dot[etape].classList.remove('dot_selected');
	// e.preventDefault();
// 	etape--;
// 	if(etape < 0){
// 		etape = slidelength - 1;
// 	}
// 	Timage.src = "../images/" + tabimages[etape].image;
// 	// text.innerHTML = tabimages[etape].tagLine;
// 	dot[etape].classList.add('dot_selected');
// }

// function right(){
//   dot[etape].classList.remove('dot_selected');
// 	etape++;
// 	if( etape >= slidelength ){
//        etape = 0;
// 	}
// 	Timage.src = "../images/" + tabimages[etape].image;
	// text.innerHTML = tabimages[etape].tagLine;
	// dot[etape].classList.add('dot_selected');
// }

// setInterval(right, 5000);


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
