// ============================================================
// FORGE QUEST — APP LOGIC
// ============================================================

// ── STATE ───────────────────────────────────────────────────
let state = loadState();

function defaultState() {
  return {
    stats: { hustle: 0, expertise: 0, authority: 0, pipeline: 0, systems: 0 },
    completedTasks: [],
    completedLevels: [],
    totalMoney: 0,
    unlockedLevels: [1]
  };
}

function loadState() {
  try {
    const s = localStorage.getItem("forgequest_state");
    return s ? JSON.parse(s) : defaultState();
  } catch { return defaultState(); }
}

function saveState() {
  localStorage.setItem("forgequest_state", JSON.stringify(state));
}

function resetGame() {
  if (confirm("Reset all progress? This cannot be undone.")) {
    state = defaultState();
    saveState();
    renderHome();
  }
}

// ── NAVIGATION ──────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  el.classList.add("screen-enter");
  setTimeout(() => el.classList.remove("screen-enter"), 400);
}

function goHome() {
  renderHome();
  showScreen("screen-home");
}

// ── RENDER HOME ─────────────────────────────────────────────
function renderHome() {
  renderStats();
  renderMoney();
  renderLevelTrail();
}

function renderStats() {
  const bar = document.getElementById("home-stats");
  bar.innerHTML = Object.entries(STATS).map(([key, s]) => {
    const val = state.stats[key] || 0;
    const pct = Math.min(val / 30 * 100, 100);
    return `
      <div class="stat-pill" title="${s.desc}">
        <span class="stat-emoji">${s.emoji}</span>
        <div class="stat-info">
          <span class="stat-label">${s.label}</span>
          <div class="stat-bar-wrap">
            <div class="stat-bar-fill" style="width:${pct}%;background:${s.color}"></div>
          </div>
        </div>
        <span class="stat-val">${val}</span>
      </div>`;
  }).join("");
}

function renderMoney() {
  document.getElementById("total-money").textContent = "$" + state.totalMoney.toLocaleString();
}

function renderLevelTrail() {
  const trail = document.getElementById("level-trail");
  trail.innerHTML = "";

  LEVELS.forEach((level, i) => {
    const isUnlocked = state.unlockedLevels.includes(level.id);
    const isComplete = state.completedLevels.includes(level.id);

    const node = document.createElement("div");
    node.className = `level-node ${isComplete ? "complete" : isUnlocked ? "unlocked" : "locked"}`;
    node.style.setProperty("--lvl-color", level.color);

    const tasksDone = level.tasks.filter(t => state.completedTasks.includes(t.id)).length;
    const pct = Math.round(tasksDone / level.tasks.length * 100);

    node.innerHTML = `
      <div class="level-bubble" ${isUnlocked ? `onclick="openLevel(${level.id})"` : ""}>
        <div class="level-bubble-inner">
          <div class="level-emoji">${isComplete ? "✅" : level.emoji}</div>
          <div class="level-num">Level ${level.id}</div>
        </div>
        ${!isUnlocked ? '<div class="lock-icon">🔒</div>' : ""}
        ${isUnlocked && !isComplete ? `<div class="progress-ring"><svg viewBox="0 0 36 36"><circle class="ring-bg" cx="18" cy="18" r="15.9"/><circle class="ring-fill" cx="18" cy="18" r="15.9" stroke-dasharray="${pct} ${100-pct}" stroke="${level.color}"/></svg></div>` : ""}
      </div>
      <div class="level-label">
        <strong>${level.title}</strong>
        <span class="diff-badge diff-${level.difficultyRank}">${level.difficulty}</span>
        ${isComplete ? '<span class="done-tag">Done!</span>' : ""}
      </div>
    `;

    // connector
    if (i < LEVELS.length - 1) {
      const conn = document.createElement("div");
      conn.className = `level-connector ${isComplete ? "connector-done" : ""}`;
      trail.appendChild(node);
      trail.appendChild(conn);
    } else {
      trail.appendChild(node);
    }
  });
}

// ── OPEN LEVEL ───────────────────────────────────────────────
function openLevel(levelId) {
  const level = LEVELS.find(l => l.id === levelId);
  if (!level) return;

  const isComplete = state.completedLevels.includes(levelId);

  const content = document.getElementById("level-detail-content");
  content.innerHTML = `
    <div class="level-header" style="--lvl-color:${level.color}">
      <div class="level-header-emoji">${level.emoji}</div>
      <div class="level-header-info">
        <div class="level-header-meta">
          <span class="diff-badge diff-${level.difficultyRank}">${level.difficulty}</span>
          <span class="time-badge">⏱ ${level.timeframe}</span>
        </div>
        <h2>${level.title}</h2>
        <p>${level.subtitle}</p>
      </div>
    </div>

    <div class="tasks-list" id="tasks-list">
      ${level.tasks.map(task => renderTask(task, levelId)).join("")}
    </div>

    ${isComplete ? `<div class="level-done-banner">🏆 Level Complete!</div>` : ""}
  `;

  showScreen("screen-level");
}

