document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  const leftBtn = carousel.querySelector('.arrow.left');
  const rightBtn = carousel.querySelector('.arrow.right');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex);
});
