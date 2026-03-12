
const QUESTIONS = [{"id": 1, "dimension": "activation", "text": "Dans les moments importants, mon niveau d’énergie augmente."}, {"id": 2, "dimension": "activation", "text": "La pression peut perturber mes gestes techniques."}, {"id": 3, "dimension": "activation", "text": "L’enjeu me donne envie de me dépasser."}, {"id": 4, "dimension": "activation", "text": "Avant une compétition, je ressens une tension physique."}, {"id": 5, "dimension": "activation", "text": "La pression me rend plus concentré."}, {"id": 6, "dimension": "activation", "text": "Je ressens parfois un blocage dans les moments décisifs."}, {"id": 7, "dimension": "activation", "text": "Les situations difficiles stimulent ma performance."}, {"id": 8, "dimension": "activation", "text": "Je me sens à l’aise quand l’enjeu est élevé."}, {"id": 9, "dimension": "activation", "text": "Mon corps devient tendu sous pression."}, {"id": 10, "dimension": "activation", "text": "Les moments importants me donnent de l’énergie."}, {"id": 11, "dimension": "activation", "text": "Je perds parfois mes moyens dans les moments clés."}, {"id": 12, "dimension": "activation", "text": "La pression me pousse à me surpasser."}, {"id": 13, "dimension": "activation", "text": "Je garde mon niveau de jeu malgré l’enjeu."}, {"id": 14, "dimension": "activation", "text": "Mon rythme cardiaque augmente fortement avant une compétition."}, {"id": 15, "dimension": "activation", "text": "L’enjeu influence fortement mon niveau d’activation."}, {"id": 16, "dimension": "activation", "text": "Je peux performer malgré la pression."}, {"id": 17, "dimension": "attention", "text": "Je peux rester concentré longtemps pendant un match."}, {"id": 18, "dimension": "attention", "text": "Le bruit peut me déconcentrer."}, {"id": 19, "dimension": "attention", "text": "Je sais me reconcentrer rapidement."}, {"id": 20, "dimension": "attention", "text": "Après une erreur, mon attention revient vite."}, {"id": 21, "dimension": "attention", "text": "Je suis attentif aux détails du jeu."}, {"id": 22, "dimension": "attention", "text": "Je pense parfois à autre chose pendant l’action."}, {"id": 23, "dimension": "attention", "text": "Je reste concentré malgré les perturbations."}, {"id": 24, "dimension": "attention", "text": "Je peux focaliser toute mon attention sur une action."}, {"id": 25, "dimension": "attention", "text": "Mon esprit peut parfois s’échapper du moment présent."}, {"id": 26, "dimension": "attention", "text": "Je suis capable de maintenir ma concentration."}, {"id": 27, "dimension": "attention", "text": "Je perds parfois le fil du jeu."}, {"id": 28, "dimension": "attention", "text": "Je reviens rapidement à l’instant présent."}, {"id": 29, "dimension": "attention", "text": "Je suis attentif aux signaux du jeu."}, {"id": 30, "dimension": "attention", "text": "Les distractions peuvent me perturber."}, {"id": 31, "dimension": "attention", "text": "Je sais retrouver ma concentration rapidement."}, {"id": 32, "dimension": "attention", "text": "Mon attention est stable pendant la performance."}, {"id": 33, "dimension": "regulation", "text": "Mes émotions influencent ma performance."}, {"id": 34, "dimension": "regulation", "text": "Je sais calmer mon stress."}, {"id": 35, "dimension": "regulation", "text": "Une frustration peut rester longtemps dans ma tête."}, {"id": 36, "dimension": "regulation", "text": "Je retrouve rapidement mon calme."}, {"id": 37, "dimension": "regulation", "text": "Je sais transformer une erreur en motivation."}, {"id": 38, "dimension": "regulation", "text": "Je peux perdre mon calme en compétition."}, {"id": 39, "dimension": "regulation", "text": "Je régule mes émotions efficacement."}, {"id": 40, "dimension": "regulation", "text": "Je ressens fortement les émotions."}, {"id": 41, "dimension": "regulation", "text": "Je sais respirer pour me calmer."}, {"id": 42, "dimension": "regulation", "text": "Les émotions peuvent perturber mon jeu."}, {"id": 43, "dimension": "regulation", "text": "Je retrouve rapidement mon équilibre émotionnel."}, {"id": 44, "dimension": "regulation", "text": "Je peux rester calme sous pression."}, {"id": 45, "dimension": "regulation", "text": "Je gère bien la frustration."}, {"id": 46, "dimension": "regulation", "text": "Mes émotions influencent mon comportement pendant le jeu."}, {"id": 47, "dimension": "regulation", "text": "Je sais prendre du recul après une erreur."}, {"id": 48, "dimension": "regulation", "text": "Je retrouve rapidement mon équilibre mental."}, {"id": 49, "dimension": "engagement", "text": "Je m’entraîne même quand je n’ai pas envie."}, {"id": 50, "dimension": "engagement", "text": "Je me fixe des objectifs ambitieux."}, {"id": 51, "dimension": "engagement", "text": "Les difficultés me motivent."}, {"id": 52, "dimension": "engagement", "text": "Je persévère malgré les obstacles."}, {"id": 53, "dimension": "engagement", "text": "J’aime progresser dans mon sport."}, {"id": 54, "dimension": "engagement", "text": "Je travaille mes points faibles."}, {"id": 55, "dimension": "engagement", "text": "Je suis motivé par les défis."}, {"id": 56, "dimension": "engagement", "text": "Je m’investis dans mon entraînement."}, {"id": 57, "dimension": "engagement", "text": "Je continue même après un échec."}, {"id": 58, "dimension": "engagement", "text": "J’ai envie de progresser constamment."}, {"id": 59, "dimension": "engagement", "text": "Je me donne à fond à l’entraînement."}, {"id": 60, "dimension": "engagement", "text": "Je suis déterminé à atteindre mes objectifs."}, {"id": 61, "dimension": "engagement", "text": "Je reste engagé malgré les difficultés."}, {"id": 62, "dimension": "engagement", "text": "J’aime relever des défis sportifs."}, {"id": 63, "dimension": "engagement", "text": "La progression me motive."}, {"id": 64, "dimension": "engagement", "text": "Je suis persévérant."}, {"id": 65, "dimension": "cognition", "text": "J’aime comprendre une technique avant de l’utiliser."}, {"id": 66, "dimension": "cognition", "text": "J’apprends en observant les autres joueurs."}, {"id": 67, "dimension": "cognition", "text": "J’analyse souvent mes performances."}, {"id": 68, "dimension": "cognition", "text": "Je me fie à mon intuition dans le jeu."}, {"id": 69, "dimension": "cognition", "text": "Je réfléchis aux stratégies de jeu."}, {"id": 70, "dimension": "cognition", "text": "J’apprends en expérimentant."}, {"id": 71, "dimension": "cognition", "text": "Je cherche à comprendre mes erreurs."}, {"id": 72, "dimension": "cognition", "text": "Je me fie à mes sensations."}, {"id": 73, "dimension": "cognition", "text": "J’aime analyser mes actions."}, {"id": 74, "dimension": "cognition", "text": "J’observe beaucoup les situations de jeu."}, {"id": 75, "dimension": "cognition", "text": "Je réfléchis aux solutions possibles."}, {"id": 76, "dimension": "cognition", "text": "Je me fie souvent à mon instinct."}, {"id": 77, "dimension": "cognition", "text": "J’aime comprendre la logique du jeu."}, {"id": 78, "dimension": "cognition", "text": "J’analyse les situations avant d’agir."}, {"id": 79, "dimension": "cognition", "text": "Je fais confiance à mon intuition."}, {"id": 80, "dimension": "cognition", "text": "J’apprends par l’expérience."}, {"id": 81, "dimension": "cognition", "text": "J’aime structurer ma progression."}, {"id": 82, "dimension": "cognition", "text": "J’improvise facilement."}, {"id": 83, "dimension": "action", "text": "Je préfère répéter un geste pour le maîtriser."}, {"id": 84, "dimension": "action", "text": "Je suis performant quand je joue instinctivement."}, {"id": 85, "dimension": "action", "text": "Je ressens beaucoup mon corps dans le mouvement."}, {"id": 86, "dimension": "action", "text": "Je m’adapte facilement aux situations imprévues."}, {"id": 87, "dimension": "action", "text": "J’aime une technique précise."}, {"id": 88, "dimension": "action", "text": "Je joue mieux quand je suis libre."}, {"id": 89, "dimension": "action", "text": "Je ressens le rythme du jeu."}, {"id": 90, "dimension": "action", "text": "Je m’adapte rapidement aux changements."}, {"id": 91, "dimension": "action", "text": "Je cherche la précision technique."}, {"id": 92, "dimension": "action", "text": "Je joue de manière spontanée."}, {"id": 93, "dimension": "action", "text": "Je ressens mes appuis pendant l’action."}, {"id": 94, "dimension": "action", "text": "Je m’ajuste facilement aux situations."}, {"id": 95, "dimension": "action", "text": "Je répète pour améliorer la technique."}, {"id": 96, "dimension": "action", "text": "Je joue de manière instinctive."}, {"id": 97, "dimension": "action", "text": "Je ressens finement le mouvement."}, {"id": 98, "dimension": "action", "text": "Je m’adapte aux imprévus."}, {"id": 99, "dimension": "action", "text": "Je cherche la maîtrise technique."}, {"id": 100, "dimension": "action", "text": "Je suis efficace dans le jeu spontané."}];
const DIMENSIONS = {"activation": "Activation", "attention": "Attention", "regulation": "Régulation", "engagement": "Engagement", "cognition": "Cognition", "action": "Action"};
const REVERSE_IDS = new Set([2, 4, 6, 9, 11, 14, 18, 22, 25, 27, 30, 33, 35, 38, 40, 42, 46]);
const ANALYTICAL_IDS = new Set([65, 67, 69, 71, 73, 75, 77, 78, 81]);
const INTUITIVE_IDS = new Set([68, 70, 72, 76, 79, 80, 82, 66, 74]);
const TECHNICAL_IDS = new Set([83, 87, 91, 95, 99, 85, 93, 97, 89]);
const ADAPTIVE_IDS = new Set([84, 86, 88, 90, 92, 94, 96, 98, 100]);