function renderTask(task, levelId) {
  const done = state.completedTasks.includes(task.id);
  const statsHtml = Object.entries(task.statRewards).map(([key, val]) => {
    const s = STATS[key];
    return `<span class="reward-chip" style="background:${s.color}22;color:${s.color}">${s.emoji}+${val} ${s.label}</span>`;
  }).join("");

  const moneyHtml = task.moneyReward > 0
    ? `<span class="reward-chip money-chip">💰 +$${task.moneyReward.toLocaleString()} Real $$$</span>`
    : "";

  return `
    <div class="task-card ${done ? "task-done" : ""}" id="task-${task.id}">
      <div class="task-top">
        <span class="task-emoji">${task.emoji}</span>
        <div class="task-info">
          <h3 class="task-title">${task.title}</h3>
          <p class="task-desc">${task.desc}</p>
        </div>
      </div>
      <div class="task-rewards">${statsHtml}${moneyHtml}</div>
      ${done
        ? `<div class="task-complete-label">✅ Completed</div>`
        : `<button class="btn-task" onclick="completeTask('${task.id}', ${levelId})">Mark Complete</button>`
      }
    </div>
  `;
}

// ── COMPLETE TASK ────────────────────────────────────────────
function completeTask(taskId, levelId) {
  if (state.completedTasks.includes(taskId)) return;

  const level = LEVELS.find(l => l.id === levelId);
  const task = level.tasks.find(t => t.id === taskId);

  // Apply stat rewards
  Object.entries(task.statRewards).forEach(([key, val]) => {
    state.stats[key] = (state.stats[key] || 0) + val;
  });

  // Apply money reward
  state.totalMoney += task.moneyReward;
  state.completedTasks.push(taskId);
  saveState();

  // Show modal
  showTaskModal(task);

  // Check if level is done
  const allDone = level.tasks.every(t => state.completedTasks.includes(t.id));
  if (allDone && !state.completedLevels.includes(levelId)) {
    state.completedLevels.push(levelId);
    // Unlock next level
    const nextLevel = LEVELS.find(l => l.id === levelId + 1);
    if (nextLevel && !state.unlockedLevels.includes(nextLevel.id)) {
      state.unlockedLevels.push(nextLevel.id);
    }
    saveState();
    // After modal closes, show celebration
    pendingLevelComplete = levelId;
  }

  // Refresh task card
  const card = document.getElementById("task-" + taskId);
  if (card) {
    card.outerHTML = renderTask(task, levelId);
  }
}

let pendingLevelComplete = null;

function showTaskModal(task) {
  const statsHtml = Object.entries(task.statRewards).map(([key, val]) => {
    const s = STATS[key];
    return `<div class="modal-stat" style="color:${s.color}">${s.emoji} +${val} ${s.label}</div>`;
  }).join("");

  const moneyHtml = task.moneyReward > 0
    ? `<div class="modal-stat money-gain">💰 +$${task.moneyReward.toLocaleString()} added to your total!</div>`
    : "";

  document.getElementById("modal-emoji").textContent = task.emoji;
  document.getElementById("modal-title").textContent = task.title + " — Done!";
  document.getElementById("modal-body").textContent = "Task complete! Here's what you earned:";
  document.getElementById("modal-stats").innerHTML = statsHtml + moneyHtml;

  document.getElementById("task-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("task-modal").classList.add("hidden");
  if (pendingLevelComplete !== null) {
    const lvlId = pendingLevelComplete;
    pendingLevelComplete = null;
    showLevelComplete(lvlId);
  }
}

// ── LEVEL COMPLETE ───────────────────────────────────────────
function showLevelComplete(levelId) {
  const level = LEVELS.find(l => l.id === levelId);
  const nextLevel = LEVELS.find(l => l.id === levelId + 1);

  document.getElementById("complete-emoji").textContent = level.emoji;
  document.getElementById("complete-title").textContent = "Level " + levelId + " Complete!";
  document.getElementById("complete-sub").textContent = nextLevel
    ? `"${level.title}" is done! Next up: Level ${nextLevel.id} — ${nextLevel.title}`
    : "🎉 You've completed all current levels. The empire is built!";

  const allStats = {};
  level.tasks.forEach(t => {
    Object.entries(t.statRewards).forEach(([k, v]) => {
      allStats[k] = (allStats[k] || 0) + v;
    });
  });

  document.getElementById("stat-gains").innerHTML = Object.entries(allStats).map(([key, val]) => {
    const s = STATS[key];
    return `<div class="cmp-stat" style="background:${s.color}22;border:2px solid ${s.color}">
      <span>${s.emoji}</span><span>+${val} ${s.label}</span>
    </div>`;
  }).join("");

  showScreen("screen-complete");
  triggerConfetti();
}

// ── CONFETTI ─────────────────────────────────────────────────
function triggerConfetti() {
  const container = document.querySelector(".complete-bg");
  container.innerHTML = "";
  const colors = ["#FF6B35","#6C63FF","#00D9A0","#FFB700","#FF4DA6","#fff"];
  for (let i = 0; i < 80; i++) {
    const dot = document.createElement("div");
    dot.className = "confetti-dot";
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.animationDuration = (0.8 + Math.random() * 1.5) + "s";
    dot.style.animationDelay = (Math.random() * 0.8) + "s";
    dot.style.width = dot.style.height = (6 + Math.random() * 10) + "px";
    dot.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    container.appendChild(dot);
  }
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  goHome();
});
