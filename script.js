
const QUESTIONS = [{"id": 1, "dimension": "activation", "text": "Dans les moments importants, mon niveau d’énergie augmente."}, {"id": 2, "dimension": "activation", "text": "La pression peut perturber mes gestes techniques."}, {"id": 3, "dimension": "activation", "text": "L’enjeu me donne envie de me dépasser."}, {"id": 4, "dimension": "activation", "text": "Avant une compétition, je ressens une tension physique."}, {"id": 5, "dimension": "activation", "text": "La pression me rend plus concentré."}, {"id": 6, "dimension": "activation", "text": "Je ressens parfois un blocage dans les moments décisifs."}, {"id": 7, "dimension": "activation", "text": "Les situations difficiles stimulent ma performance."}, {"id": 8, "dimension": "activation", "text": "Je me sens à l’aise quand l’enjeu est élevé."}, {"id": 9, "dimension": "activation", "text": "Mon corps devient tendu sous pression."}, {"id": 10, "dimension": "activation", "text": "Les moments importants me donnent de l’énergie."}, {"id": 11, "dimension": "activation", "text": "Je perds parfois mes moyens dans les moments clés."}, {"id": 12, "dimension": "activation", "text": "La pression me pousse à me surpasser."}, {"id": 13, "dimension": "activation", "text": "Je garde mon niveau de jeu malgré l’enjeu."}, {"id": 14, "dimension": "activation", "text": "Mon rythme cardiaque augmente fortement avant une compétition."}, {"id": 15, "dimension": "activation", "text": "L’enjeu influence fortement mon niveau d’activation."}, {"id": 16, "dimension": "activation", "text": "Je peux performer malgré la pression."}, {"id": 17, "dimension": "attention", "text": "Je peux rester concentré longtemps pendant un match."}, {"id": 18, "dimension": "attention", "text": "Le bruit peut me déconcentrer."}, {"id": 19, "dimension": "attention", "text": "Je sais me reconcentrer rapidement."}, {"id": 20, "dimension": "attention", "text": "Après une erreur, mon attention revient vite."}, {"id": 21, "dimension": "attention", "text": "Je suis attentif aux détails du jeu."}, {"id": 22, "dimension": "attention", "text": "Je pense parfois à autre chose pendant l’action."}, {"id": 23, "dimension": "attention", "text": "Je reste concentré malgré les perturbations."}, {"id": 24, "dimension": "attention", "text": "Je peux focaliser toute mon attention sur une action."}, {"id": 25, "dimension": "attention", "text": "Mon esprit peut parfois s’échapper du moment présent."}, {"id": 26, "dimension": "attention", "text": "Je suis capable de maintenir ma concentration."}, {"id": 27, "dimension": "attention", "text": "Je perds parfois le fil du jeu."}, {"id": 28, "dimension": "attention", "text": "Je reviens rapidement à l’instant présent."}, {"id": 29, "dimension": "attention", "text": "Je suis attentif aux signaux du jeu."}, {"id": 30, "dimension": "attention", "text": "Les distractions peuvent me perturber."}, {"id": 31, "dimension": "attention", "text": "Je sais retrouver ma concentration rapidement."}, {"id": 32, "dimension": "attention", "text": "Mon attention est stable pendant la performance."}, {"id": 33, "dimension": "regulation", "text": "Mes émotions influencent ma performance."}, {"id": 34, "dimension": "regulation", "text": "Je sais calmer mon stress."}, {"id": 35, "dimension": "regulation", "text": "Une frustration peut rester longtemps dans ma tête."}, {"id": 36, "dimension": "regulation", "text": "Je retrouve rapidement mon calme."}, {"id": 37, "dimension": "regulation", "text": "Je sais transformer une erreur en motivation."}, {"id": 38, "dimension": "regulation", "text": "Je peux perdre mon calme en compétition."}, {"id": 39, "dimension": "regulation", "text": "Je régule mes émotions efficacement."}, {"id": 40, "dimension": "regulation", "text": "Je ressens fortement les émotions."}, {"id": 41, "dimension": "regulation", "text": "Je sais respirer pour me calmer."}, {"id": 42, "dimension": "regulation", "text": "Les émotions peuvent perturber mon jeu."}, {"id": 43, "dimension": "regulation", "text": "Je retrouve rapidement mon équilibre émotionnel."}, {"id": 44, "dimension": "regulation", "text": "Je peux rester calme sous pression."}, {"id": 45, "dimension": "regulation", "text": "Je gère bien la frustration."}, {"id": 46, "dimension": "regulation", "text": "Mes émotions influencent mon comportement pendant le jeu."}, {"id": 47, "dimension": "regulation", "text": "Je sais prendre du recul après une erreur."}, {"id": 48, "dimension": "regulation", "text": "Je retrouve rapidement mon équilibre mental."}, {"id": 49, "dimension": "engagement", "text": "Je m’entraîne même quand je n’ai pas envie."}, {"id": 50, "dimension": "engagement", "text": "Je me fixe des objectifs ambitieux."}, {"id": 51, "dimension": "engagement", "text": "Les difficultés me motivent."}, {"id": 52, "dimension": "engagement", "text": "Je persévère malgré les obstacles."}, {"id": 53, "dimension": "engagement", "text": "J’aime progresser dans mon sport."}, {"id": 54, "dimension": "engagement", "text": "Je travaille mes points faibles."}, {"id": 55, "dimension": "engagement", "text": "Je suis motivé par les défis."}, {"id": 56, "dimension": "engagement", "text": "Je m’investis dans mon entraînement."}, {"id": 57, "dimension": "engagement", "text": "Je continue même après un échec."}, {"id": 58, "dimension": "engagement", "text": "J’ai envie de progresser constamment."}, {"id": 59, "dimension": "engagement", "text": "Je me donne à fond à l’entraînement."}, {"id": 60, "dimension": "engagement", "text": "Je suis déterminé à atteindre mes objectifs."}, {"id": 61, "dimension": "engagement", "text": "Je reste engagé malgré les difficultés."}, {"id": 62, "dimension": "engagement", "text": "J’aime relever des défis sportifs."}, {"id": 63, "dimension": "engagement", "text": "La progression me motive."}, {"id": 64, "dimension": "engagement", "text": "Je suis persévérant."}, {"id": 65, "dimension": "cognition", "text": "J’aime comprendre une technique avant de l’utiliser."}, {"id": 66, "dimension": "cognition", "text": "J’apprends en observant les autres joueurs."}, {"id": 67, "dimension": "cognition", "text": "J’analyse souvent mes performances."}, {"id": 68, "dimension": "cognition", "text": "Je me fie à mon intuition dans le jeu."}, {"id": 69, "dimension": "cognition", "text": "Je réfléchis aux stratégies de jeu."}, {"id": 70, "dimension": "cognition", "text": "J’apprends en expérimentant."}, {"id": 71, "dimension": "cognition", "text": "Je cherche à comprendre mes erreurs."}, {"id": 72, "dimension": "cognition", "text": "Je me fie à mes sensations."}, {"id": 73, "dimension": "cognition", "text": "J’aime analyser mes actions."}, {"id": 74, "dimension": "cognition", "text": "J’observe beaucoup les situations de jeu."}, {"id": 75, "dimension": "cognition", "text": "Je réfléchis aux solutions possibles."}, {"id": 76, "dimension": "cognition", "text": "Je me fie souvent à mon instinct."}, {"id": 77, "dimension": "cognition", "text": "J’aime comprendre la logique du jeu."}, {"id": 78, "dimension": "cognition", "text": "J’analyse les situations avant d’agir."}, {"id": 79, "dimension": "cognition", "text": "Je fais confiance à mon intuition."}, {"id": 80, "dimension": "cognition", "text": "J’apprends par l’expérience."}, {"id": 81, "dimension": "cognition", "text": "J’aime structurer ma progression."}, {"id": 82, "dimension": "cognition", "text": "J’improvise facilement."}, {"id": 83, "dimension": "action", "text": "Je préfère répéter un geste pour le maîtriser."}, {"id": 84, "dimension": "action", "text": "Je suis performant quand je joue instinctivement."}, {"id": 85, "dimension": "action", "text": "Je ressens beaucoup mon corps dans le mouvement."}, {"id": 86, "dimension": "action", "text": "Je m’adapte facilement aux situations imprévues."}, {"id": 87, "dimension": "action", "text": "J’aime une technique précise."}, {"id": 88, "dimension": "action", "text": "Je joue mieux quand je suis libre."}, {"id": 89, "dimension": "action", "text": "Je ressens le rythme du jeu."}, {"id": 90, "dimension": "action", "text": "Je m’adapte rapidement aux changements."}, {"id": 91, "dimension": "action", "text": "Je cherche la précision technique."}, {"id": 92, "dimension": "action", "text": "Je joue de manière spontanée."}, {"id": 93, "dimension": "action", "text": "Je ressens mes appuis pendant l’action."}, {"id": 94, "dimension": "action", "text": "Je m’ajuste facilement aux situations."}, {"id": 95, "dimension": "action", "text": "Je répète pour améliorer la technique."}, {"id": 96, "dimension": "action", "text": "Je joue de manière instinctive."}, {"id": 97, "dimension": "action", "text": "Je ressens finement le mouvement."}, {"id": 98, "dimension": "action", "text": "Je m’adapte aux imprévus."}, {"id": 99, "dimension": "action", "text": "Je cherche la maîtrise technique."}, {"id": 100, "dimension": "action", "text": "Je suis efficace dans le jeu spontané."}, {"id": 101, "dimension": "mbti", "text": "Je gagne de l’énergie quand j’échange avec les autres."}, {"id": 102, "dimension": "mbti", "text": "Je préfère réfléchir seul avant de parler."}, {"id": 103, "dimension": "mbti", "text": "Je fais d’abord confiance aux faits concrets."}, {"id": 104, "dimension": "mbti", "text": "Je repère vite les possibilités et les idées nouvelles."}, {"id": 105, "dimension": "mbti", "text": "Je décide plutôt avec logique et objectivité."}, {"id": 106, "dimension": "mbti", "text": "Je décide en tenant compte d’abord des personnes."}, {"id": 107, "dimension": "mbti", "text": "J’aime planifier et structurer à l’avance."}, {"id": 108, "dimension": "mbti", "text": "Je préfère garder plusieurs options ouvertes."}, {"id": 109, "dimension": "mbti", "text": "Le contact du groupe me stimule."}, {"id": 110, "dimension": "mbti", "text": "Je me ressource dans le calme et le retrait."}, {"id": 111, "dimension": "mbti", "text": "J’aime les repères précis, concrets et observables."}, {"id": 112, "dimension": "mbti", "text": "J’aime imaginer ce qui pourrait être possible."}, {"id": 113, "dimension": "mbti", "text": "Je tranche plus facilement sur des critères rationnels."}, {"id": 114, "dimension": "mbti", "text": "Je tiens compte de l’ambiance et de l’impact relationnel."}, {"id": 115, "dimension": "mbti", "text": "Je suis plus à l’aise quand c’est cadré et décidé."}, {"id": 116, "dimension": "mbti", "text": "Je suis plus à l’aise quand je peux m’adapter au fur et à mesure."}];
const DIMENSIONS = {"activation": "Activation", "attention": "Attention", "regulation": "Régulation", "engagement": "Engagement", "cognition": "Cognition", "action": "Action", "mbti": "Type cognitif"};
const REVERSE_IDS = new Set([2, 4, 6, 9, 11, 14, 18, 22, 25, 27, 30, 33, 35, 38, 40, 42, 46]);
const ANALYTICAL_IDS = new Set([65, 67, 69, 71, 73, 75, 77, 78, 81]);
const INTUITIVE_IDS = new Set([66, 68, 70, 72, 74, 76, 79, 80, 82]);
const TECHNICAL_IDS = new Set([83, 87, 91, 95, 99]);
const SENSORIAL_IDS = new Set([85, 89, 93, 97]);
const STRATEGIC_IDS = new Set([86, 90, 94, 98]);
const CREATIVE_IDS = new Set([84, 88, 92, 96, 100]);
const E_IDS = new Set([101, 109]);
const I_IDS = new Set([102, 110]);
const S_IDS = new Set([103, 111]);
const N_IDS = new Set([104, 112]);
const T_IDS = new Set([105, 113]);
const F_IDS = new Set([106, 114]);
const J_IDS = new Set([107, 115]);
const P_IDS = new Set([108, 116]);
const MBTI_TO_MOTOR = {"ISTJ": "D4", "ISTP": "D2", "ESTP": "D1", "ESTJ": "D3", "ISFJ": "G4", "ISFP": "G2", "ESFP": "G1", "ESFJ": "G3", "INFJ": "R4", "INFP": "R2", "ENFP": "R1", "ENFJ": "R3", "INTJ": "C4", "INTP": "C2", "ENTP": "C1", "ENTJ": "C3"};
const MOTOR_CODE_DETAILS = {"D1": "Famille D (ST) – marche par le bas – verticalité E-P", "D2": "Famille D (ST) – marche par le bas – horizontalité I-P", "D3": "Famille D (ST) – marche par le bas – horizontalité E-J", "D4": "Famille D (ST) – marche par le bas – verticalité I-J", "G1": "Famille G (SF) – marche par le bas – verticalité E-P", "G2": "Famille G (SF) – marche par le bas – horizontalité I-P", "G3": "Famille G (SF) – marche par le bas – horizontalité E-J", "G4": "Famille G (SF) – marche par le bas – verticalité I-J", "R1": "Famille R (NF) – marche par le haut – verticalité E-P", "R2": "Famille R (NF) – marche par le haut – horizontalité I-P", "R3": "Famille R (NF) – marche par le haut – horizontalité E-J", "R4": "Famille R (NF) – marche par le haut – verticalité I-J", "C1": "Famille C (NT) – marche par le haut – verticalité E-P", "C2": "Famille C (NT) – marche par le haut – horizontalité I-P", "C3": "Famille C (NT) – marche par le haut – horizontalité E-J", "C4": "Famille C (NT) – marche par le haut – verticalité I-J"};

