
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  const ratingItemsList = document.querySelectorAll('.rating__item');
  const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
  
  ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = item.dataset.itemValue;
    })
  )