const scaleLabels = {1:'Jamais',2:'Rarement',3:'Parfois',4:'Souvent',5:'Toujours'};
let currentIndex = 0;
let answers = {};

const els = {
  startBtn: document.getElementById('startBtn'),
  loadDemoBtn: document.getElementById('loadDemoBtn'),
  metaCard: document.getElementById('metaCard'),
  testCard: document.getElementById('testCard'),
  resultsCard: document.getElementById('resultsCard'),
  questionCounter: document.getElementById('questionCounter'),
  dimensionBadge: document.getElementById('dimensionBadge'),
  questionText: document.getElementById('questionText'),
  scale: document.getElementById('scale'),
  progressBar: document.getElementById('progressBar'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  athleteName: document.getElementById('athleteName'),
  athleteSport: document.getElementById('athleteSport'),
  athleteAge: document.getElementById('athleteAge'),
  assessmentDate: document.getElementById('assessmentDate'),
  identityLine: document.getElementById('identityLine'),
  mainProfile: document.getElementById('mainProfile'),
  secondaryProfile: document.getElementById('secondaryProfile'),
  profileText: document.getElementById('profileText'),
  scoreGrid: document.getElementById('scoreGrid'),
  strengthsList: document.getElementById('strengthsList'),
  watchoutsList: document.getElementById('watchoutsList'),
  planList: document.getElementById('planList'),
  radarCanvas: document.getElementById('radarCanvas'),
  exportJsonBtn: document.getElementById('exportJsonBtn'),
  printBtn: document.getElementById('printBtn'),
  restartBtn: document.getElementById('restartBtn'),
};

function init() {
  const saved = JSON.parse(localStorage.getItem('a4p_mpm_state') || '{}');
  answers = saved.answers || {};
  currentIndex = saved.currentIndex || 0;
  if (!els.assessmentDate.value) els.assessmentDate.value = new Date().toISOString().slice(0,10);
  if (saved.meta) {
    els.athleteName.value = saved.meta.name || '';
    els.athleteSport.value = saved.meta.sport || '';
    els.athleteAge.value = saved.meta.age || '';
    els.assessmentDate.value = saved.meta.date || els.assessmentDate.value;
  }
  attachEvents();
}

function saveState() {
  localStorage.setItem('a4p_mpm_state', JSON.stringify({
    answers,
    currentIndex,
    meta: {
      name: els.athleteName.value,
      sport: els.athleteSport.value,
      age: els.athleteAge.value,
      date: els.assessmentDate.value
    }
  }));
}

function attachEvents() {
  els.startBtn.addEventListener('click', () => {
    els.metaCard.classList.remove('hidden');
    els.testCard.classList.remove('hidden');
    els.resultsCard.classList.add('hidden');
    renderQuestion();
    window.scrollTo({top: els.testCard.offsetTop - 12, behavior:'smooth'});
  });

  els.loadDemoBtn.addEventListener('click', () => {
    answers = {};
    QUESTIONS.forEach(q => {
      const base = {activation:4, attention:3, regulation:3, engagement:5, cognition:4, action:4}[q.dimension];
      answers[q.id] = Math.max(1, Math.min(5, base + (q.id % 3 === 0 ? -1 : 0)));
    });
    showResults();
  });

  [els.athleteName, els.athleteSport, els.athleteAge, els.assessmentDate].forEach(el => {
    el.addEventListener('input', saveState);
    el.addEventListener('change', saveState);
  });

  els.prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      saveState();
      renderQuestion();
    }
  });

  els.nextBtn.addEventListener('click', () => {
    const q = QUESTIONS[currentIndex];
    if (!answers[q.id]) {
      alert('Sélectionne une réponse pour continuer.');
      return;
    }
    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex++;
      saveState();
      renderQuestion();
    } else {
      showResults();
    }
  });

  els.exportJsonBtn.addEventListener('click', exportJSON);
  els.printBtn.addEventListener('click', () => window.print());
  els.restartBtn.addEventListener('click', restart);
}

