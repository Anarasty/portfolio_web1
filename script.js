const resumeBtns = document.querySelectorAll('.resume__btn')

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll(".resume__detail")

        resumeBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail => {
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')
    })
})

// Samopisniy slider
const arrowRight = document.querySelector('.portfolio__box .navigation .arrow__right')
const arrowLeft = document.querySelector('.portfolio__box .navigation .arrow__left')

let index = 0

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio__carousel .img__slide')
    const portfolioDetails = document.querySelectorAll('.portfolio__detail')

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    })
    portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled')
    } else {
        index = 5;
        arrowRight.classList.add('disabled')
    }

    activePortfolio()
})

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled')
    } else {
        index = 0;
        arrowLeft.classList.add('disabled')
    }

    activePortfolio()
})