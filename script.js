const submit = document.getElementById('submit');
const desktop = document.getElementById('desktop');
const submitContainer = document.getElementById('submitContainer');
const ratings = document.querySelectorAll('.rating');
const ratingNmb = document.getElementById('ratingNmb');

ratings.forEach((rating)=> {
    rating.addEventListener('click', ()=>{
        ratings.forEach((ratingNmb)=>{
            ratingNmb.style.background = "hsl(215, 17%, 22%)";
        })
        ratingNmb.textContent = rating.textContent;
        rating.style.background = "hsl(216, 12%, 54%)";
    });
});

submit.addEventListener('click', ()=> {
    desktop.classList.toggle('hidden');
    submitContainer.classList.toggle('hidden');
});