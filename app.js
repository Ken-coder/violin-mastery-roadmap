const DAY_MS = 24 * 60 * 60 * 1000;

const milestones = [
  {
    id: "phase-0",
    title: "Phase 0: Setup and Orientation",
    duration: 7,
    practice: "Instrument setup, safe handling, accessories, tuning basics.",
    color: "#ff4f9a",
    goal: "Make sure your violin is playable and your body position is safe before serious practice begins.",
    tasks: [
      "Inspect bridge position, string height, pegs, fine tuners, bow tension, and rosin.",
      "Practice violin hold, bow hold, bow tightening and loosening, and safe case handling.",
      "Tune with a clip-on tuner or app using fine tuners only.",
      "Clean strings and body with a soft cloth after handling.",
      "Read or watch one beginner setup resource and write one note in your practice notebook."
    ],
    mastery: [
      "Violin can be held for 10 minutes without pain.",
      "Bow is rosined, tightened safely, and loosened after practice.",
      "You can name G, D, A, and E strings.",
      "You can tune with help from a tuner."
    ],
    resources: [
      ["Stentor Student I official product context", "https://www.stentormusic.com/products/stentor-student-i-violin-outfit/"],
      ["Fiddlerman: how to hold a bow", "https://fiddlerman.com/tutorials/beginners-tutorials/how-to-hold-a-bow/"],
      ["Violin Lounge: bow hold guide", "https://www.violinlounge.com/basic-violin-bow-hold-close-up-beginner-exercises-violin-lounge-tv-460/"]
    ]
  },
  {
    id: "phase-1",
    title: "Phase 1: Build the Body Map",
    duration: 28,
    practice: "20-30 minutes daily.",
    color: "#ff9f1c",
    goal: "Become comfortable holding the violin and bow without tension while producing clean open-string sound.",
    tasks: [
      "5 min: posture mirror check with relaxed shoulders, balanced head, straight left wrist, and curved bow hand.",
      "10 min: long slow bows on G, D, A, and E with a straight bow path.",
      "5 min: metronome rhythm on open strings using whole, half, quarter, and eighth notes.",
      "5 min: listening session with simple violin pieces.",
      "Write one sentence about tension, tone, or rhythm after practice."
    ],
    mastery: [
      "Clean open-string tone.",
      "Mostly straight bow.",
      "Simple rhythms counted steadily.",
      "No pain during short practice."
    ],
    resources: [
      ["Fiddlerman beginner violin tutorials", "https://fiddlerman.com/tutorials/beginners-tutorials/"],
      ["8notes beginner violin lessons", "https://www.8notes.com/school/lessons/violin/"],
      ["International Suzuki Association overview", "https://internationalsuzuki.org/"]
    ]
  },
  {
    id: "phase-2",
    title: "Phase 2: First Notes and First Songs",
    duration: 61,
    practice: "30-40 minutes daily.",
    color: "#20c997",
    goal: "Train the left hand, learn first notes, and begin simple melodies without sacrificing tone.",
    tasks: [
      "5 min: open-string tone warm-up.",
      "10 min: first, second, and third finger placement with curved fingers.",
      "10 min: D, A, or G major one-octave scale.",
      "10-15 min: short melody or beginner piece in small sections.",
      "5 min: sing a phrase before playing it, then check intonation."
    ],
    mastery: [
      "D, A, and G major one octave.",
      "5-10 simple pieces from memory or reading.",
      "Steady time with a metronome.",
      "Can hear clearly out-of-tune notes."
    ],
    resources: [
      ["8notes violin note reading and lessons", "https://www.8notes.com/violin/"],
      ["Violin Online: first position fingering", "https://www.violinonline.com/violinfirstposition.htm"],
      ["MusicTheory.net lessons", "https://www.musictheory.net/lessons"]
    ]
  },
  {
    id: "phase-3",
    title: "Phase 3: Real Beginner Violinist",
    duration: 92,
    practice: "40-60 minutes daily.",
    color: "#31a8ff",
    goal: "Play simple music cleanly with low second finger, fourth finger, slurs, dynamics, phrasing, and recording discipline.",
    tasks: [
      "10 min: long bows, open strings, and bow distribution.",
      "10 min: D, A, G, or C major scale; add natural minor later.",
      "10 min: finger patterns, bow changes, and string crossings.",
      "10 min: short etude or technical study.",
      "15-20 min: repertoire practice in small slow sections.",
      "Weekly: record one complete piece without restarting."
    ],
    mastery: [
      "Slow 2-octave G major.",
      "Fourth finger used sometimes.",
      "Basic sheet music read comfortably.",
      "Simple pieces played with dynamics.",
      "Complete recording made without restarting."
    ],
    resources: [
      ["ABRSM Performance Grades", "https://www.abrsm.org/en-gb/performance-grades"],
      ["Violin Lounge: tone and bowing resources", "https://www.violinlounge.com/category/violin-technique/bowing/"],
      ["IMSLP violin methods and studies", "https://imslp.org/wiki/Category:Methods"]
    ]
  },
  {
    id: "phase-4",
    title: "Phase 4: Early Intermediate Foundation",
    duration: 183,
    practice: "60 minutes daily.",
    color: "#7c4dff",
    goal: "Build fluency, musicality, confidence, sight-reading, 2-octave scales, arpeggios, and weekly performance habits.",
    tasks: [
      "Monday: scales and intonation.",
      "Tuesday: bowing and rhythm.",
      "Wednesday: repertoire.",
      "Thursday: etudes.",
      "Friday: sight-reading.",
      "Saturday: performance recording.",
      "Sunday: review and listening."
    ],
    mastery: [
      "2-octave scales and arpeggios developing.",
      "Cleaner slurs, staccato, and string crossings.",
      "Can play with accompaniment or backing track.",
      "Around ABRSM Grade 1-2 or RCM Preparatory-Level 2 depending on consistency."
    ],
    resources: [
      ["RCM syllabi and academic resources", "https://www.rcmusic.com/learning/examinations/academic-resources-and-policies/syllabi-and-syllabi-errata"],
      ["ABRSM bowed strings qualification specification", "https://www.abrsm.org/sites/default/files/2023-10/performance-grades-qual-spec-bowed-strings-2024-20230605-v2.pdf"],
      ["8notes sight-reading resources", "https://www.8notes.com/sight_reading/violin/"]
    ]
  },
  {
    id: "phase-5",
    title: "Phase 5: Year 2 Intermediate Player",
    duration: 365,
    practice: "75-90 minutes daily.",
    color: "#ff4f9a",
    goal: "Become musically useful: join ensembles, perform for small audiences, shift to 3rd position, and start careful vibrato.",
    tasks: [
      "15 min: 2-octave major/minor scales and arpeggios.",
      "15 min: martelé, staccato, legato, or hooked bowing.",
      "15 min: first-to-third-position shifting with guide fingers.",
      "10 min: slow vibrato preparation after intonation work.",
      "25-35 min: repertoire from Baroque, classical, folk, worship, pop, or ensemble parts.",
      "Weekly: sight-read and log one ensemble or performance goal."
    ],
    mastery: [
      "Can play in 1st and 3rd position.",
      "Basic vibrato on long notes.",
      "Performs 3-5 pieces confidently.",
      "Recovers from mistakes without stopping."
    ],
    resources: [
      ["8notes: introduction to changing position", "https://www.8notes.com/school/lessons/violin/introduction-to-changing-positions-violin.asp"],
      ["Broadbent: third position practice", "https://heatherkayeviolin.com/how-to-practice-shifting-to-third-position/"],
      ["Violin Lounge: vibrato guide", "https://www.violinlounge.com/can-it-be-too-early-to-start-learning-vibrato-yes/"]
    ]
  },
  {
    id: "phase-6",
    title: "Phase 6: Upper Intermediate / Pre-Advanced",
    duration: 730,
    practice: "90-120 minutes daily.",
    color: "#ff9f1c",
    goal: "Move from student player to performer with multiple positions, 3-octave work, stronger bow control, and ensemble fluency.",
    tasks: [
      "20 min: 3-octave scales, arpeggios, broken thirds, or chromatic scales.",
      "20 min: position work across 1st through 5th positions.",
      "20 min: spiccato, sautillé preparation, staccato, ricochet basics, or tone color.",
      "30-45 min: sonatas, concertos, short pieces, orchestra parts, or stylistic studies.",
      "10 min: musicianship notes on form, harmony, style, or interpretation.",
      "Weekly: rehearse or collaborate with another musician."
    ],
    mastery: [
      "New moderate piece learned independently.",
      "Multiple positions used calmly.",
      "Vibrato used musically.",
      "15-30 minutes of repertoire performed.",
      "Simple ensemble parts sight-read under pressure."
    ],
    resources: [
      ["IMSLP violin sonatas", "https://imslp.org/wiki/Category:For_violin,_piano"],
      ["Marnie Thies: violin positions videos", "https://www.proviolin.com/violin-position-videos-in-1st-through-7th-positions/"],
      ["Violin Lounge: bowing technique archive", "https://www.violinlounge.com/category/violin-technique/bowing/"]
    ]
  },
  {
    id: "phase-7",
    title: "Phase 7: Advanced / Stage Performer",
    duration: 1825,
    practice: "2-3 hours daily, depending on ambition.",
    color: "#20c997",
    goal: "Become polished, expressive, reliable, and stage-ready with advanced technique and full performance training.",
    tasks: [
      "20 min: tone and advanced bowing.",
      "30 min: 3-octave scales in all keys, double stops, or harmonics.",
      "30 min: etudes for passagework, shifting, chords, or bow strokes.",
      "60 min: recital repertoire, orchestral excerpts, chamber music, or genre work.",
      "15 min: performance run-through, memorization, or stage drill.",
      "10 min: reflection notes from recording review."
    ],
    mastery: [
      "Full recital program prepared.",
      "Emotional control in performance.",
      "Professionally useful sight-reading.",
      "Can teach beginner/intermediate players.",
      "Reliable ensemble playing and genre adaptation."
    ],
    resources: [
      ["IMSLP Bach violin works", "https://imslp.org/wiki/6_Violin_Sonatas_and_Partitas,_BWV_1001-1006_(Bach,_Johann_Sebastian)"],
      ["IMSLP orchestral excerpts search", "https://imslp.org/wiki/Category:Orchestral_excerpts"],
      ["The Strad: practice and performance articles", "https://www.thestrad.com/playing-and-teaching"]
    ]
  }
];

