const ROUND_LENGTH = 8;
const TIME_PER_Q = 15;

let state = {
  subject: null, topic: null, pool: [], round: [], index: 0,
  score: 0, streak: 0, bestStreak: 0, timer: null, timeLeft: TIME_PER_Q,
};

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function render(html) { document.getElementById("quizAppRoot").innerHTML = html; }

function topBar(label) {
  return `
    <div class="qz-topbar">
      <div class="qz-brand">
        <div class="qz-brand-mark">BH</div>
        <div class="qz-brand-text">BrainyEdHub</div>
      </div>
      <div class="qz-preview-badge">${label}</div>
    </div>`;
}

function renderPicker() {
  const subjectKeys = Object.keys(QUESTION_BANK);
  const lastSubject = state.subject && subjectKeys.find(k => QUESTION_BANK[k].label === state.subject);
  const initialSubject = lastSubject || subjectKeys[0];
  const subjectOptions = subjectKeys
    .map(k => `<option value="${k}" ${k === initialSubject ? "selected" : ""}>${QUESTION_BANK[k].label}</option>`).join("");

  render(`
    ${topBar("Quiz Arena")}
    <div class="qz-screen">
      <div class="eyebrow">Pick a subject &amp; topic</div>
      <h1 class="qz-title">Ready to test yourself?</h1>
      <p class="qz-sub">${ROUND_LENGTH} questions, ${TIME_PER_Q} seconds each. Answer fast and build a streak for bonus points.</p>

      <label class="qz-field-label">Subject</label>
      <select class="qz-picker" id="subjectSelect" onchange="populateTopics()">${subjectOptions}</select>

      <label class="qz-field-label">Topic</label>
      <select class="qz-picker" id="topicSelect"></select>

      <button class="btn btn-primary qz-btn-block" onclick="startRound()">Start Quiz</button>

      <div class="qz-note">Questions are freshly shuffled from the full topic pool every time you play, so no two rounds are quite the same. ${Object.keys(QUESTION_BANK).length} subjects, ${Object.values(QUESTION_BANK).reduce((n, s) => n + Object.keys(s.topics).length, 0)} topics, ${Object.values(QUESTION_BANK).reduce((n, s) => n + Object.values(s.topics).reduce((m, t) => m + t.questions.length, 0), 0)} questions to practise with.</div>
    </div>
  `);
  populateTopics();
}

function populateTopics() {
  const subjectKey = document.getElementById("subjectSelect").value;
  const topics = QUESTION_BANK[subjectKey].topics;
  const topicSelect = document.getElementById("topicSelect");
  topicSelect.innerHTML = `<option value="all">All Topics (mixed)</option>` +
    Object.keys(topics).map(k => `<option value="${k}">${topics[k].label}</option>`).join("");

}

function startRound() {
  const subjectKey = document.getElementById("subjectSelect").value;
  const topicKey = document.getElementById("topicSelect").value;
  const subject = QUESTION_BANK[subjectKey];

  let pool = [];
  if (topicKey === "all") {
    Object.values(subject.topics).forEach(t => {
      t.questions.forEach(q => pool.push({ ...q, topicLabel: t.label }));
    });
  } else {
    subject.topics[topicKey].questions.forEach(q => pool.push({ ...q, topicLabel: subject.topics[topicKey].label }));
  }

  state.subject = subject.label;
  state.round = shuffle(pool).slice(0, Math.min(ROUND_LENGTH, pool.length));
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;

  askQuestion();
}

function askQuestion() {
  clearInterval(state.timer);
  state.timeLeft = TIME_PER_Q;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();

  const q = state.round[state.index];
  const shuffledOptions = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correct }));
  const shuffled = shuffle(shuffledOptions);
  state.currentShuffled = shuffled;

  renderQuestion(q, shuffled, false, null);

  state.timer = setInterval(() => {
    state.timeLeft -= 0.1;
    updateTimerBar();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      lockAnswer(-1);
    }
  }, 100);
}

