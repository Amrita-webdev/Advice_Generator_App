const advice = document.querySelector('.advice-text');
const adviceId = document.querySelector('.advice-id');
const dice = document.querySelector('.card__dice');

window.onload = fetchQuote;


function fetchQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) =>{
        adviceId.textContent = 'ADVICE #'+data.id;
        advice.textContent = '"'+data.advice+'"';
    })
    .catch((error) => {
        alert(`Error $(error)`);
    });
}

dice.addEventListener('click', function(){
    fetchQuote();
});