const scaleLabels = {1:'Jamais',2:'Rarement',3:'Parfois',4:'Souvent',5:'Toujours'};
let currentIndex = 0;
let answers = {};

const els = {
  startBtn: document.getElementById('startBtn'),
  demoBtn: document.getElementById('demoBtn'),
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
  saveBtn: document.getElementById('saveBtn'),
  athleteName: document.getElementById('athleteName'),
  athleteSport: document.getElementById('athleteSport'),
  athleteAge: document.getElementById('athleteAge'),
  assessmentDate: document.getElementById('assessmentDate'),
  athleteClub: document.getElementById('athleteClub'),
  assessorName: document.getElementById('assessorName'),
  consentBox: document.getElementById('consentBox'),
  identityLine: document.getElementById('identityLine'),
  mainProfile: document.getElementById('mainProfile'),
  mbtiType: document.getElementById('mbtiType'),
  motorCode: document.getElementById('motorCode'),
  mbtiTypeLine: document.getElementById('mbtiTypeLine'),
  motorCodeLine: document.getElementById('motorCodeLine'),
  motorExplain: document.getElementById('motorExplain'),
  profileText: document.getElementById('profileText'),
  scoreGrid: document.getElementById('scoreGrid'),
  preferenceGrid: document.getElementById('preferenceGrid'),
  strengthsList: document.getElementById('strengthsList'),
  watchoutsList: document.getElementById('watchoutsList'),
  planList: document.getElementById('planList'),
  playerSummary: document.getElementById('playerSummary'),
  coachSummary: document.getElementById('coachSummary'),
  motorSummary: document.getElementById('motorSummary'),
  pmpRadar: document.getElementById('pmpRadar'),
  exportJsonBtn: document.getElementById('exportJsonBtn'),
  printBtn: document.getElementById('printBtn'),
  restartBtn: document.getElementById('restartBtn')
};