function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  els.questionCounter.textContent = `Question ${currentIndex + 1} / ${QUESTIONS.length}`;
  els.dimensionBadge.textContent = DIMENSIONS[q.dimension];
  els.questionText.textContent = q.text;
  els.progressBar.style.width = `${(currentIndex / QUESTIONS.length) * 100}%`;
  els.scale.innerHTML = '';
  for (let score = 1; score <= 5; score++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = answers[q.id] === score ? 'active' : '';
    btn.innerHTML = `<div>${score}</div><small>${scaleLabels[score]}</small>`;
    btn.addEventListener('click', () => {
      answers[q.id] = score;
      saveState();
      renderQuestion();
    });
    els.scale.appendChild(btn);
  }
  els.prevBtn.disabled = currentIndex === 0;
  els.nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? 'Voir mes résultats' : 'Suivant';
}

function transformedValue(qid, value) {
  return REVERSE_IDS.has(qid) ? 6 - value : value;
}

function computeScores() {
  const raw = {activation: [], attention: [], regulation: [], engagement: [], cognition: [], action: []};
  QUESTIONS.forEach(q => {
    const value = Number(answers[q.id] || 0);
    raw[q.dimension].push(value ? transformedValue(q.id, value) : 0);
  });
  const scores = {};
  Object.entries(raw).forEach(([dim, vals]) => {
    const answered = vals.filter(v => v > 0);
    const total = answered.reduce((a,b) => a + b, 0);
    const max = answered.length * 5;
    scores[dim] = answered.length ? Math.round((total / max) * 100) : 0;
  });
  const cognitionBreakdown = calcSubscale(ANALYTICAL_IDS, INTUITIVE_IDS);
  const actionBreakdown = calcSubscale(TECHNICAL_IDS, ADAPTIVE_IDS);
  return { scores, cognitionBreakdown, actionBreakdown };
}

