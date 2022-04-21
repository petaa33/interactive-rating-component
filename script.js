const submit = document.getElementById('submit');
const desktop = document.getElementById('desktop');
const submitContainer = document.getElementById('submitContainer');
const ratings = document.querySelectorAll('.rating');
const ratingNmb = document.getElementById('ratingNmb');

ratings.forEach((rating)=> {
    rating.addEventListener('click', ()=>{
        ratingNmb.textContent = rating.textContent;
        rating.style.background = "hsl(216, 12%, 54%)";
    });
});

submit.addEventListener('click', ()=> {
    desktop.classList.toggle('hidden');
    submitContainer.classList.toggle('hidden');
});