const resumeBtns = document.querySelectorAll('.resume__btn')

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    })
})