function calcSubscale(setA, setB) {
  let a = 0, b = 0, countA = 0, countB = 0;
  QUESTIONS.forEach(q => {
    const val = Number(answers[q.id] || 0);
    if (!val) return;
    if (setA.has(q.id)) { a += val; countA++; }
    if (setB.has(q.id)) { b += val; countB++; }
  });
  const scoreA = countA ? Math.round((a / (countA * 5)) * 100) : 0;
  const scoreB = countB ? Math.round((b / (countB * 5)) * 100) : 0;
  return { a: scoreA, b: scoreB };
}

function pickProfiles(scores, cognitionBreakdown, actionBreakdown) {
  const activation = scores.activation;
  const attention = scores.attention;
  const regulation = scores.regulation;
  const engagement = scores.engagement;
  const analytic = cognitionBreakdown.a;
  const intuitive = cognitionBreakdown.b;
  const technical = actionBreakdown.a;
  const adaptive = actionBreakdown.b;

  const candidates = [
    { name:'Compétiteur', value:(activation*0.45 + engagement*0.35 + attention*0.2), text:'Le joueur mobilise bien son énergie dans l’enjeu et s’engage fortement dans l’action.' },
    { name:'Régulateur', value:(regulation*0.5 + attention*0.3 + engagement*0.2), text:'Le joueur retrouve assez vite son calme et sa stabilité après les perturbations.' },
    { name:'Stratège', value:(analytic*0.45 + attention*0.2 + regulation*0.15 + engagement*0.2), text:'Le joueur comprend, anticipe et organise son jeu avec lucidité.' },
    { name:'Technicien', value:(technical*0.45 + analytic*0.2 + attention*0.2 + engagement*0.15), text:'Le joueur recherche la précision, la répétition utile et la maîtrise du geste.' },
    { name:'Créatif', value:(adaptive*0.35 + intuitive*0.35 + activation*0.15 + engagement*0.15), text:'Le joueur performe quand il dispose de liberté, d’adaptation et d’élan.' },
    { name:'Endurant', value:(engagement*0.5 + regulation*0.2 + attention*0.15 + activation*0.15), text:'Le joueur avance avec persévérance et capacité à tenir dans la durée.' },
    { name:'Méthodique', value:(analytic*0.35 + technical*0.3 + regulation*0.2 + attention*0.15), text:'Le joueur progresse dans un cadre clair, structuré et répétable.' },
    { name:'Instinctif', value:(adaptive*0.4 + intuitive*0.3 + activation*0.2 + attention*0.1), text:'Le joueur agit vite, capte les opportunités et se met en mouvement spontanément.' },
    { name:'Équilibré', value:(activation + attention + regulation + engagement + analytic + adaptive)/6, text:'Le joueur présente un fonctionnement globalement homogène sur l’ensemble des dimensions.' }
  ];

  const sorted = [...candidates].sort((x,y) => y.value - x.value);
  return sorted.slice(0,2);
}

