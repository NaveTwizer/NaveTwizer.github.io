const options = {
    '1913' : 'correct',
    '1936' : 'ממש לא בית"ר חחחחח',
    '1923' : 'זה גם לא הפועל.',
    '1955' : 'ממש לא הגמלים מבאר שבע',
    '1906' : 'הם לא מכבי',
    '1934' : 'פתח תקווה (או נתניה) לא קיימת בכלל',
    '2006': 'לא מובן למה הם בליגת העל בכלל',
    '2000' : 'קריית שמונה לא קבוצה בכלל',
    '1924' : 'בשמלה אדומה ושתי צמות...',
    '1999' : 'מה פתאום אשדוד?',
    '1926' : 'שאלתי הקבוצה הטובה במדינה, לא בבירה..',
    '2005' : 'מה פתאום ריינה?',
    '1991' : 'שילכו לעזאזל הערבים האלה'
};

// Elements
const pwOverlay = document.getElementById("passwordOverlay");
const pwInput = document.getElementById("pwInput");
const pwBtn = document.getElementById("pwBtn");
const letterWrapper = document.getElementById("letterWrapper");

// Enter press handler
document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() === 'enter') {
        pwBtn.click();
    }
})
// Button click handler
pwBtn.addEventListener("click", () => {
    const val = pwInput.value.trim();

    if(options[val]) {
        if(options[val] === 'correct') {
            // Correct password → unlock letter
            pwOverlay.style.display = "none";
            document.querySelector(".secret-letter").style.display = "block";
        } else {
            // Wrong password → show funny message
            alert(options[val]);
            pwInput.value = "";
            pwInput.focus();
        }
    } else {
        // Invalid input
        alert(`שום קבוצה מליגת העל לא הוקמה בשנת ${val}...`);
        pwInput.value = "";
        pwInput.focus();
    }
});

// Generate floating particles
for(let i = 0; i < 30; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (5 + Math.random() * 5) + "s";
    particle.style.opacity = Math.random();
    document.body.appendChild(particle);
}