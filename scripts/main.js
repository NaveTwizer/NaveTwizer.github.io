var galleryDiv = document.getElementById('gallery');
var timelineDiv = document.getElementById('timeline');
var gamesDiv = document.getElementById('games');
var reasonsDiv = document.getElementById('reasons');
var hiddenDiv = document.getElementById('hiddenDiv');


document.addEventListener('DOMContentLoaded', () => {
    // check for all 3 checks
    if (sessionStorage.getItem('gallery') && sessionStorage.getItem('timeline') && sessionStorage.getItem('games') && sessionStorage.getItem('reasons')) {
        hiddenDiv.style.display = 'flex';
    }
    [galleryDiv, timelineDiv, gamesDiv, reasonsDiv].forEach(div => {
        div.addEventListener('click', () => {
            sessionStorage.setItem(`${div.id}`, 'true');
            console.log('Logged '+ div.id);
            document.location.href = `${div.id}.html`;
        })
    });
    hiddenDiv.addEventListener('click', () => {
        document.location.href = 'secret.html';
    })
})
