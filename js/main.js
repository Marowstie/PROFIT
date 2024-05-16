const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    //pagination: {
    //  el: '.swiper-pagination',
    //},
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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