function buildNarrative(main, secondary, scores, cognitionBreakdown, actionBreakdown) {
  const cog = cognitionBreakdown.a >= cognitionBreakdown.b ? 'plutôt analytique' : 'plutôt intuitif';
  const act = actionBreakdown.a >= actionBreakdown.b ? 'avec une dominante technique' : 'avec une dominante adaptative';
  const strongest = Object.entries(scores).sort((a,b) => b[1]-a[1])[0];
  const weakest = Object.entries(scores).sort((a,b) => a[1]-b[1])[0];
  return `Profil principal : <strong>${main.name}</strong>. Profil secondaire : <strong>${secondary.name}</strong>.<br><br>Le joueur présente une dominante ${cog} et agit ${act}. Sa dimension la plus haute est <strong>${DIMENSIONS[strongest[0]]}</strong> (${strongest[1]}/100), tandis que son principal axe de progression se situe sur <strong>${DIMENSIONS[weakest[0]]}</strong> (${weakest[1]}/100). ${main.text} ${secondary.text}`;
}

function recommendations(scores, cognitionBreakdown, actionBreakdown) {
  const strengths = [];
  const watchouts = [];
  const plan = [];

  if (scores.activation >= 70) strengths.push("Bonne mobilisation énergétique dans les moments d’enjeu.");
  else if (scores.activation <= 55) watchouts.push("L’activation compétitive peut être insuffisante ou irrégulière.");
  else strengths.push("Activation globalement adaptée à la performance.");

  if (scores.attention >= 70) strengths.push("Stabilité attentionnelle utile pour rester dans l’instant.");
  else watchouts.push("La concentration peut décrocher après perturbation ou distraction.");
  plan.push(scores.attention < 70 ? "Installer une routine de recentrage de 5 à 10 secondes avant chaque action clé." : "Entretenir les routines de concentration déjà efficaces.");

  if (scores.regulation >= 70) strengths.push("Bonne capacité à revenir au calme après erreur ou tension.");
  else watchouts.push("La régulation émotionnelle mérite un travail ciblé après erreur ou frustration.");
  plan.push(scores.regulation < 70 ? "Travailler respiration 4-6, mot-clé de reset et débrief express après erreur." : "Consolider les stratégies de retour au calme en situation réelle.");

  if (scores.engagement >= 75) strengths.push("Engagement et persévérance élevés dans la progression.");
  else watchouts.push("La motivation ou la constance peuvent varier selon le contexte.");
  plan.push(scores.engagement < 75 ? "Clarifier objectifs courts, indicateurs de progrès et contrat d’engagement hebdomadaire." : "Utiliser l’engagement élevé comme levier de leadership et de régularité.");

  if (cognitionBreakdown.a >= cognitionBreakdown.b) strengths.push("Le joueur apprend bien quand il comprend et structure le jeu.");
  else strengths.push("Le joueur apprend bien par sensation, intuition et adaptation.");
  plan.push(cognitionBreakdown.a >= cognitionBreakdown.b ? "Proposer consignes claires, repères techniques et temps d’analyse vidéo." : "Proposer mises en situation, feedback sensoriel et liberté d’essai.");

  if (actionBreakdown.a >= actionBreakdown.b) strengths.push("Dominante technique utile pour la précision et la répétition.");
  else strengths.push("Dominante adaptative utile pour la spontanéité et l’ajustement.");
  plan.push(actionBreakdown.a >= actionBreakdown.b ? "Conserver des repères simples et répétables avant d’ouvrir l’adaptation." : "Démarrer avec un cadre léger puis laisser de la liberté dans l’exécution.");

  return { strengths: strengths.slice(0,5), watchouts: watchouts.slice(0,5), plan: plan.slice(0,5) };
}

