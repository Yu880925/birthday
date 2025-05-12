const correctDate = "20000512";
const questions = [
  {
    question: "幾歲啦www？",
    answer: "25",
    image: "images/ques1.jpg",
    caption: "看來數學還是沒問題，沒有欺騙自己真棒！"
  },
  {
    question: "你老了嗎？請填是或否",
    answer: "是",
    image: "images/ques2.jpg", // 換成妳自己 local 的圖片
    caption: "別生氣這是2019的妳喔"
  },
  {
    question: "請問我們這團加上新人小黑第一次出遊是幾年幾月?例:202208",
    answer: "202208",
    image: "images/ques3.jpg", // 換成妳自己 local 的圖片
    caption: "這應該是第一次...對吧?"
  }

];

let currentQuestion = 0;

function checkDate() {
  const input = document.getElementById("dateInput").value;
  if (input === correctDate) {
    document.getElementById("gate").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();

    const bgm = document.getElementById("bgm");
    bgm.volume = 0.3;
    bgm.play().catch(e => {
      console.log("音樂播放被限制了，可能需要使用者互動才可播放");
      // 如果妳想提示，就加個 <p id=\"bgmError\">音樂播放失敗</p> 在 HTML 裡
      // document.getElementById("bgmError").classList.remove("hidden");
    });
  } else {
    document.getElementById("error").classList.remove("hidden");
  }
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("answerInput").value = "";
  document.getElementById("answerInput").disabled = false;
  document.getElementById("result").textContent = "";

  // ✅ 確保圖片區塊也清空
  document.getElementById("rewardImage").src = "";
  document.getElementById("imageCaption").textContent = "";
  document.getElementById("imageContainer").classList.add("hidden");

  document.getElementById("nextBtn").classList.add("hidden");
}

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim();
  const q = questions[currentQuestion];
  if (input === q.answer) {
    document.getElementById("result").textContent = "答對了！";
    document.getElementById("rewardImage").src = q.image;
    document.getElementById("imageCaption").textContent = q.caption || "";
    document.getElementById("imageContainer").classList.remove("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");
    document.getElementById("answerInput").disabled = true;
  } else {
    document.getElementById("result").textContent = "錯誤，再試試！";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("finalMessage").classList.remove("hidden");
    showFinalMessage();
  }
}

function showFinalMessage() {
  const message = `
🎉 25周年生日快樂！ 🎂

你完成所有題目啦～
祝妳有個快樂的生日，美好的一年，賺大錢買禮物給我，
做這個沒什麼意義，只是我突然想到而已，就當25周年紀念，
不過大部分都是GPT做的，就還請多多包涵啦，那就再一次...

🎈生日快樂囉!!!!!🎈

`;

  const target = document.getElementById("finalText");
  let index = 0;

  function type() {
    if (index < message.length) {
      target.innerHTML += message.charAt(index) === "\n" ? "<br>" : message.charAt(index);
      index++;
      setTimeout(type, 40); // 調整速度
    } else {
        document.getElementById("finalImageContainer").classList.remove("hidden");
        document.body.classList.add("sparkle-background"); // ✨ 讓背景閃起來
    }
  }

  type();
}



const openingText = "相信妳一定知道這裡要輸入甚麼(蠢應該都知道吧)";
let textIndex = 0;

function typeWriter() {
  if (textIndex < openingText.length) {
    document.getElementById("typeText").innerHTML += openingText.charAt(textIndex);
    textIndex++;
    setTimeout(typeWriter, 50);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  typeWriter();
});


