const state = {
  lang: "ar",
  responses: {
    ar: {
      object: "أرى موزة أمامي. لونها أصفر. هل تريد أن نلعب لعبة الفواكه؟",
      emotion: "ألاحظ أن الطفل هادئ الآن. يمكننا بدء لعبة تعليمية بسيطة.",
      voice: "مرحباً يا أحمد، أنا معك. قل لي ماذا تريد أن نفعل اليوم؟",
      game: "هيا نلعب لعبة الألوان. ما لون التفاحة؟ ممتاز، اللون أحمر!",
      dashboard: "تم تسجيل 18 محادثة، 4 ألعاب تعليمية، وجلستين تهدئة بدون أي تنبيه طوارئ."
    },
    en: {
      object: "I can see a banana. It is yellow. Would you like to play the fruit game?",
      emotion: "The child looks calm now. We can start a simple learning game.",
      voice: "Hello Ahmed, I am with you. Tell me what you would like to do today.",
      game: "Let’s play the color game. What color is the apple? Great, it is red!",
      dashboard: "18 conversations, 4 learning games, and 2 calming sessions were recorded with no emergency alerts."
    }
  }
};

const langToggle = document.getElementById("langToggle");
const demoResponse = document.getElementById("demoResponse");

function setLanguage(lang){
  state.lang = lang;
  document.body.classList.toggle("ar", lang === "ar");
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(el => {
    const value = el.getAttribute(`data-${lang}`);
    if(value) el.textContent = value;
  });

  langToggle.textContent = lang === "ar" ? "EN" : "AR";
}

document.querySelectorAll("[data-demo]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-demo");
    demoResponse.textContent = state.responses[state.lang][key];
    demoResponse.animate([
      {opacity: .2, transform: "translateY(8px)"},
      {opacity: 1, transform: "translateY(0)"}
    ], {duration: 350, easing: "ease-out"});
  });
});

langToggle.addEventListener("click", () => setLanguage(state.lang === "ar" ? "en" : "ar"));
setLanguage("ar");