const state = {
  startDate: "",
  email: "debuggkim@gmail.com",
  alertTime: "20:00",
  checks: {},
  emailedMisses: {},
  emailConfig: {}
};

function loadState() {
  const saved = JSON.parse(localStorage.getItem("violinMasteryState") || "{}");
  Object.assign(state, saved);
  if (!state.startDate) state.startDate = new Date().toISOString().slice(0, 10);
}

function saveState() {
  localStorage.setItem("violinMasteryState", JSON.stringify(state));
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function totalDays() {
  return milestones.reduce((sum, item) => sum + item.duration, 0);
}

function milestoneStart(index) {
  const start = parseDate(state.startDate);
  const offset = milestones.slice(0, index).reduce((sum, item) => sum + item.duration, 0);
  return addDays(start, offset);
}

function dayKey(milestoneId, day, taskIndex) {
  return `${milestoneId}:day-${day}:task-${taskIndex}`;
}

function getDayTasks(milestone, day) {
  if (milestone.id === "phase-0") return milestone.tasks;
  if (milestone.id === "phase-4") {
    const weekly = milestone.tasks[(day - 1) % milestone.tasks.length];
    return [
      weekly,
      "10 min: tone warm-up and relaxed posture check.",
      "15 min: scales or arpeggios with tuner spot checks.",
      "20 min: repertoire or etude in small slow sections.",
      "5 min: reflection note and tomorrow's focus."
    ];
  }
  return milestone.tasks;
}

function renderCards() {
  const container = document.getElementById("milestoneCards");
  container.innerHTML = milestones.map((m, index) => {
    const start = milestoneStart(index);
    const end = addDays(start, m.duration - 1);
    const pct = milestoneProgress(m);
    return `
      <a class="milestone-card" href="#${m.id}" style="border-top-color:${m.color}">
        <span class="pill">${m.duration} days</span>
        <h3>${m.title}</h3>
        <p>${m.goal}</p>
        <p><strong>${formatDate(start)}</strong> to <strong>${formatDate(end)}</strong></p>
        <div class="progress-track"><span style="width:${pct}%; background:${m.color}"></span></div>
        <p>${pct}% checklist complete</p>
      </a>
    `;
  }).join("");
}

function renderMilestones() {
  const container = document.getElementById("milestonePages");
  container.innerHTML = milestones.map((m, index) => {
    const start = milestoneStart(index);
    const end = addDays(start, m.duration - 1);
    const options = Array.from({ length: m.duration }, (_, i) => `<option value="${i + 1}">Day ${i + 1} - ${formatDate(addDays(start, i))}</option>`).join("");
    const checklist = renderChecklist(m, 1);
    const mastery = m.mastery.map(item => `<li>${item}</li>`).join("");
    const resources = m.resources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("");
    return `
      <article class="milestone-page" id="${m.id}">
        <div class="milestone-banner" style="background:${m.color}">
          <span class="pill">${formatDate(start)} - ${formatDate(end)}</span>
          <h3>${m.title}</h3>
          <p>${m.goal}</p>
        </div>
        <div class="milestone-content">
          <div class="panel">
            <h4>Daily Activity Checklist</h4>
            <div class="daily-controls">
              <select aria-label="Choose day" data-day-select="${m.id}">${options}</select>
              <button class="button mini" type="button" data-mark-today="${m.id}">Today</button>
            </div>
            <div class="checklist" data-checklist="${m.id}">${checklist}</div>
          </div>
          <div class="panel">
            <h4>Milestone Targets</h4>
            <p><strong>Practice:</strong> ${m.practice}</p>
            <ul>${mastery}</ul>
            <h4>Helpful Resources</h4>
            <div class="resource-list">${resources}</div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderChecklist(milestone, day) {
  return getDayTasks(milestone, day).map((task, index) => {
    const key = dayKey(milestone.id, day, index);
    const checked = state.checks[key] ? "checked" : "";
    return `
      <label class="check-row">
        <input type="checkbox" data-check-key="${key}" ${checked}>
        <span>${task}</span>
      </label>
    `;
  }).join("");
}

function milestoneProgress(milestone) {
  let done = 0;
  let total = 0;
  for (let day = 1; day <= milestone.duration; day++) {
    const tasks = getDayTasks(milestone, day);
    total += tasks.length;
    tasks.forEach((_, index) => {
      if (state.checks[dayKey(milestone.id, day, index)]) done++;
    });
  }
  return total ? Math.round((done / total) * 100) : 0;
}

function overallTaskProgress() {
  let done = 0;
  let total = 0;
  milestones.forEach(m => {
    for (let day = 1; day <= m.duration; day++) {
      const tasks = getDayTasks(m, day);
      total += tasks.length;
      tasks.forEach((_, index) => {
        if (state.checks[dayKey(m.id, day, index)]) done++;
      });
    }
  });
  return total ? Math.round((done / total) * 100) : 0;
}

function currentRoadmapDay() {
  const start = parseDate(state.startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  return Math.floor((today - start) / DAY_MS) + 1;
}

function locateDay(roadmapDay) {
  let cursor = 0;
  for (const m of milestones) {
    if (roadmapDay <= cursor + m.duration) {
      return { milestone: m, day: roadmapDay - cursor };
    }
    cursor += m.duration;
  }
  const last = milestones[milestones.length - 1];
  return { milestone: last, day: last.duration };
}

function updateDashboard() {
  const start = parseDate(state.startDate);
  const finish = addDays(start, totalDays() - 1);
  const elapsed = Math.max(0, Math.min(totalDays(), currentRoadmapDay()));
  const datePct = Math.round((elapsed / totalDays()) * 100);
  const taskPct = overallTaskProgress();
  const missed = findMissedDays();

  document.getElementById("finishDate").textContent = formatDate(finish);
  document.getElementById("dateProgressText").textContent = `${datePct}%`;
  document.getElementById("dateProgressBar").style.width = `${datePct}%`;
  document.getElementById("taskProgressText").textContent = `${taskPct}%`;
  document.getElementById("taskProgressBar").style.width = `${taskPct}%`;
  document.getElementById("missedCount").textContent = `${missed.length} day${missed.length === 1 ? "" : "s"}`;
}

function findMissedDays() {
  const now = new Date();
  const [hour, minute] = state.alertTime.split(":").map(Number);
  const checkMoment = new Date(now);
  checkMoment.setHours(hour, minute, 0, 0);
  const maxRoadmapDay = currentRoadmapDay() - (now >= checkMoment ? 0 : 1);
  const missed = [];

  if (maxRoadmapDay < 1) return missed;

  for (let roadmapDay = 1; roadmapDay <= Math.min(maxRoadmapDay, totalDays()); roadmapDay++) {
    const { milestone, day } = locateDay(roadmapDay);
    const tasks = getDayTasks(milestone, day);
    const complete = tasks.every((_, index) => state.checks[dayKey(milestone.id, day, index)]);
    if (!complete) missed.push({ roadmapDay, milestone, day, tasks });
  }
  return missed;
}

async function sendMissedAlert(missed) {
  if (!missed.length) {
    setAlertStatus("No missed days found.");
    return;
  }
  const newMisses = missed.filter(item => !state.emailedMisses[`roadmap-day-${item.roadmapDay}`]);
  if (!newMisses.length) {
    setAlertStatus("Missed days were already flagged. No duplicate email prepared.");
    return;
  }

  const subject = `Violin practice missed: ${newMisses.length} day(s)`;
  const message = newMisses.map(item => {
    const pending = item.tasks.filter((_, index) => !state.checks[dayKey(item.milestone.id, item.day, index)]);
    return `Roadmap day ${item.roadmapDay}: ${item.milestone.title}, day ${item.day}\nPending:\n- ${pending.join("\n- ")}`;
  }).join("\n\n");

  const cfg = state.emailConfig || {};
  if (cfg.key && cfg.service && cfg.template) {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: cfg.service,
          template_id: cfg.template,
          user_id: cfg.key,
          template_params: { to_email: state.email, subject, message }
        })
      });
      if (!response.ok) throw new Error(`EmailJS status ${response.status}`);
      newMisses.forEach(item => state.emailedMisses[`roadmap-day-${item.roadmapDay}`] = true);
      saveState();
      setAlertStatus(`Email alert sent to ${state.email}.`);
      return;
    } catch (error) {
      console.warn(error);
      setAlertStatus("EmailJS send failed. Opening an email draft instead.");
    }
  }

  const mailto = `mailto:${encodeURIComponent(state.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailto;
  newMisses.forEach(item => state.emailedMisses[`roadmap-day-${item.roadmapDay}`] = true);
  saveState();
}

function setAlertStatus(message) {
  const status = document.getElementById("alertStatus");
  if (status) status.textContent = message;
}

function hasEmailConfig() {
  const cfg = state.emailConfig || {};
  return Boolean(cfg.key && cfg.service && cfg.template);
}

function startAutomaticAlertLoop() {
  const check = () => {
    const missed = findMissedDays();
    updateDashboard();
    if (!missed.length) return;
    if (hasEmailConfig()) {
      sendMissedAlert(missed);
      return;
    }
    setAlertStatus(`${missed.length} missed day(s) detected. Add EmailJS settings or click Check Now to prepare an email draft.`);
  };
  check();
  window.setInterval(check, 60 * 1000);
}

function bindEvents() {
  document.getElementById("setupForm").addEventListener("submit", event => {
    event.preventDefault();
    state.startDate = document.getElementById("startDate").value;
    state.email = document.getElementById("alertEmail").value;
    state.alertTime = document.getElementById("alertTime").value;
    saveState();
    renderAll();
  });

  document.addEventListener("change", event => {
    if (event.target.matches("[data-check-key]")) {
      state.checks[event.target.dataset.checkKey] = event.target.checked;
      saveState();
      renderCards();
      updateDashboard();
    }
    if (event.target.matches("[data-day-select]")) {
      const milestone = milestones.find(item => item.id === event.target.dataset.daySelect);
      const list = document.querySelector(`[data-checklist="${milestone.id}"]`);
      list.innerHTML = renderChecklist(milestone, Number(event.target.value));
    }
  });

  document.addEventListener("click", event => {
    const target = event.target.closest("[data-mark-today]");
    if (!target) return;
    const milestone = milestones.find(item => item.id === target.dataset.markToday);
    const location = locateDay(Math.max(1, currentRoadmapDay()));
    const select = document.querySelector(`[data-day-select="${milestone.id}"]`);
    select.value = location.milestone.id === milestone.id ? location.day : 1;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });

  document.getElementById("runAlertCheck").addEventListener("click", () => {
    const missed = findMissedDays();
    updateDashboard();
    sendMissedAlert(missed);
  });

  document.getElementById("saveEmailConfig").addEventListener("click", () => {
    state.emailConfig = {
      key: document.getElementById("emailJsKey").value.trim(),
      service: document.getElementById("emailJsService").value.trim(),
      template: document.getElementById("emailJsTemplate").value.trim()
    };
    saveState();
    alert("Email service settings saved in this browser.");
  });
}

function renderAll() {
  document.getElementById("startDate").value = state.startDate;
  document.getElementById("alertEmail").value = state.email;
  document.getElementById("alertTime").value = state.alertTime;
  document.getElementById("emailJsKey").value = state.emailConfig?.key || "";
  document.getElementById("emailJsService").value = state.emailConfig?.service || "";
  document.getElementById("emailJsTemplate").value = state.emailConfig?.template || "";
  renderCards();
  renderMilestones();
  updateDashboard();
}

loadState();
bindEvents();
renderAll();
startAutomaticAlertLoop();
