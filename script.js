let currentIdx = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);

function loadQuestion() {
    const q = quizData[currentIdx];
    document.getElementById("progress").innerText = `第 ${currentIdx + 1} / ${quizData.length} 題`;
    document.getElementById("question-text").innerText = q.question;
    
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    
    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.innerText = opt;
        div.className = "option" + (userAnswers[currentIdx] === i ? " selected" : "");
        div.onclick = () => selectOption(i);
        container.appendChild(div);
    });

    document.getElementById("next-btn").innerText = currentIdx === quizData.length - 1 ? "提交" : "下一題";
}

function selectOption(idx) {
    userAnswers[currentIdx] = idx;
    loadQuestion();
}

function nextQuestion() {
    if (userAnswers[currentIdx] === null) return alert("請選擇一個答案！");
    
    if (currentIdx < quizData.length - 1) {
        currentIdx++;
        loadQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        currentIdx--;
        loadQuestion();
    }
}

function showResult() {
    score = userAnswers.reduce((acc, ans, i) => (ans === quizData[i].correct ? acc + 1 : acc), 0);
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score-display").innerText = `你的得分是：${score} / ${quizData.length}`;
}

loadQuestion();