function init() {
  const saved = JSON.parse(localStorage.getItem('a4p_pmp_mbti_actiontypes') || '{}');
  answers = saved.answers || {};
  currentIndex = saved.currentIndex || 0;
  if (!els.assessmentDate.value) els.assessmentDate.value = new Date().toISOString().slice(0,10);
  if (saved.meta) {
    els.athleteName.value = saved.meta.name || '';
    els.athleteSport.value = saved.meta.sport || '';
    els.athleteAge.value = saved.meta.age || '';
    els.assessmentDate.value = saved.meta.date || els.assessmentDate.value;
    els.athleteClub.value = saved.meta.club || '';
    els.assessorName.value = saved.meta.assessor || '';
    els.consentBox.checked = !!saved.meta.consent;
  }
  attachEvents();
}

function meta() {
  return {
    name: els.athleteName.value || '',
    sport: els.athleteSport.value || '',
    age: els.athleteAge.value || '',
    date: els.assessmentDate.value || '',
    club: els.athleteClub.value || '',
    assessor: els.assessorName.value || '',
    consent: els.consentBox.checked
  };
}

function saveState() {
  localStorage.setItem('a4p_pmp_mbti_actiontypes', JSON.stringify({answers, currentIndex, meta: meta()}));
}

function attachEvents() {
  els.startBtn.addEventListener('click', startTest);
  els.demoBtn.addEventListener('click', loadDemo);
  els.saveBtn.addEventListener('click', () => { saveState(); alert('Progression sauvegardée sur cet appareil.'); });
  [els.athleteName, els.athleteSport, els.athleteAge, els.assessmentDate, els.athleteClub, els.assessorName, els.consentBox].forEach(el => {
    el.addEventListener('input', saveState);
    el.addEventListener('change', saveState);
  });
  els.prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; saveState(); renderQuestion(); } });
  els.nextBtn.addEventListener('click', () => {
    const q = QUESTIONS[currentIndex];
    if (!answers[q.id]) { alert('Sélectionne une réponse pour continuer.'); return; }
    if (currentIndex < QUESTIONS.length - 1) { currentIndex++; saveState(); renderQuestion(); } else { showResults(); }
  });
  els.exportJsonBtn.addEventListener('click', exportJSON);
  els.printBtn.addEventListener('click', () => window.print());
  els.restartBtn.addEventListener('click', restart);
}

