const reasons = [
"העיניים היפות שלך 👀",
"החיוך שלך :)",
"האכפתיות שלך",
"החמלה שיש בך",
"הלב הזהב שיש לך",
"היופי שלך :)",
"הגומות שלך",
"האנרגיות שלך",
"השיער שלך",
"החיבוק שלך",
"הצחוק שלך",
"הדרך שאת גורמת לי להרגיש טוב :)",
"הטוב לב שלך כלפי אחרים",
"הזמן שאנחנו מבלים ביחד",
"השיחות שלנו בווטסאפ או בשיחה",
"הרגישות שלך",
"היכולת שלך לגרום ל4 שעות נסיעה לכיוון להיות שוות כל רגע",
"האהבה שלך לבעלי חיים",
"היופי הפנימי והחיצוני שלך",
"והכי חשוב: את גילי, וזה אומר הכול :)"
];

let typing = false;

function reveal(index){

    if(typing) return;

    const message = document.getElementById("message");
    const text = reasons[index];

    message.textContent = "";
    typing = true;

    let i = 0;

    function type(){
        if(i < text.length){
            message.textContent += text.charAt(i);
            i++;
            setTimeout(type, 35);
        } else {
            typing = false;
        }
    }

    type();
}