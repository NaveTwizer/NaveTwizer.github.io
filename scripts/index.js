var galleryDiv = document.getElementById('gallery');
var timelineDiv = document.getElementById('timeline');
var gamesDiv = document.getElementById('games');
var hiddenDiv = document.getElementById('hiddenDiv');




window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload();
    }
    // check for all 3 checks
    if (sessionStorage.getItem('gallery') && sessionStorage.getItem('timeline') && sessionStorage.getItem('games')) {
        hiddenDiv.style.display = 'block';
    }
    else {
        console.log('Not yet.');
    }
    [galleryDiv, timelineDiv, gamesDiv].forEach(div => {
        div.addEventListener('click', () => {
            sessionStorage.setItem(`${div.id}`, 'true');
            console.log('Logged '+ div.id);
            document.location.href = `pages/${div.id}.html`;
        })
    });
    hiddenDiv.addEventListener('click', () => {
        document.location.href = 'pages/secret.html';
    })
})
/*document.addEventListener('DOMContentLoaded', () => {
    // check for all 3 checks
    if (sessionStorage.getItem('gallery') && sessionStorage.getItem('timeline') && sessionStorage.getItem('games')) {
        hiddenDiv.style.display = 'flex';
    }
    else {
        console.log('Not yet.');
    }
    [galleryDiv, timelineDiv, gamesDiv].forEach(div => {
        div.addEventListener('click', () => {
            sessionStorage.setItem(`${div.id}`, 'true');
            console.log('Logged '+ div.id);
            document.location.href = `pages/${div.id}.html`;
        })
    });
    hiddenDiv.addEventListener('click', () => {
        document.location.href = 'pages/secret.html';
    })
})
*/