function startTest() {
  if (!els.consentBox.checked) { alert("Coche d'abord la case de confirmation d’usage."); return; }
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.remove('hidden');
  els.resultsCard.classList.add('hidden');
  renderQuestion();
  window.scrollTo({top: els.testCard.offsetTop - 12, behavior:'smooth'});
}

function loadDemo() {
  answers = {};
  QUESTIONS.forEach(q => {
    const base = {activation:4, attention:3, regulation:3, engagement:5, cognition:4, action:4, mbti:4}[q.dimension];
    answers[q.id] = Math.max(1, Math.min(5, base + (q.id % 4 === 0 ? -1 : 0)));
  });
  [101,104,106,108,109,112,114,116].forEach(id => answers[id] = 5);
  [102,103,105,107,110,111,113,115].forEach(id => answers[id] = 2);
  els.consentBox.checked = true;
  showResults();
}

function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  els.questionCounter.textContent = `Question ${currentIndex + 1} / ${QUESTIONS.length}`;
  els.dimensionBadge.textContent = DIMENSIONS[q.dimension];
  els.questionText.textContent = q.text;
  els.progressBar.style.width = `${((currentIndex) / QUESTIONS.length) * 100}%`;
  els.scale.innerHTML = '';
  for (let score = 1; score <= 5; score++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = answers[q.id] === score ? 'active' : '';
    btn.innerHTML = `<div>${score}</div><small>${scaleLabels[score]}</small>`;
    btn.addEventListener('click', () => { answers[q.id] = score; saveState(); renderQuestion(); });
    els.scale.appendChild(btn);
  }
  els.prevBtn.disabled = currentIndex === 0;
  els.nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? 'Voir mes résultats' : 'Suivant';
}

