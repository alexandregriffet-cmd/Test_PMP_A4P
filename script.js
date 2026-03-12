
const QUESTIONS = [{"id": 1, "dimension": "activation", "text": "Dans les moments importants, je sens mon énergie augmenter."}, {"id": 2, "dimension": "activation", "text": "L’enjeu d’une compétition me stimule."}, {"id": 3, "dimension": "activation", "text": "Mon corps se prépare naturellement avant un match."}, {"id": 4, "dimension": "activation", "text": "Je ressens une montée d’adrénaline avant l’action."}, {"id": 5, "dimension": "activation", "text": "Les situations de défi me donnent envie de me dépasser."}, {"id": 6, "dimension": "activation", "text": "Je peux mobiliser rapidement mon énergie pour performer."}, {"id": 7, "dimension": "activation", "text": "La pression augmente mon intensité dans le jeu."}, {"id": 8, "dimension": "activation", "text": "Je sens que mon corps se met en mode compétition."}, {"id": 9, "dimension": "activation", "text": "Dans les moments clés, mon niveau d’énergie est élevé."}, {"id": 10, "dimension": "activation", "text": "L’environnement de compétition me stimule."}, {"id": 11, "dimension": "activation", "text": "Je peux augmenter mon intensité quand c’est nécessaire."}, {"id": 12, "dimension": "activation", "text": "L’enjeu renforce ma motivation à agir."}, {"id": 13, "dimension": "activation", "text": "Je sens mon attention se réveiller avant l’action."}, {"id": 14, "dimension": "activation", "text": "La compétition me donne envie de me battre."}, {"id": 15, "dimension": "activation", "text": "Je ressens une énergie particulière dans les moments décisifs."}, {"id": 16, "dimension": "attention", "text": "Je peux rester concentré pendant toute une compétition."}, {"id": 17, "dimension": "attention", "text": "Je me focalise facilement sur l’action en cours."}, {"id": 18, "dimension": "attention", "text": "Je remarque rapidement les détails importants du jeu."}, {"id": 19, "dimension": "attention", "text": "Je peux ignorer les distractions extérieures."}, {"id": 20, "dimension": "attention", "text": "Après une erreur, je retrouve rapidement ma concentration."}, {"id": 21, "dimension": "attention", "text": "Mon attention reste stable pendant l’effort."}, {"id": 22, "dimension": "attention", "text": "Je suis capable de me recentrer rapidement."}, {"id": 23, "dimension": "attention", "text": "Je garde mon attention sur l’objectif du moment."}, {"id": 24, "dimension": "attention", "text": "Les bruits autour de moi ne me perturbent pas."}, {"id": 25, "dimension": "attention", "text": "Je reste présent mentalement dans l’action."}, {"id": 26, "dimension": "attention", "text": "Je peux me concentrer sur une tâche précise."}, {"id": 27, "dimension": "attention", "text": "Je remarque les informations importantes du jeu."}, {"id": 28, "dimension": "attention", "text": "Je me reconcentre rapidement après une distraction."}, {"id": 29, "dimension": "attention", "text": "Je garde l’esprit clair pendant l’action."}, {"id": 30, "dimension": "attention", "text": "Je reste focalisé même lorsque la situation est intense."}, {"id": 31, "dimension": "regulation", "text": "Je sais retrouver mon calme après une erreur."}, {"id": 32, "dimension": "regulation", "text": "Mes émotions ne perturbent pas mon jeu."}, {"id": 33, "dimension": "regulation", "text": "Je peux prendre du recul dans les moments difficiles."}, {"id": 34, "dimension": "regulation", "text": "Je garde mon calme sous pression."}, {"id": 35, "dimension": "regulation", "text": "Je peux gérer la frustration en compétition."}, {"id": 36, "dimension": "regulation", "text": "Les émotions ne prennent pas le dessus sur mes actions."}, {"id": 37, "dimension": "regulation", "text": "Je sais respirer pour me calmer."}, {"id": 38, "dimension": "regulation", "text": "Je peux transformer une erreur en apprentissage."}, {"id": 39, "dimension": "regulation", "text": "Je retrouve rapidement un état mental stable."}, {"id": 40, "dimension": "regulation", "text": "Je sais relativiser les situations difficiles."}, {"id": 41, "dimension": "regulation", "text": "Je peux contrôler mes réactions émotionnelles."}, {"id": 42, "dimension": "regulation", "text": "Je reste lucide même lorsque je suis frustré."}, {"id": 43, "dimension": "regulation", "text": "Je retrouve facilement mon équilibre émotionnel."}, {"id": 44, "dimension": "regulation", "text": "Je garde une attitude constructive dans l’adversité."}, {"id": 45, "dimension": "regulation", "text": "Je peux repartir dans l’action après une erreur."}, {"id": 46, "dimension": "engagement", "text": "Je m’entraîne sérieusement pour progresser."}, {"id": 47, "dimension": "engagement", "text": "Je persévère même lorsque c’est difficile."}, {"id": 48, "dimension": "engagement", "text": "J’aime relever des défis sportifs."}, {"id": 49, "dimension": "engagement", "text": "Je suis motivé par la progression."}, {"id": 50, "dimension": "engagement", "text": "Je continue même après un échec."}, {"id": 51, "dimension": "engagement", "text": "Je donne le meilleur de moi-même à l’entraînement."}, {"id": 52, "dimension": "engagement", "text": "Je veux m’améliorer constamment."}, {"id": 53, "dimension": "engagement", "text": "Je m’investis pleinement dans mon sport."}, {"id": 54, "dimension": "engagement", "text": "Je travaille mes points faibles."}, {"id": 55, "dimension": "engagement", "text": "Les difficultés me motivent à progresser."}, {"id": 56, "dimension": "engagement", "text": "Je me fixe des objectifs sportifs."}, {"id": 57, "dimension": "engagement", "text": "Je reste engagé même quand c’est exigeant."}, {"id": 58, "dimension": "engagement", "text": "Je suis déterminé à progresser."}, {"id": 59, "dimension": "engagement", "text": "J’aime me dépasser."}, {"id": 60, "dimension": "engagement", "text": "Je poursuis mes objectifs malgré les obstacles."}, {"id": 61, "dimension": "confidence", "text": "Je crois en ma capacité à réussir."}, {"id": 62, "dimension": "confidence", "text": "Je me sens capable de relever les défis."}, {"id": 63, "dimension": "confidence", "text": "Je fais confiance à mes compétences."}, {"id": 64, "dimension": "confidence", "text": "Je me sens prêt à affronter la compétition."}, {"id": 65, "dimension": "confidence", "text": "Je crois en ma progression."}, {"id": 66, "dimension": "confidence", "text": "Je suis confiant dans mes capacités sportives."}, {"id": 67, "dimension": "confidence", "text": "Je me sens capable de gérer les situations difficiles."}, {"id": 68, "dimension": "confidence", "text": "Je crois en mes chances de réussite."}, {"id": 69, "dimension": "confidence", "text": "Je me sens solide mentalement."}, {"id": 70, "dimension": "confidence", "text": "Je peux affronter les défis avec confiance."}, {"id": 71, "dimension": "confidence", "text": "Je crois en mes ressources."}, {"id": 72, "dimension": "confidence", "text": "Je suis confiant dans mes décisions."}, {"id": 73, "dimension": "confidence", "text": "Je me sens capable de performer."}, {"id": 74, "dimension": "confidence", "text": "Je fais confiance à mon entraînement."}, {"id": 75, "dimension": "confidence", "text": "Je crois en mon potentiel."}, {"id": 76, "dimension": "resilience", "text": "Après un échec, je rebondis rapidement."}, {"id": 77, "dimension": "resilience", "text": "Je tire des leçons de mes erreurs."}, {"id": 78, "dimension": "resilience", "text": "Les difficultés me rendent plus fort."}, {"id": 79, "dimension": "resilience", "text": "Je continue malgré les obstacles."}, {"id": 80, "dimension": "resilience", "text": "Je me relève après une défaite."}, {"id": 81, "dimension": "resilience", "text": "Les échecs me motivent à progresser."}, {"id": 82, "dimension": "resilience", "text": "Je transforme les difficultés en apprentissage."}, {"id": 83, "dimension": "resilience", "text": "Je garde une attitude positive après un échec."}, {"id": 84, "dimension": "resilience", "text": "Je persévère même lorsque je doute."}, {"id": 85, "dimension": "resilience", "text": "Les obstacles me poussent à progresser."}, {"id": 86, "dimension": "resilience", "text": "Je reste motivé malgré les difficultés."}, {"id": 87, "dimension": "resilience", "text": "Je garde confiance après un échec."}, {"id": 88, "dimension": "resilience", "text": "Je progresse grâce aux difficultés."}, {"id": 89, "dimension": "resilience", "text": "Je sais repartir après une défaite."}, {"id": 90, "dimension": "resilience", "text": "Je continue d’avancer malgré les obstacles."}, {"id": 91, "dimension": "cognition", "text": "J’aime analyser les situations de jeu."}, {"id": 92, "dimension": "cognition", "text": "Je réfléchis aux stratégies possibles."}, {"id": 93, "dimension": "cognition", "text": "Je cherche à comprendre les situations."}, {"id": 94, "dimension": "cognition", "text": "J’observe les comportements des autres joueurs."}, {"id": 95, "dimension": "cognition", "text": "J’aime comprendre le fonctionnement du jeu."}, {"id": 96, "dimension": "cognition", "text": "J’analyse mes performances après un match."}, {"id": 97, "dimension": "cognition", "text": "Je réfléchis aux solutions possibles dans le jeu."}, {"id": 98, "dimension": "cognition", "text": "J’aime comprendre les tactiques sportives."}, {"id": 99, "dimension": "cognition", "text": "Je cherche à anticiper les actions."}, {"id": 100, "dimension": "cognition", "text": "J’observe attentivement ce qui se passe autour de moi."}, {"id": 101, "dimension": "cognition", "text": "Je réfléchis aux décisions à prendre."}, {"id": 102, "dimension": "cognition", "text": "J’aime comprendre les mécanismes du jeu."}, {"id": 103, "dimension": "cognition", "text": "J’analyse les situations avant d’agir."}, {"id": 104, "dimension": "cognition", "text": "Je cherche à améliorer mes stratégies."}, {"id": 105, "dimension": "cognition", "text": "Je réfléchis à ma progression."}, {"id": 106, "dimension": "motricity", "text": "Je ressens finement mes mouvements."}, {"id": 107, "dimension": "motricity", "text": "Je fais attention à mes appuis."}, {"id": 108, "dimension": "motricity", "text": "Je sens le rythme de mes actions."}, {"id": 109, "dimension": "motricity", "text": "Je ressens les mouvements de mon corps."}, {"id": 110, "dimension": "motricity", "text": "Je m’adapte facilement aux situations motrices."}, {"id": 111, "dimension": "motricity", "text": "Je ressens la fluidité de mes gestes."}, {"id": 112, "dimension": "motricity", "text": "Je suis attentif à mes sensations corporelles."}, {"id": 113, "dimension": "motricity", "text": "Je peux ajuster mes mouvements rapidement."}, {"id": 114, "dimension": "motricity", "text": "Je ressens la coordination de mes gestes."}, {"id": 115, "dimension": "motricity", "text": "Je m’adapte à la dynamique du jeu."}, {"id": 116, "dimension": "motricity", "text": "Je ressens le tempo du mouvement."}, {"id": 117, "dimension": "motricity", "text": "Je peux modifier mon geste en fonction de la situation."}, {"id": 118, "dimension": "motricity", "text": "Je sens la précision de mes mouvements."}, {"id": 119, "dimension": "motricity", "text": "Je ressens l’équilibre de mon corps dans l’action."}, {"id": 120, "dimension": "motricity", "text": "Je m’ajuste facilement dans le mouvement."}, {"id": 121, "dimension": "mbti", "text": "Je gagne de l’énergie quand j’échange avec les autres."}, {"id": 122, "dimension": "mbti", "text": "Je préfère réfléchir seul avant de parler."}, {"id": 123, "dimension": "mbti", "text": "Je fais d’abord confiance aux faits concrets."}, {"id": 124, "dimension": "mbti", "text": "Je repère vite les possibilités et les idées nouvelles."}, {"id": 125, "dimension": "mbti", "text": "Je décide plutôt avec logique et objectivité."}, {"id": 126, "dimension": "mbti", "text": "Je décide en tenant compte d’abord des personnes."}, {"id": 127, "dimension": "mbti", "text": "J’aime planifier et structurer à l’avance."}, {"id": 128, "dimension": "mbti", "text": "Je préfère garder plusieurs options ouvertes."}, {"id": 129, "dimension": "mbti", "text": "Le contact du groupe me stimule."}, {"id": 130, "dimension": "mbti", "text": "Je me ressource dans le calme et le retrait."}, {"id": 131, "dimension": "mbti", "text": "J’aime les repères précis, concrets et observables."}, {"id": 132, "dimension": "mbti", "text": "J’aime imaginer ce qui pourrait être possible."}, {"id": 133, "dimension": "mbti", "text": "Je tranche plus facilement sur des critères rationnels."}, {"id": 134, "dimension": "mbti", "text": "Je tiens compte de l’ambiance et de l’impact relationnel."}, {"id": 135, "dimension": "mbti", "text": "Je suis plus à l’aise quand c’est cadré et décidé."}, {"id": 136, "dimension": "mbti", "text": "Je suis plus à l’aise quand je peux m’adapter au fur et à mesure."}];
const DIMENSIONS = {"activation": "Activation", "attention": "Attention", "regulation": "Régulation", "engagement": "Engagement", "confidence": "Confiance", "resilience": "Résilience", "cognition": "Cognition", "motricity": "Motricité", "mbti": "Type cognitif"};
const REVERSE_IDS = new Set([]);
const E_IDS = new Set([121, 129]);
const I_IDS = new Set([122, 130]);
const S_IDS = new Set([123, 131]);
const N_IDS = new Set([124, 132]);
const T_IDS = new Set([125, 133]);
const F_IDS = new Set([126, 134]);
const J_IDS = new Set([127, 135]);
const P_IDS = new Set([128, 136]);
const MBTI_TO_MOTOR = {"ISTJ": "D4", "ISTP": "D2", "ESTP": "D1", "ESTJ": "D3", "ISFJ": "G4", "ISFP": "G2", "ESFP": "G1", "ESFJ": "G3", "INFJ": "R4", "INFP": "R2", "ENFP": "R1", "ENFJ": "R3", "INTJ": "C4", "INTP": "C2", "ENTP": "C1", "ENTJ": "C3"};
const MOTOR_CODE_DETAILS = {"D1": "Famille D (ST) – verticalité E-P", "D2": "Famille D (ST) – horizontalité I-P", "D3": "Famille D (ST) – horizontalité E-J", "D4": "Famille D (ST) – verticalité I-J", "G1": "Famille G (SF) – verticalité E-P", "G2": "Famille G (SF) – horizontalité I-P", "G3": "Famille G (SF) – horizontalité E-J", "G4": "Famille G (SF) – verticalité I-J", "R1": "Famille R (NF) – verticalité E-P", "R2": "Famille R (NF) – horizontalité I-P", "R3": "Famille R (NF) – horizontalité E-J", "R4": "Famille R (NF) – verticalité I-J", "C1": "Famille C (NT) – verticalité E-P", "C2": "Famille C (NT) – horizontalité I-P", "C3": "Famille C (NT) – horizontalité E-J", "C4": "Famille C (NT) – verticalité I-J"};

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
  mbtiTypeLine: document.getElementById('mbtiTypeLine'),
  motorCodeLine: document.getElementById('motorCodeLine'),
  motorExplain: document.getElementById('motorExplain'),
  mainProfile: document.getElementById('mainProfile'),
  secondaryProfile: document.getElementById('secondaryProfile'),
  tertiaryProfile: document.getElementById('tertiaryProfile'),
  summaryText: document.getElementById('summaryText'),
  scoreGrid: document.getElementById('scoreGrid'),
  preferenceGrid: document.getElementById('preferenceGrid'),
  strengthsText: document.getElementById('strengthsText'),
  progressText: document.getElementById('progressText'),
  planText: document.getElementById('planText'),
  playerSummary: document.getElementById('playerSummary'),
  parentSummary: document.getElementById('parentSummary'),
  coachSummary: document.getElementById('coachSummary'),
  pmpRadar: document.getElementById('pmpRadar'),
  exportJsonBtn: document.getElementById('exportJsonBtn'),
  printBtn: document.getElementById('printBtn'),
  restartBtn: document.getElementById('restartBtn')
};

