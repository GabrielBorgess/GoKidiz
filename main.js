const header = document.querySelector("header");
let recentScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(recentScrollY < window.scrollY){
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    recentScrollY = window.scrollY
});


const scrollOffset = 100;

const scrollElements = document.querySelectorAll('.hidden');

scrollElements.forEach((el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
      );
  })

const displayScrollElement = () => {
    scrollElements.classList.add('show');
};

const hideScrollElement = () => {
    scrollElements.classList.remove('show');
};
   
  const handleScrollAnimation = () => {
      if (elementInView(scrollElements, scrollOffset)) {
        displayScrollElement();
      } else {
        hideScrollElement();
      }
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })