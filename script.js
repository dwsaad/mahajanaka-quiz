const questions = [
  {
    question: "พระเจ้ามหาชนก พระมหากษัตริย์ผู้ครองราชย์ เมืองใด",
    choices: ["นครมิถิลา", "กาลจัมปากะ", "เมืองมหาสมุทร", "สุวรรณภูมิ"],
    answer: "นครมิถิลา"
  },
  {
    question: "ข้อใดกล่าวได้ถูกต้อง",
    choices: ["พระโปลชนก มีน้องชาย", "พระโปลชนก คือ พระอริฏฐชน", "พระโปลชนก มีพี่ชาย", "พระโปลชนก คือ บิดาของ พระอริฏฐชน"],
    answer: "พระโปลชนก มีพี่ชาย"
  },
   {
    question: "เหล่าอำมาตย์ผู้ทุจริตบางคนออกอุบายให้พระอริฏฐชนกเกิดความระแวง ผู้ใด",
    choices: [
      "พี่ชายของพระโปลชนก",
      "น้องชายของพระโปลชนก",
      "พระโปลชนก",
      "บิดาของพระโปลชนก"
    ],
    answer: "พระโปลชนก"
  },
  {
    question: "พระมหาชนกสามารถหลบออกจากที่คุมขัง และเสด็จหนีไปอยู่ที่ใด",
    choices: [
      "ชายแดน",
      "เมืองมิถิลา",
      "เมืองสุวรรณภูมิ",
      "กาลจัมปากะ"
    ],
    answer: "ชายแดน"
  },
  {
    question: "ผู้ใดคือต้นเหตุให้พระโปลชนก กับ พระอริฏฐชนก ทำสงครามกัน",
    choices: [
      "บิดา",
      "อำมาตย์",
      "พระมเหสีของพระโปลชนก",
      "บรรดาทหาร"
    ],
    answer: "อำมาตย์"
  },
  {
    question: "พระมเหสีของพระอริฏฐชนกได้เสด็จหนีไปยังเมืองใด",
    choices: [
      "กาลจัมปากะ",
      "มิถิลา",
      "สุวรรณภูมิ",
      "ชายแดน"
    ],
    answer: "กาลจัมปากะ"
  },
  {
    question: "พระอินทร์ทรงแปลงกายเป็นชายชราขับเกวียน มาช่วยผู้ใด",
    choices: [
      "พระมหาชนก",
      "พระอริฏฐชนก",
      "พระมเหสีของพระอริฏฐชนก",
      "อำมาตย์"
    ],
    answer: "พระมเหสีของพระอริฏฐชนก"
  },
  {
    question: "มหาชนกกุมาร เป็นบุตรของผู้ใด",
    choices: [
      "พระโปลชนก",
      "พระอริฏฐชนก",
      "อำมาตย์",
      "จุติลงมาจากสวรรค์"
    ],
    answer: "พระอริฏฐชนก"
  },
  {
    question: "ผู้ใด เป็นอุปการะเลี้ยงดูพระมเหสีของพระอริฏฐชนก",
    choices: [
      "พราหมณ์",
      "ฤๅษี",
      "พระอินทร์",
      "พระมหาชนก"
    ],
    answer: "พราหมณ์"
  },
  {
    question: "พระมหาชนกกุมาร ได้ล่องเรือไปค้าขายที่เมืองใด",
    choices: [
      "สุวรรณภูมิ",
      "มิถิลา",
      "ชายแดน",
      "กาลจัมปากะ"
    ],
    answer: "สุวรรณภูมิ"
  }
];

// Store for result page
localStorage.setItem('questions', JSON.stringify(questions));

if (window.location.pathname.includes("quiz.html")) {
  const container = document.getElementById("quiz-container");

  questions.forEach((q, index) => {
    const qCard = document.createElement("div");
    qCard.classList.add("container");
    qCard.innerHTML = `
      <h3>ข้อ ${index + 1}: ${q.question}</h3>
      ${q.choices.map(choice => `
        <label style="display:block; text-align: left;">
          <input type="radio" name="q${index}" value="${choice}"> ${choice}
        </label>
      `).join("")}
    `;
    container.appendChild(qCard);
  });
}

function submitQuiz() {
  let score = 0;
  const userAnswers = [];

  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const answer = selected ? selected.value : "No Answer";
    userAnswers.push(answer);
    if (answer === questions[i].answer) {
      score++;
    }
  }

  localStorage.setItem("score", score);
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  window.location.href = "result.html";
}
