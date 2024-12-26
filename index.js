const bar = document.querySelector('.bar');
const ulItems = document.querySelector('.ul-items')
bar.addEventListener('click', () =>{
    ulItems.classList.toggle('active');
    document.querySelector('body').classList.toggle('add');
})