function showResults() {
  const unanswered = QUESTIONS.filter(q => !answers[q.id]);
  if (unanswered.length) {
    const ok = confirm(`Il reste ${unanswered.length} question(s) sans réponse. Les calculs seront faits uniquement sur les questions répondues. Continuer ?`);
    if (!ok) return;
  }
  saveState();
  const { scores, cognitionBreakdown, actionBreakdown } = computeScores();
  const [main, secondary] = pickProfiles(scores, cognitionBreakdown, actionBreakdown);
  const recos = recommendations(scores, cognitionBreakdown, actionBreakdown);

  els.metaCard.classList.remove('hidden');
  els.testCard.classList.add('hidden');
  els.resultsCard.classList.remove('hidden');

  const name = els.athleteName.value || 'Sportif';
  const sport = els.athleteSport.value || 'Sport non renseigné';
  const age = els.athleteAge.value ? `${els.athleteAge.value} ans` : '';
  const date = els.assessmentDate.value || '';
  els.identityLine.textContent = `${name} · ${sport}${age ? ' · ' + age : ''}${date ? ' · ' + date : ''}`;

  els.mainProfile.textContent = main.name;
  els.secondaryProfile.textContent = secondary.name;
  els.profileText.innerHTML = buildNarrative(main, secondary, scores, cognitionBreakdown, actionBreakdown);

  renderScoreGrid(scores);
  renderList(els.strengthsList, recos.strengths);
  renderList(els.watchoutsList, recos.watchouts);
  renderList(els.planList, recos.plan);
  drawRadar(scores);

  window.scrollTo({top: els.resultsCard.offsetTop - 12, behavior:'smooth'});
}