function init() {
  const saved = JSON.parse(localStorage.getItem('pmp_a4p_complete') || '{}');
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
  localStorage.setItem('pmp_a4p_complete', JSON.stringify({answers, currentIndex, meta: meta()}));
}

function attachEvents() {
  els.startBtn.addEventListener('click', startTest);
  els.demoBtn.addEventListener('click', loadDemo);
  els.saveBtn.addEventListener('click', () => { saveState(); alert('Progression sauvegardée sur cet appareil.'); });
  [els.athleteName, els.athleteSport, els.athleteAge, els.assessmentDate, els.athleteClub, els.assessorName, els.consentBox].forEach(el => {
    el.addEventListener('input', saveState);
    el.addEventListener('change', saveState);
  });
  els.prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; saveState(); renderQuestion(); }});
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
    const baseMap = {activation:4, attention:4, regulation:3, engagement:5, confidence:4, resilience:4, cognition:4, motricity:4, mbti:4};
    const base = baseMap[q.dimension] || 4;
    answers[q.id] = Math.max(1, Math.min(5, base + (q.id % 5 === 0 ? -1 : 0)));
  });
  // Make demo ENFP -> R1
  [121,124,126,128,129,132,134,136].forEach(id => answers[id] = 5);
  [122,123,125,127,130,131,133,135].forEach(id => answers[id] = 2);
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

