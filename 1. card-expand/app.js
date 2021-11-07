
const cardItems = document.querySelectorAll('.card');

cardItems.forEach((cardItem) => {
    cardItem.addEventListener('click', () => {
        removeActiveClasses()
        cardItem.classList.add('active');
    })
})

function removeActiveClasses() {
    cardItems.forEach((cardItem) => {
        cardItem.classList.remove('active');
    })
}