function transformedValue(qid, value) { return REVERSE_IDS.has(qid) ? 6 - value : value; }

function calcAverage(ids, reverse=false) {
  let total = 0, count = 0;
  ids.forEach(id => {
    const v = Number(answers[id] || 0);
    if (!v) return;
    total += reverse ? transformedValue(id, v) : v;
    count += 1;
  });
  return count ? Math.round((total / (count * 5)) * 100) : 0;
}

function computeScores() {
  const pmp = {
    activation: calcAverage([...Array(16).keys()].map(i => i+1), true),
    attention: calcAverage([...Array(16).keys()].map(i => i+17), true),
    regulation: calcAverage([...Array(16).keys()].map(i => i+33), true),
    engagement: calcAverage([...Array(16).keys()].map(i => i+49), false)
  };
  const cognition = {
    analytique: calcAverage([...ANALYTICAL_IDS], false),
    intuitif: calcAverage([...INTUITIVE_IDS], false)
  };
  const motorPreferences = {
    technique: calcAverage([...TECHNICAL_IDS], false),
    sensoriel: calcAverage([...SENSORIAL_IDS], false),
    strategique: calcAverage([...STRATEGIC_IDS], false),
    creatif: calcAverage([...CREATIVE_IDS], false)
  };
  const mbtiAxes = {
    E: calcAverage([...E_IDS], false),
    I: calcAverage([...I_IDS], false),
    S: calcAverage([...S_IDS], false),
    N: calcAverage([...N_IDS], false),
    T: calcAverage([...T_IDS], false),
    F: calcAverage([...F_IDS], false),
    J: calcAverage([...J_IDS], false),
    P: calcAverage([...P_IDS], false)
  };
  const mbtiType = buildType(mbtiAxes);
  const motorCode = MBTI_TO_MOTOR[mbtiType] || '—';
  return { pmp, cognition, motorPreferences, mbtiAxes, mbtiType, motorCode };
}