function updateTimerBar() {
  const fill = document.getElementById("timerFill");
  if (!fill) return;
  const pct = Math.max(0, (state.timeLeft / TIME_PER_Q) * 100);
  fill.style.width = pct + "%";
  fill.className = "qz-timer-fill" + (pct < 25 ? " qz-danger" : pct < 55 ? " qz-warn" : "");
}

function renderQuestion(q, shuffled, answered, chosenIdx) {
  const optionsHtml = shuffled.map((o, i) => {
    let cls = "qz-option-btn";
    if (answered) {
      if (o.isCorrect) cls += " qz-correct";
      else if (i === chosenIdx) cls += " qz-wrong";
    }
    return `<button class="${cls}" ${answered ? "disabled" : ""} onclick="lockAnswer(${i})">${o.opt}</button>`;
  }).join("");

  render(`
    ${topBar("Quiz Arena")}
    <div class="qz-screen">
      <div class="qz-quiz-head">
        <div class="qz-quiz-meta">Question ${state.index + 1} of ${state.round.length}</div>
        <div class="qz-quiz-score">Score: ${state.score} &nbsp; <span class="qz-streak">\uD83D\uDD25 ${state.streak}</span></div>
      </div>
      <div class="qz-timer-track"><div class="qz-timer-fill" id="timerFill" style="width:100%"></div></div>

      <div class="qz-question-card">
        <div class="qz-question-topic">${q.topicLabel}</div>
        <div class="qz-question-text">${q.q}</div>
      </div>

      <div class="qz-options">${optionsHtml}</div>
      <div class="qz-feedback-line" id="feedbackLine"></div>
    </div>
  `);
}

function lockAnswer(chosenIdx) {
  clearInterval(state.timer);
  const q = state.round[state.index];
  const shuffled = state.currentShuffled;
  const correct = chosenIdx >= 0 && shuffled[chosenIdx].isCorrect;

  if (correct) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    const bonus = state.streak >= 3 ? 15 : 10;
    state.score += bonus;
  } else {
    state.streak = 0;
  }

  renderQuestion(q, shuffled, true, chosenIdx);
  const fb = document.getElementById("feedbackLine");
  if (fb) {
    if (correct) {
      fb.textContent = state.streak >= 3 ? "Correct! Streak bonus \u2014 +15" : "Correct! +10";
      fb.className = "feedback-line correct";
    } else if (chosenIdx === -1) {
      fb.textContent = "Time's up!";
      fb.className = "feedback-line wrong";
    } else {
      fb.textContent = "Not quite.";
      fb.className = "feedback-line wrong";
    }
  }

  setTimeout(() => {
    state.index += 1;
    if (state.index < state.round.length) {
      askQuestion();
    } else {
      renderResults();
    }
  }, 1400);
}

function renderResults() {
  const total = state.round.length;
  const correctCount = Math.round(state.score / 10 >= total ? total : state.score / 10);
  const pct = Math.round((state.score / (total * 15)) * 100);

  render(`
    ${topBar("Quiz Arena")}
    <div class="qz-screen">
      <div class="eyebrow">${state.subject} &mdash; Round complete</div>
      <div class="qz-results-score">
        <span class="qz-results-num">${state.score}</span><span class="qz-results-den"> pts</span>
        <div class="qz-results-label">out of a possible ${total * 15}</div>
      </div>
      <div class="qz-results-stats">
        <div class="qz-stat-card"><div class="qz-stat-val">${total}</div><div class="qz-stat-label">Questions</div></div>
        <div class="qz-stat-card"><div class="qz-stat-val">${state.bestStreak}</div><div class="qz-stat-label">Best Streak</div></div>
        <div class="qz-stat-card"><div class="qz-stat-val">${pct}%</div><div class="qz-stat-label">Score Rate</div></div>
      </div>
      <div class="qz-btn-row">
        <button class="btn btn-outline" onclick="renderPicker()">Change Topic</button>
        <button class="btn btn-primary" onclick="startRound()">Play Again</button>
      </div>
      <div class="qz-note">Scores reset each visit for now \u2014 no accounts needed to play.</div>
    </div>
  `);
}

renderPicker();
