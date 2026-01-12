const todayString = new Date().toDateString(); 
const seed = todayString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
const dailyIndex = seed % cases.length;
const answer = cases[dailyIndex];

const maxAttempts = 15; 
const storageKey = "MEDGRUPOrdle_" + todayString.replace(/ /g, "_");

let state = JSON.parse(localStorage.getItem(storageKey)) || {
  guesses: [], 
  finished: false,
  won: false
};

const input = document.getElementById("guessInput");
const autocomplete = document.getElementById("autocomplete");
const rowsContainer = document.getElementById("rows");
const resultContainer = document.getElementById("result");
const attemptsSpan = document.getElementById("attempts");
const guessBtn = document.getElementById("guessBtn");

updateUI();
state.guesses.forEach(guessName => {
  const guessData = cases.find(c => c.name === guessName);
  if (guessData) renderRow(guessData);
});

if (state.finished) endGame(state.won);

input.addEventListener("input", () => {
  const val = input.value.toLowerCase();
  autocomplete.innerHTML = "";
  autocomplete.classList.add("hidden");
  if (!val) return;
  const matches = cases.filter(c => c.name.toLowerCase().includes(val) && !state.guesses.includes(c.name));
  if (matches.length > 0) {
    autocomplete.classList.remove("hidden");
    matches.forEach(c => {
      const div = document.createElement("div");
      div.textContent = c.name;
      div.onclick = () => { input.value = c.name; autocomplete.classList.add("hidden"); };
      autocomplete.appendChild(div);
    });
  }
});

guessBtn.onclick = () => {
  if (state.finished) return;
  const guessData = cases.find(c => c.name.toLowerCase() === input.value.toLowerCase());
  if (!guessData || state.guesses.includes(guessData.name)) return;

  state.guesses.push(guessData.name);
  renderRow(guessData);
  input.value = "";
  updateUI();

  if (guessData.name === answer.name) {
    state.finished = true; state.won = true; endGame(true);
  } else if (state.guesses.length >= maxAttempts) {
    state.finished = true; endGame(false);
  }
  saveState();
};

function updateUI() { attemptsSpan.textContent = `${state.guesses.length} / ${maxAttempts}`; }
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }

function renderRow(guess) {
  const row = document.createElement("div");
  row.className = "row";
  
  const getComparisonData = (arr1, arr2) => {
    const normalize = (s) => s.toLowerCase().trim();
    const nArr2 = arr2.map(normalize);
    const matches = arr1.filter(i => nArr2.includes(normalize(i)));
    
    if (matches.length === arr2.length && arr1.length === arr2.length) {
      return { status: "success", count: 0 };
    }
    return { 
      status: matches.length > 0 ? "partial" : "error", 
      count: matches.length 
    };
  };

  const symp = getComparisonData(guess.symptoms, answer.symptoms);
  const book = getComparisonData(guess.booklets, answer.booklets);

  row.innerHTML = `
    <div class="cell" data-label="Diagnóstico" style="border:1px solid #45b1c2">${guess.name}</div>
    
    <div class="cell ${symp.status}" data-label="Sintomas">
      ${guess.symptoms.join(", ")}
      ${symp.count > 0 ? `<span class="match-count">${symp.count}</span>` : ''}
    </div>

    <div class="cell ${guess.group === answer.group ? 'success' : 'error'}" data-label="Grupo de Risco">
      ${guess.group}
    </div>

    <div class="cell ${guess.area === answer.area ? 'success' : 'error'}" data-label="Área">
      ${guess.area}
    </div>

    <div class="cell ${book.status}" data-label="Apostilas">
      ${guess.booklets.join(", ")}
      ${book.count > 0 ? `<span class="match-count">${book.count}</span>` : ''}
    </div>
  `;
  rowsContainer.appendChild(row);
  row.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function endGame(won) {
  resultContainer.classList.remove("hidden");
  input.disabled = true;
  guessBtn.disabled = true;

  if (won) {
    resultContainer.innerHTML = `
      <h2>🎈 Parabéns! Diagnóstico Correto!</h2>
      <span class="answer-highlight">${answer.name}</span>
      <hr style="border: 0; border-top: 1px solid #333; width: 100%; margin: 10px 0;">
      <p>${answer.summary}</p>
    `;
  } else {
    resultContainer.innerHTML = `
      <h2>😔 Fim de jogo</h2>
      <p>O diagnóstico correto era:</p>
      <span class="answer-highlight" style="color: var(--error)">${answer.name}</span>
      <hr style="border: 0; border-top: 1px solid #333; width: 100%; margin: 10px 0;">
      <p>${answer.summary}</p>
    `;
  }
}