function buildType(ax) {
  return `${ax.E >= ax.I ? 'E':'I'}${ax.S >= ax.N ? 'S':'N'}${ax.T >= ax.F ? 'T':'F'}${ax.J >= ax.P ? 'J':'P'}`;
}

function pickMentalProfile(pmp, cognition) {
  const candidates = [
    {name:'Compétiteur', value:pmp.activation*0.45 + pmp.engagement*0.35 + pmp.attention*0.20},
    {name:'Régulateur', value:pmp.regulation*0.50 + pmp.attention*0.30 + pmp.engagement*0.20},
    {name:'Stratège', value:cognition.analytique*0.45 + pmp.attention*0.20 + pmp.regulation*0.15 + pmp.engagement*0.20},
    {name:'Créatif', value:cognition.intuitif*0.40 + pmp.activation*0.20 + pmp.engagement*0.20 + pmp.attention*0.20},
    {name:'Endurant', value:pmp.engagement*0.55 + pmp.regulation*0.20 + pmp.attention*0.15 + pmp.activation*0.10},
    {name:'Méthodique', value:cognition.analytique*0.40 + pmp.attention*0.25 + pmp.regulation*0.20 + pmp.engagement*0.15}
  ];
  return [...candidates].sort((a,b) => b.value-a.value)[0].name;
}

function buildNarrative(mentalProfile, scores) {
  const detail = MOTOR_CODE_DETAILS[scores.motorCode] || '';
  return `Le profil mental dominant est <strong>${mentalProfile}</strong>. La traduction cognitive inspirée des axes MBTI donne <strong>${scores.mbtiType}</strong>. La préférence motrice associée est <strong>${scores.motorCode}</strong>. ${detail}`;
}