function rangeIds(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
}

function computeScores() {
  const dimensions = {
    activation: calcAverage(rangeIds(1,15), false),
    attention: calcAverage(rangeIds(16,30), false),
    regulation: calcAverage(rangeIds(31,45), false),
    engagement: calcAverage(rangeIds(46,60), false),
    confidence: calcAverage(rangeIds(61,75), false),
    resilience: calcAverage(rangeIds(76,90), false),
    cognition: calcAverage(rangeIds(91,105), false),
    motricity: calcAverage(rangeIds(106,120), false),
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
  const mbtiType = `${mbtiAxes.E >= mbtiAxes.I ? 'E' : 'I'}${mbtiAxes.S >= mbtiAxes.N ? 'S':'N'}${mbtiAxes.T >= mbtiAxes.F ? 'T':'F'}${mbtiAxes.J >= mbtiAxes.P ? 'J':'P'}`;
  const motorCode = MBTI_TO_MOTOR[mbtiType] || '—';
  return { dimensions, mbtiAxes, mbtiType, motorCode };
}

function computeProfiles(d) {
  const profiles = [
    {name:'Compétiteur', score: d.activation*0.4 + d.engagement*0.35 + d.confidence*0.25},
    {name:'Stratège', score: d.attention*0.4 + d.cognition*0.35 + d.regulation*0.25},
    {name:'Créatif', score: d.cognition*0.4 + d.activation*0.3 + d.engagement*0.3},
    {name:'Régulateur', score: d.regulation*0.5 + d.attention*0.3 + d.resilience*0.2},
    {name:'Endurant', score: d.engagement*0.45 + d.resilience*0.35 + d.confidence*0.2},
    {name:'Méthodique', score: d.attention*0.4 + d.engagement*0.3 + d.cognition*0.3},
  ].sort((a,b)=>b.score-a.score);
  return profiles.slice(0,3);
}

function bestDimension(d) {
  const entries = Object.entries(d).sort((a,b)=>b[1]-a[1]);
  return {key:entries[0][0], value:entries[0][1]};
}
function worstDimension(d) {
  const entries = Object.entries(d).sort((a,b)=>a[1]-b[1]);
  return {key:entries[0][0], value:entries[0][1]};
}

function labelDim(key){
  return {
    activation:'activation mentale',
    attention:'stabilité attentionnelle',
    regulation:'régulation émotionnelle',
    engagement:'engagement',
    confidence:'confiance',
    resilience:'résilience',
    cognition:'cognition',
    motricity:'motricité'
  }[key] || key;
}

function buildProfileSummary(d, profiles) {
  const best = bestDimension(d), worst = worstDimension(d);
  return `Ce profil met en évidence un fonctionnement mental globalement orienté vers ${profiles[0].name.toLowerCase()}, avec des composantes secondaires ${profiles[1].name.toLowerCase()} et ${profiles[2].name.toLowerCase()}.

Les résultats indiquent une activation mentale évaluée à ${d.activation}%, une capacité de concentration de ${d.attention}%, une régulation émotionnelle de ${d.regulation}%, un engagement de ${d.engagement}%, une confiance de ${d.confidence}% et une résilience de ${d.resilience}%.

Globalement, ce profil révèle un sportif capable de mobiliser plusieurs ressources mentales utiles pour progresser et performer. La dimension la plus solide du moment semble être la ${labelDim(best.key)} (${best.value}%), tandis que le principal axe d’évolution se situe aujourd’hui sur la ${labelDim(worst.key)} (${worst.value}%).

L’objectif du rapport est d’identifier clairement sur quoi s’appuyer pour continuer à progresser, et quelles compétences mentales gagneraient à être davantage structurées dans l’entraînement et en situation d’enjeu.`;
}

function buildStrengthsText(d) {
  let blocks = [];
  blocks.push(`Plusieurs forces mentales se dégagent de ce profil.\n`);
  if (d.engagement >= 70) blocks.push(`D’abord, l’engagement apparaît comme un levier majeur. Il traduit une volonté réelle de progresser, une capacité à s’investir dans l’entraînement et une persévérance utile lorsque les situations deviennent exigeantes.`);
  else blocks.push(`L’engagement constitue déjà une base de travail intéressante. Il peut encore être consolidé pour renforcer la constance de l’effort et la capacité à poursuivre l’objectif même lorsque la motivation fluctue.`);
  if (d.attention >= 70) blocks.push(`Ensuite, la concentration ressort comme une compétence solide. Elle permet de rester centré sur l’action, d’identifier les informations importantes du jeu et de maintenir une bonne qualité de présence mentale en situation sportive.`);
  else blocks.push(`La concentration montre des ressources intéressantes. Même si elle n’est pas encore totalement stabilisée, elle constitue un point d’appui utile pour installer des routines plus solides.`);
  if (d.regulation >= 70) blocks.push(`La régulation émotionnelle est également un atout. Elle indique une capacité à revenir relativement vite à un état mental favorable après une erreur, une frustration ou un moment de tension.`);
  else blocks.push(`La régulation émotionnelle présente déjà des points d’appui. Le sportif semble disposer de ressources pour prendre du recul, même si cette compétence peut encore gagner en stabilité sous pression.`);
  if (d.confidence >= 70) blocks.push(`La confiance constitue une autre force importante. Elle favorise l’initiative, l’engagement dans l’action et une lecture plus positive de ses propres capacités.`);
  else blocks.push(`La confiance s’appuie sur plusieurs éléments positifs, mais peut encore être consolidée afin de rendre le sportif plus serein dans les moments de doute ou d’incertitude.`);
  return blocks.join("\n\n");
}

function buildProgressText(d) {
  let blocks = [];
  blocks.push(`Comme tout profil de performance, ce fonctionnement mental présente aussi plusieurs axes de progrès intéressants.\n`);
  if (d.attention < 70) blocks.push(`La première piste de développement concerne la stabilité de l’attention. Dans les contextes de pression, après une erreur ou lorsqu’un élément extérieur perturbe le sportif, il peut être utile d’apprendre à revenir plus rapidement à l’instant présent.`);
  if (d.regulation < 70) blocks.push(`La deuxième piste concerne la gestion émotionnelle. L’objectif n’est pas d’effacer les émotions, mais de mieux les reconnaître, de les accepter et de les transformer pour qu’elles n’interfèrent plus avec la qualité du jeu ou du geste.`);
  if (d.activation < 70) blocks.push(`Un autre axe de travail peut concerner l’activation mentale. Le sportif peut gagner à mieux ajuster son niveau d’énergie avant et pendant la compétition afin d’entrer dans l’action avec plus de disponibilité et d’intensité.`);
  if (d.confidence < 70) blocks.push(`La confiance mérite également d’être renforcée. Il s’agit ici de travailler la perception des ressources, la mémoire des réussites, ainsi que la manière d’interpréter les situations difficiles.`);
  if (d.resilience < 70) blocks.push(`Enfin, la résilience constitue un levier important. Développer la capacité à rebondir rapidement après une contre-performance ou une erreur permettra de rendre le fonctionnement mental plus solide dans la durée.`);
  if (blocks.length === 1) blocks.push(`Les axes de progrès sont moins liés à un manque de ressources qu’à la recherche d’une plus grande régularité. Le travail mental visera surtout à stabiliser ce qui fonctionne déjà bien dans les moments importants.`);
  return blocks.join("\n\n");
}

function buildActionPlan(d) {
  let blocks = [];
  blocks.push(`Le plan d’action mental proposé vise à transformer les résultats du test en habitudes concrètes et utiles dans le quotidien sportif.\n`);
  blocks.push(`Le premier axe consiste à structurer des routines mentales simples avant l’action : respiration, mot-clé, focalisation visuelle et rappel de l’objectif immédiat. Ces routines servent à créer de la stabilité dans les moments d’enjeu.`);
  blocks.push(`Le deuxième axe concerne la gestion de l’erreur. L’objectif sera d’apprendre à reconnaître rapidement ce qui s’est passé, à repartir sans ruminer et à transformer l’erreur en information utile pour l’action suivante.`);
  if (d.activation < 70 or True): pass
  blocks.push(`Le troisième axe vise l’ajustement de l’énergie mentale. Des exercices de respiration, de relâchement et de préparation avant compétition permettront d’obtenir un niveau d’activation plus juste, ni trop faible ni trop tendu.`);
  blocks.push(`Enfin, le travail s’orientera vers l’autonomie mentale : plus le sportif apprendra à comprendre son fonctionnement, plus il pourra utiliser seul ses outils de concentration, de régulation et de confiance dans les situations importantes.`);
  return blocks.join("\n\n");
}

function buildPlayerText(d, profiles) {
  return `Ce profil montre que tu possèdes déjà plusieurs ressources mentales utiles pour progresser dans ton sport. Certaines dimensions sont solides et peuvent devenir de vrais points d’appui dans les moments importants. D’autres demandent encore un peu de travail, ce qui est normal.

L’objectif du travail mental n’est pas d’être parfait partout. Il s’agit surtout de mieux comprendre comment tu fonctionnes, dans quelles situations tu es à l’aise, et dans quelles situations tu peux perdre un peu de lucidité, de confiance ou de stabilité.

En développant progressivement tes routines, ta capacité à te reconcentrer et ta manière de repartir après une erreur, tu pourras jouer avec plus de liberté, plus de régularité et davantage de confiance.`;
}

function buildParentText(d) {
  return `Ce rapport ne constitue pas un jugement de valeur, mais un outil de compréhension du fonctionnement mental du jeune sportif. Il permet d’identifier les ressources déjà présentes et les axes qui peuvent encore être accompagnés.

Le rôle des parents est essentiel dans cet équilibre. Un environnement sécurisant, encourageant, qui valorise l’effort et le progrès plutôt que le seul résultat, favorise le développement de la confiance et de l’autonomie.

L’enjeu n’est pas uniquement la performance sportive. Il s’agit aussi d’aider le jeune à mieux se connaître, à gérer les moments difficiles et à construire un rapport plus stable à l’effort, à l’erreur et à la progression.`;
}

function buildCoachText(d, profiles) {
  return `Ce profil fournit des indications concrètes pour adapter l’accompagnement sportif. Certaines compétences mentales peuvent être utilisées comme leviers immédiats de progression, tandis que d’autres méritent davantage de structuration.

Le travail de l’entraîneur peut s’appuyer sur des consignes claires, des objectifs simples, une aide au recentrage après erreur et une pédagogie qui valorise l’analyse constructive des situations vécues.

Ce rapport invite à ajuster non seulement le contenu du travail mental, mais aussi la manière de communiquer, de débriefer et d’installer des routines compatibles avec le fonctionnement du sportif.`;
}

function buildAudienceMotorSummary(type, code) {
  return `Correspondance directe dans le rapport : MBTI inspiré : ${type} → Préférence motrice : ${code}. ${MOTOR_CODE_DETAILS[code] || ''}`;
}

function renderScoreGrid(d) {
  els.scoreGrid.innerHTML = '';
  ['activation','attention','regulation','engagement','confidence','resilience'].forEach(key => {
    const val = d[key];
    const names = {activation:'Activation',attention:'Attention',regulation:'Régulation',engagement:'Engagement',confidence:'Confiance',resilience:'Résilience'};
    const card = document.createElement('div');
    card.className = 'score-card';
    card.innerHTML = `<div class="name">${names[key]}</div><div class="value">${val}</div><div class="meter"><span style="width:${val}%"></span></div>`;
    els.scoreGrid.appendChild(card);
  });
}

function renderPreferenceGrid(ax, type, code, d) {
  els.preferenceGrid.innerHTML = '';
  const prefs = [
    ['E', ax.E], ['I', ax.I], ['S', ax.S], ['N', ax.N],
    ['T', ax.T], ['F', ax.F], ['J', ax.J], ['P', ax.P],
    ['Type inspiré', type], ['Préférence motrice', code],
    ['Cognition', d.cognition], ['Motricité', d.motricity]
  ];
  prefs.forEach(([label, val]) => {
    const card = document.createElement('div');
    card.className = 'score-card';
    const meter = typeof val === 'number' ? `<div class="meter"><span style="width:${val}%"></span></div>` : '';
    card.innerHTML = `<div class="name">${label}</div><div class="value">${val}</div>${meter}`;
    els.preferenceGrid.appendChild(card);
  });
}

function drawPmpRadar(d) {
  const canvas = els.pmpRadar;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const cx = w/2, cy = h/2, radius = Math.min(w,h)*0.34;
  const labels = ['Activation','Attention','Régulation','Engagement','Confiance','Résilience'];
  const vals = [d.activation,d.attention,d.regulation,d.engagement,d.confidence,d.resilience];
  const n = labels.length;
  for (let level=1; level<=5; level++) {
    const r = radius * (level/5);
    ctx.beginPath();
    for (let i=0;i<n;i++){
      const a=(-Math.PI/2)+(i*2*Math.PI/n),x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.closePath(); ctx.strokeStyle='rgba(130,157,212,0.25)'; ctx.lineWidth=1; ctx.stroke();
  }
  for (let i=0;i<n;i++){
    const a=(-Math.PI/2)+(i*2*Math.PI/n),x=cx+Math.cos(a)*radius,y=cy+Math.sin(a)*radius;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y); ctx.strokeStyle='rgba(130,157,212,0.35)'; ctx.stroke();
    const lx=cx+Math.cos(a)*(radius+40), ly=cy+Math.sin(a)*(radius+40);
    ctx.fillStyle='#eef4ff'; ctx.font='600 16px Arial';
    ctx.textAlign = lx<cx-10?'right':lx>cx+10?'left':'center';
    ctx.textBaseline = ly<cy?'bottom':'top';
    ctx.fillText(labels[i],lx,ly);
  }
  ctx.beginPath();
  vals.forEach((val,i)=>{
    const a=(-Math.PI/2)+(i*2*Math.PI/n),r=radius*(val/100),x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.closePath(); ctx.fillStyle='rgba(121,167,255,0.18)'; ctx.strokeStyle='rgba(212,227,255,0.95)'; ctx.lineWidth=3; ctx.fill(); ctx.stroke();
  vals.forEach((val,i)=>{
    const a=(-Math.PI/2)+(i*2*Math.PI/n),r=radius*(val/100),x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fillStyle='#d4e3ff'; ctx.fill();
  });
}

function showResults() {
  const unanswered = QUESTIONS.filter(q => !answers[q.id]);
  if (unanswered.length) {
    const ok = confirm(`Il reste ${unanswered.length} question(s) sans réponse. Les calculs seront faits uniquement sur les questions répondues. Continuer ?`);
    if (!ok) return;
  }
  saveState();
  const scores = computeScores();
  const profiles = computeProfiles(scores.dimensions);
  const m = meta();
  const parts = [m.name || 'Sportif', m.sport || 'Sport non renseigné', m.age ? `${m.age} ans` : '', m.club || '', m.date || ''].filter(Boolean);
  els.identityLine.textContent = parts.join(' · ');
  els.mbtiTypeLine.textContent = scores.mbtiType;
  els.motorCodeLine.textContent = scores.motorCode;
  els.motorExplain.textContent = `${scores.mbtiType} → ${scores.motorCode} • ${MOTOR_CODE_DETAILS[scores.motorCode] || ''}`;
  els.mainProfile.textContent = profiles[0].name;
  els.secondaryProfile.textContent = profiles[1].name;
  els.tertiaryProfile.textContent = profiles[2].name;
  els.summaryText.textContent = buildProfileSummary(scores.dimensions, profiles);
  els.strengthsText.textContent = buildStrengthsText(scores.dimensions);
  els.progressText.textContent = buildProgressText(scores.dimensions);
  els.planText.textContent = buildActionPlan(scores.dimensions);
  els.playerSummary.textContent = buildPlayerText(scores.dimensions, profiles);
  els.parentSummary.textContent = buildParentText(scores.dimensions);
  els.coachSummary.textContent = buildCoachText(scores.dimensions, profiles);
  renderScoreGrid(scores.dimensions);
  renderPreferenceGrid(scores.mbtiAxes, scores.mbtiType, scores.motorCode, scores.dimensions);
  drawPmpRadar(scores.dimensions);
  els.resultsCard.classList.remove('hidden');
  els.testCard.classList.add('hidden');
  window.scrollTo({top: els.resultsCard.offsetTop - 12, behavior:'smooth'});
}

function exportJSON() {
  const payload = {meta: meta(), answers, analysis: computeScores()};
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pmp_a4p_resultats.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function restart() {
  if (!confirm('Recommencer le test ? Les réponses seront effacées.')) return;
  answers = {}; currentIndex = 0;
  localStorage.removeItem('pmp_a4p_complete');
  els.resultsCard.classList.add('hidden');
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.remove('hidden');
  renderQuestion();
}

init();
