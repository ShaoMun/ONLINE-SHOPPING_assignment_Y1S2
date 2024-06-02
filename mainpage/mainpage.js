let i = 1;
const outNextImg = document.querySelector('.fadeback-image');
const inNextImg = document.querySelector('.fbdisplay-image');
const outPreImg = document.querySelector('.fadefront-image');
const inPreImg = document.querySelector('.ffdisplay-image');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const productDesc = document.querySelector('.js-desc');

previousBtn.addEventListener('click', function() {
    if (i === 1) {
        outPreImg.innerHTML = `<img src="new-1.png" alt="new-1">`;
        inPreImg.innerHTML = `<img src="new-5.png" alt="new-5">`;
        productDesc.innerHTML = document.querySelector(`.js-desc5`).innerHTML;
        inNextImg.innerHTML = ' ';
        i = 5;
    } else {
        outPreImg.innerHTML = `<img src="new-${i}.png" alt="new-${i}">`;
        inPreImg.innerHTML = `<img src="new-${i-1}.png" alt="new-${i-1}">`;
        productDesc.innerHTML = document.querySelector(`.js-desc${i-1}`).innerHTML;
        inNextImg.innerHTML = ' ';
        i--;
    }
});

nextBtn.addEventListener('click', function() {
    if (i === 5) {
        outNextImg.innerHTML = `<img src="new-5.png" alt="new-5">`;
        inNextImg.innerHTML = `<img src="new-1.png" alt="new-1">`;
        productDesc.innerHTML = document.querySelector(`.js-desc1`).innerHTML;
        inPreImg.innerHTML = ' ';
        i = 1;
    } else {
        outNextImg.innerHTML = `<img src="new-${i}.png" alt="new-${i}">`;
        inNextImg.innerHTML = `<img src="new-${i+1}.png" alt="new-${i+1}">`;
        productDesc.innerHTML = document.querySelector(`.js-desc${i+1}`).innerHTML;
        inPreImg.innerHTML = ' ';
        i++;
    }
});