function buildRecommendations(scores) {
  const p = scores.pmp, c = scores.cognition, type = scores.mbtiType, code = scores.motorCode;
  const strengths = [], watchouts = [], plan = [];
  if (p.activation >= 70) strengths.push("Bonne mobilisation énergétique dans les moments d’enjeu."); else watchouts.push("L’activation compétitive peut manquer de stabilité.");
  if (p.attention >= 70) strengths.push("Capacité utile à rester dans l’instant de jeu."); else watchouts.push("La concentration peut décrocher après perturbation.");
  if (p.regulation >= 70) strengths.push("Retour au calme assez rapide après erreur ou tension."); else watchouts.push("La régulation émotionnelle mérite un travail ciblé après frustration.");
  if (p.engagement >= 75) strengths.push("Engagement et persévérance élevés dans la progression."); else watchouts.push("L’engagement peut varier selon le contexte.");
  strengths.push(`Type cognitif inspiré : ${type}.`);
  strengths.push(`Préférence motrice : ${code}.`);
  plan.push(p.attention < 70 ? "Installer une routine de recentrage de 5 à 10 secondes avant chaque action clé." : "Consolider les routines de concentration déjà efficaces.");
  plan.push(p.regulation < 70 ? "Travailler respiration 4-6, reset mental et débrief court après erreur." : "Entretenir les routines de retour au calme en contexte compétitif.");
  plan.push(c.analytique >= c.intuitif ? "Donner des repères clairs, vidéos courtes et consignes structurées." : "Utiliser davantage l’apprentissage par mise en situation, jeu et feedback sensoriel.");
  plan.push(['D','G'].includes(code[0]) ? "Démarrer par des repères concrets et stables avant d’ouvrir l’adaptation." : "Laisser plus de vision globale, de sens et d’anticipation avant la correction technique fine.");
  plan.push(['R1','C1','D1','G1'].includes(code) ? "Prévoir de la liberté d’action et des contextes ouverts." : ['R4','C4','D4','G4'].includes(code) ? "Prévoir des repères stables, structurés et un temps de préparation plus posé." : "Varier entre répétition cadrée et adaptation de situation.");
  return {strengths: strengths.slice(0,5), watchouts: watchouts.slice(0,5), plan: plan.slice(0,5)};
}

function buildAudienceSummaries(scores, mentalProfile) {
  const player = `Tu disposes d’un profil mental <strong>${mentalProfile}</strong>. Ta traduction cognitive inspirée donne <strong>${scores.mbtiType}</strong>, ce qui se traduit par la préférence motrice <strong>${scores.motorCode}</strong>.`;
  const coach = `Lecture coach : profil mental <strong>${mentalProfile}</strong>, type cognitif inspiré <strong>${scores.mbtiType}</strong>, préférence motrice <strong>${scores.motorCode}</strong>. Adapter le niveau de cadrage, le feedback et la pédagogie du geste à cette préférence.`;
  const motor = `Correspondance directe dans le rapport : <strong>MBTI : ${scores.mbtiType} → Préférence motrice : ${scores.motorCode}</strong>. ${MOTOR_CODE_DETAILS[scores.motorCode] || ''}`;
  return {player, coach, motor};
}

function showResults() {
  const unanswered = QUESTIONS.filter(q => !answers[q.id]);
  if (unanswered.length) {
    const ok = confirm(`Il reste ${unanswered.length} question(s) sans réponse. Les calculs seront faits uniquement sur les questions répondues. Continuer ?`);
    if (!ok) return;
  }
  saveState();
  const scores = computeScores();
  const mentalProfile = pickMentalProfile(scores.pmp, scores.cognition);
  const recos = buildRecommendations(scores);
  const summaries = buildAudienceSummaries(scores, mentalProfile);
  const m = meta();
  const parts = [m.name || 'Sportif', m.sport || 'Sport non renseigné', m.age ? `${m.age} ans` : '', m.club || '', m.date || ''].filter(Boolean);
  els.identityLine.textContent = parts.join(' · ');
  els.mainProfile.textContent = mentalProfile;
  els.mbtiType.textContent = scores.mbtiType;
  els.motorCode.textContent = scores.motorCode;
  els.mbtiTypeLine.textContent = scores.mbtiType;
  els.motorCodeLine.textContent = scores.motorCode;
  els.motorExplain.textContent = `${scores.mbtiType} → ${scores.motorCode} • ${MOTOR_CODE_DETAILS[scores.motorCode] || ''}`;
  els.profileText.innerHTML = buildNarrative(mentalProfile, scores);
  renderPmpGrid(scores.pmp);
  renderPreferenceGrid(scores.mbtiAxes, scores.motorPreferences, scores.mbtiType, scores.motorCode);
  renderList(els.strengthsList, recos.strengths);
  renderList(els.watchoutsList, recos.watchouts);
  renderList(els.planList, recos.plan);
  els.playerSummary.innerHTML = summaries.player;
  els.coachSummary.innerHTML = summaries.coach;
  els.motorSummary.innerHTML = summaries.motor;
  drawPmpRadar(scores.pmp);
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.add('hidden');
  els.resultsCard.classList.remove('hidden');
  window.scrollTo({top: els.resultsCard.offsetTop - 12, behavior:'smooth'});
}

