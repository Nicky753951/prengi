document.addEventListener("DOMContentLoaded", () => {
	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
      // responsive: [
      //       {
      //           breakpoint: 993,
      //           settings: {
      //               dots: false,
      //               arrows: false
      //           }
      //       }
      //   ]
	});


	const tabs = document.querySelectorAll(".tab"),
          tabsContent = document.querySelectorAll(".tabs__content"),
          tabsParent = document.querySelector(".tabs");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item =>{
            item.classList.remove("tab_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tab_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) =>{
        const target = event.target;
        if(target && target.classList.contains("tab")) {
            tabs.forEach((item, i) =>{
                if (target==item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//     $('.fade').slick({
// 	  dots: false,
// 	  infinite: true,
// 	  speed: 800,
// 	  fade: true,
//   	  cssEase: 'linear',
//       centerMode: true,
//       prevArrow: '<button type="button" class="slick-prev"><img src="icons/back.png"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="icons/forward.png"></button>'
// });

$('.single-item').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/back.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/forward.png"></button>'
});

});