function renderScoreGrid(scores) {
  els.scoreGrid.innerHTML = '';
  Object.entries(scores).forEach(([key, val]) => {
    const card = document.createElement('div');
    card.className = 'score-card';
    card.innerHTML = `<div class="name">${DIMENSIONS[key]}</div><div class="value">${val}</div><div class="meter"><span style="width:${val}%"></span></div>`;
    els.scoreGrid.appendChild(card);
  });
}

function renderList(container, items) {
  container.innerHTML = '';
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    container.appendChild(li);
  });
}

function drawRadar(scores) {
  const canvas = els.radarCanvas;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const cx = w/2, cy = h/2, radius = Math.min(w,h)*0.34;
  const labels = ['Activation','Attention','Cognition','Action','Engagement','Régulation'];
  const vals = [scores.activation, scores.attention, scores.cognition, scores.action, scores.engagement, scores.regulation];
  const n = labels.length;

  for (let level=1; level<=5; level++) {
    const r = radius * (level/5);
    ctx.beginPath();
    for (let i=0; i<n; i++) {
      const angle = (-Math.PI/2) + (i * 2*Math.PI/n);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(130,157,212,0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  for (let i=0; i<n; i++) {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/n);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx,cy); ctx.lineTo(x,y);
    ctx.strokeStyle = 'rgba(130,157,212,0.35)';
    ctx.stroke();

    const lx = cx + Math.cos(angle) * (radius + 36);
    const ly = cy + Math.sin(angle) * (radius + 36);
    ctx.fillStyle = '#eef4ff';
    ctx.font = '600 16px Arial';
    ctx.textAlign = lx < cx - 10 ? 'right' : lx > cx + 10 ? 'left' : 'center';
    ctx.textBaseline = ly < cy ? 'bottom' : 'top';
    ctx.fillText(labels[i], lx, ly);
  }

  ctx.beginPath();
  vals.forEach((val, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/n);
    const r = radius * (val/100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(121,167,255,0.18)';
  ctx.strokeStyle = 'rgba(212,227,255,0.95)';
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();

  vals.forEach((val, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/n);
    const r = radius * (val/100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fillStyle = '#d4e3ff';
    ctx.fill();
  });
}

function exportJSON() {
  const payload = {
    meta: {
      name: els.athleteName.value || '',
      sport: els.athleteSport.value || '',
      age: els.athleteAge.value || '',
      date: els.assessmentDate.value || ''
    },
    answers,
    analysis: computeScores()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'a4p_mental_performance_map_resultats.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function restart() {
  if (!confirm('Recommencer le test ? Les réponses en cours seront effacées.')) return;
  answers = {};
  currentIndex = 0;
  localStorage.removeItem('a4p_mpm_state');
  els.resultsCard.classList.add('hidden');
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.remove('hidden');
  renderQuestion();
  window.scrollTo({top: els.testCard.offsetTop - 12, behavior:'smooth'});
}

init();