function renderPmpGrid(pmp) {
  els.scoreGrid.innerHTML = '';
  Object.entries(pmp).forEach(([key, val]) => {
    const card = document.createElement('div');
    card.className = 'score-card';
    card.innerHTML = `<div class="name">${DIMENSIONS[key]}</div><div class="value">${val}</div><div class="meter"><span style="width:${val}%"></span></div>`;
    els.scoreGrid.appendChild(card);
  });
}

function renderPreferenceGrid(ax, motorPrefs, type, code) {
  els.preferenceGrid.innerHTML = '';
  const prefs = [
    ['E', ax.E], ['I', ax.I], ['S', ax.S], ['N', ax.N],
    ['T', ax.T], ['F', ax.F], ['J', ax.J], ['P', ax.P],
    ['Type inspiré', type], ['Préférence motrice', code],
    ['Moteur technique', motorPrefs.technique], ['Moteur sensoriel', motorPrefs.sensoriel],
    ['Moteur stratégique', motorPrefs.strategique], ['Moteur créatif', motorPrefs.creatif]
  ];
  prefs.forEach(([label, val]) => {
    const card = document.createElement('div');
    card.className = 'score-card';
    const meter = typeof val === 'number' ? `<div class="meter"><span style="width:${val}%"></span></div>` : '';
    card.innerHTML = `<div class="name">${label}</div><div class="value">${val}</div>${meter}`;
    els.preferenceGrid.appendChild(card);
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

function drawPmpRadar(pmp) {
  const canvas = els.pmpRadar;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const cx = w/2, cy = h/2, radius = Math.min(w,h)*0.34;
  const labels = ['Activation','Attention','Régulation','Engagement'];
  const vals = [pmp.activation, pmp.attention, pmp.regulation, pmp.engagement];
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
    ctx.closePath(); ctx.strokeStyle = 'rgba(130,157,212,0.25)'; ctx.lineWidth = 1; ctx.stroke();
  }
  for (let i=0; i<n; i++) {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/n);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y); ctx.strokeStyle = 'rgba(130,157,212,0.35)'; ctx.stroke();
    const lx = cx + Math.cos(angle) * (radius + 36);
    const ly = cy + Math.sin(angle) * (radius + 36);
    ctx.fillStyle = '#eef4ff'; ctx.font = '600 16px Arial';
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
  ctx.closePath(); ctx.fillStyle = 'rgba(121,167,255,0.18)'; ctx.strokeStyle = 'rgba(212,227,255,0.95)'; ctx.lineWidth = 3; ctx.fill(); ctx.stroke();
  vals.forEach((val, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/n);
    const r = radius * (val/100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fillStyle = '#d4e3ff'; ctx.fill();
  });
}

function exportJSON() {
  const payload = {meta: meta(), answers, analysis: computeScores()};
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'test_pmp_a4p_resultats.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function restart() {
  if (!confirm('Recommencer le test ? Les réponses seront effacées.')) return;
  answers = {}; currentIndex = 0;
  localStorage.removeItem('a4p_pmp_mbti_actiontypes');
  els.resultsCard.classList.add('hidden');
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.remove('hidden');
  renderQuestion();
}

init();
