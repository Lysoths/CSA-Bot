const input = document.querySelector(".footer input");
const button = document.querySelector(".footer button");
const content = document.querySelector(".content");

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    userMessage();
    content.scrollTo(0, content.scrollHeight);
  }
});
button.addEventListener("click", (e) => {
  if (input.value !== "") {
    userMessage();
    content.scrollTo(0, content.scrollHeight);
  } else {
    alert("Enter a Message");
  }
});

function userMessage() {
  if (input.value !== "") {
    const usrMsgDiv = document.createElement("div");
    const usrMsgText = document.createElement("p");

    usrMsgDiv.classList.add("usr-msg");
    usrMsgDiv.classList.add("msg");
    usrMsgText.innerText = input.value;

    usrMsgDiv.appendChild(usrMsgText);
    content.appendChild(usrMsgDiv);

    input.value = "";
    // console.log(usrMsgText.innerText);
    // botMessage(usrMsgText.innerText);
    setTimeout(() => {
      botMessage(usrMsgText.innerText);
    }, 1000);
  } else {
    alert("Enter a Message");
  }
}

function botMessage(value) {
  let isFound = true;

  for (let i in userObj) {
    if (userObj[i].includes(value.toLowerCase())) {
      const botMsgDiv = document.createElement("div");
      const botMsgText = document.createElement("p");
      const randomAnswer = Math.floor(Math.random() * botObj[i].length);

      botMsgDiv.classList.add("bot-msg");
      botMsgDiv.classList.add("msg");
      botMsgText.innerText = botObj[i][randomAnswer];
      if (botObj[i][randomAnswer] == "Yönlendiriyorum") {
        setTimeout(
          window.open(
            "https://music.youtube.com/watch?v=BPGWxjGSvTA&list=RDAMVMBPGWxjGSvTA",
            "_blank"
          ),
          2000
        );
      }
      botMsgDiv.appendChild(botMsgText);
      content.appendChild(botMsgDiv);

      isFound = true;

      break;
    } else if (!userObj[i].includes(value.toLowerCase())) {
      isFound = false;
    }
  }

  if (isFound == false) {
    let randomNumber = Math.floor(Math.random() * botObj.wrongAnswers.length);
    const botMsgDiv = document.createElement("div");
    const botMsgText = document.createElement("p");
    botMsgDiv.classList.add("bot-msg");
    botMsgDiv.classList.add("msg");
    botMsgText.innerText = botObj.wrongAnswers[randomNumber];
    botMsgDiv.appendChild(botMsgText);
    content.appendChild(botMsgDiv);
  }
  content.scrollTo(0, content.scrollHeight);
}

const userObj = {
  advice: [
    "öğüt",
    "tavsiye",
    "destek",
    "bana tavsiye verebilir misin",
    "bana öğüt verir misin",
    "çok takıldım",
    "motivasyonum düştü",
    "öğrenmekte zorluk çekiyorum",
  ],
  compliment: [
    "çok tatlısın",
    "tipe bak ya",
    "çok komiksin",
    "ne kadar güzelsin",
    "ne kadar akıllısın",
    "çok hazır çevapsın",
  ],
  compliment2: ["yerim seni"],
  music: ["müzik", "şarkı"],
  feeling: ["naber", "nasılsın", "günün nasıl", "iyi misin"],
  team: ["ekip", "takım", "tim", "csa"],
  greet: [
    "merhaba",
    "selam",
    "nasılsın",
    "iyi misin",
    "günün nasıl",
    "kaç yaşındasın",
  ],
  name: ["adın ne", "ismin ne"],
  balls: ["football", "basketball"],
  badWord: [
    "amk",
    "sie",
    "küfür",
    "anan",
    "siktir",
    "oç",
    "orospu evladı",
    "ananı sikerim",
    "kaltak",
    "kahpe",
  ],
};

const botObj = {
  advice: [
    "Canın sıkıldığı her an CSA takımı arkanda.",
    "Öğrenmenin en güzel yolu uygulamaktır.",
    "Bol bol proje geliştir",
    "Hata Yapmak insanı güçlendirir",
    "Öğrenmekte zorlanıyorsan merak etme, ilerde zorlandığın şeyleri gözün kapalı ve amuda kalkarak yapabileceksin.",
  ],
  compliment: ["O senin güzelliğin", "Tabiki ben çok iyiyimdir 😎"],
  compliment2: [
    "Ben de seni yerim",
    "Aç herif",
    "Yazık sana türk genci",
    "Ben aslında yoğumm",
  ],
  music: ["Yönlendiriyorum"],
  feeling: ["iyiyim sen nasılsın?"],
  team: [
    "Akın Bido Çağın Oğuzhan Emirhan  Erdal  Erdinç Muhammed Serhat Turkhan Selim",
  ],
  greet: ["Merhaba Yolcu", "Selam Dostum", "Vay CSA dan mısın selaaam"],
  name: ["Benim Adım CSA Moruk"],
  balls: ["I like Balls"],
  badWord: ["Küfür yok beyler"],
  wrongAnswers: [
    "Anlamadım",
    "Ne diyon zırto",
    "Yazmayı öğren",
    "Komutan Peşinde düzgün konuş",
    "Böyle bir kelimeye cevap vermek için hazır değilim",
    "Küfür edersem rahat uyuyamazsın",
    "Sözlerini sana iade ediyorum",
    "Senden nefret ediyorum",
    "Umarım ölürsün",
    "Geber",
  ],
};

function music() {
  window.open("https://www.geeksforgeeks.org", "_blank");
}
