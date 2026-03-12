const QUESTIONS = [
  {
    "id": 1,
    "dimension": "activation",
    "text": "Dans les moments importants, mon niveau d’énergie augmente.",
    "reverse": false
  },
  {
    "id": 2,
    "dimension": "activation",
    "text": "La pression perturbe mes gestes techniques.",
    "reverse": true
  },
  {
    "id": 3,
    "dimension": "activation",
    "text": "L’enjeu me donne envie de me dépasser.",
    "reverse": false
  },
  {
    "id": 4,
    "dimension": "activation",
    "text": "Avant une compétition, je ressens une tension physique difficile à canaliser.",
    "reverse": true
  },
  {
    "id": 5,
    "dimension": "activation",
    "text": "La pression me rend plus concentré.",
    "reverse": false
  },
  {
    "id": 6,
    "dimension": "activation",
    "text": "Je perds mes moyens dans les moments décisifs.",
    "reverse": true
  },
  {
    "id": 7,
    "dimension": "activation",
    "text": "Les situations difficiles stimulent ma performance.",
    "reverse": false
  },
  {
    "id": 8,
    "dimension": "activation",
    "text": "Je me sens à l’aise quand l’enjeu est élevé.",
    "reverse": false
  },
  {
    "id": 9,
    "dimension": "activation",
    "text": "Mon corps devient trop tendu sous pression.",
    "reverse": true
  },
  {
    "id": 10,
    "dimension": "activation",
    "text": "Les grands rendez-vous me donnent de l’élan.",
    "reverse": false
  },
  {
    "id": 11,
    "dimension": "activation",
    "text": "J’évite mentalement les moments importants.",
    "reverse": true
  },
  {
    "id": 12,
    "dimension": "activation",
    "text": "Je peux performer même quand la pression monte.",
    "reverse": false
  },
  {
    "id": 13,
    "dimension": "activation",
    "text": "Plus l’enjeu augmente, plus je me crispe.",
    "reverse": true
  },
  {
    "id": 14,
    "dimension": "activation",
    "text": "J’aime sentir qu’un match compte vraiment.",
    "reverse": false
  },
  {
    "id": 15,
    "dimension": "activation",
    "text": "Je transforme le stress en énergie utile.",
    "reverse": false
  },
  {
    "id": 16,
    "dimension": "activation",
    "text": "L’importance du moment fait baisser mon niveau de jeu.",
    "reverse": true
  },
  {
    "id": 17,
    "dimension": "attention",
    "text": "Je reste concentré longtemps pendant un match ou un entraînement.",
    "reverse": false
  },
  {
    "id": 18,
    "dimension": "attention",
    "text": "Le bruit ou le public me déconcentre facilement.",
    "reverse": true
  },
  {
    "id": 19,
    "dimension": "attention",
    "text": "Je sais me reconcentrer rapidement après une erreur.",
    "reverse": false
  },
  {
    "id": 20,
    "dimension": "attention",
    "text": "Après une action ratée, mon attention revient vite sur le jeu.",
    "reverse": false
  },
  {
    "id": 21,
    "dimension": "attention",
    "text": "Je repère bien les détails utiles de la situation.",
    "reverse": false
  },
  {
    "id": 22,
    "dimension": "attention",
    "text": "Je pense souvent à autre chose pendant l’action.",
    "reverse": true
  },
  {
    "id": 23,
    "dimension": "attention",
    "text": "Je reste focalisé malgré les perturbations.",
    "reverse": false
  },
  {
    "id": 24,
    "dimension": "attention",
    "text": "Je peux diriger toute mon attention sur l’instant présent.",
    "reverse": false
  },
  {
    "id": 25,
    "dimension": "attention",
    "text": "Mon esprit s’échappe facilement du match.",
    "reverse": true
  },
  {
    "id": 26,
    "dimension": "attention",
    "text": "Je maintiens ma concentration jusqu’à la fin.",
    "reverse": false
  },
  {
    "id": 27,
    "dimension": "attention",
    "text": "Je perds le fil quand plusieurs choses se passent en même temps.",
    "reverse": true
  },
  {
    "id": 28,
    "dimension": "attention",
    "text": "Je retrouve vite mes repères attentionnels.",
    "reverse": false
  },
  {
    "id": 29,
    "dimension": "attention",
    "text": "Je repère bien les signaux utiles du jeu.",
    "reverse": false
  },
  {
    "id": 30,
    "dimension": "attention",
    "text": "Les distractions prennent rapidement le dessus sur moi.",
    "reverse": true
  },
  {
    "id": 31,
    "dimension": "attention",
    "text": "Je sais revenir à l’essentiel dans les moments clés.",
    "reverse": false
  },
  {
    "id": 32,
    "dimension": "attention",
    "text": "Ma concentration varie trop selon les circonstances.",
    "reverse": true
  },
  {
    "id": 33,
    "dimension": "regulation",
    "text": "Mes émotions influencent fortement ma performance.",
    "reverse": true
  },
  {
    "id": 34,
    "dimension": "regulation",
    "text": "Je sais calmer mon stress rapidement.",
    "reverse": false
  },
  {
    "id": 35,
    "dimension": "regulation",
    "text": "Une frustration reste longtemps dans ma tête.",
    "reverse": true
  },
  {
    "id": 36,
    "dimension": "regulation",
    "text": "Je retrouve vite mon calme après une erreur.",
    "reverse": false
  },
  {
    "id": 37,
    "dimension": "regulation",
    "text": "Je sais transformer une erreur en motivation.",
    "reverse": false
  },
  {
    "id": 38,
    "dimension": "regulation",
    "text": "Je peux perdre mon calme en compétition.",
    "reverse": true
  },
  {
    "id": 39,
    "dimension": "regulation",
    "text": "Je régule efficacement mes émotions.",
    "reverse": false
  },
  {
    "id": 40,
    "dimension": "regulation",
    "text": "Je ressens les émotions très intensément au point d’être débordé.",
    "reverse": true
  },
  {
    "id": 41,
    "dimension": "regulation",
    "text": "Je sais utiliser ma respiration pour me recentrer.",
    "reverse": false
  },
  {
    "id": 42,
    "dimension": "regulation",
    "text": "Mes émotions perturbent mon jeu trop longtemps.",
    "reverse": true
  },
  {
    "id": 43,
    "dimension": "regulation",
    "text": "Je retrouve rapidement mon équilibre émotionnel.",
    "reverse": false
  },
  {
    "id": 44,
    "dimension": "regulation",
    "text": "Je garde mon calme sous pression.",
    "reverse": false
  },
  {
    "id": 45,
    "dimension": "regulation",
    "text": "Je gère bien la frustration.",
    "reverse": false
  },
  {
    "id": 46,
    "dimension": "regulation",
    "text": "Quand je suis contrarié, cela change vite mon comportement sur le terrain.",
    "reverse": true
  },
  {
    "id": 47,
    "dimension": "regulation",
    "text": "Je prends du recul après une erreur.",
    "reverse": false
  },
  {
    "id": 48,
    "dimension": "regulation",
    "text": "Je mets du temps à revenir mentalement dans le match.",
    "reverse": true
  },
  {
    "id": 49,
    "dimension": "engagement",
    "text": "Je m’entraîne sérieusement même quand je n’en ai pas envie.",
    "reverse": false
  },
  {
    "id": 50,
    "dimension": "engagement",
    "text": "Je me fixe des objectifs ambitieux.",
    "reverse": false
  },
  {
    "id": 51,
    "dimension": "engagement",
    "text": "Les difficultés me donnent envie de progresser.",
    "reverse": false
  },
  {
    "id": 52,
    "dimension": "engagement",
    "text": "Je persévère malgré les obstacles.",
    "reverse": false
  },
  {
    "id": 53,
    "dimension": "engagement",
    "text": "J’aime progresser dans mon sport.",
    "reverse": false
  },
  {
    "id": 54,
    "dimension": "engagement",
    "text": "Je travaille mes points faibles avec régularité.",
    "reverse": false
  },
  {
    "id": 55,
    "dimension": "engagement",
    "text": "Les défis me stimulent.",
    "reverse": false
  },
  {
    "id": 56,
    "dimension": "engagement",
    "text": "Je m’investis pleinement à l’entraînement.",
    "reverse": false
  },
  {
    "id": 57,
    "dimension": "engagement",
    "text": "Après un échec, ma motivation baisse durablement.",
    "reverse": true
  },
  {
    "id": 58,
    "dimension": "engagement",
    "text": "J’ai envie de progresser constamment.",
    "reverse": false
  },
  {
    "id": 59,
    "dimension": "engagement",
    "text": "Je me donne à fond dans les séances importantes.",
    "reverse": false
  },
  {
    "id": 60,
    "dimension": "engagement",
    "text": "Je suis déterminé à atteindre mes objectifs.",
    "reverse": false
  },
  {
    "id": 61,
    "dimension": "engagement",
    "text": "Je reste engagé même quand les résultats tardent.",
    "reverse": false
  },
  {
    "id": 62,
    "dimension": "engagement",
    "text": "Je reporte facilement les efforts difficiles.",
    "reverse": true
  },
  {
    "id": 63,
    "dimension": "engagement",
    "text": "La progression me motive au quotidien.",
    "reverse": false
  },
  {
    "id": 64,
    "dimension": "engagement",
    "text": "Je suis persévérant.",
    "reverse": false
  },
  {
    "id": 65,
    "dimension": "cognition",
    "text": "J’aime comprendre une technique avant de l’appliquer.",
    "reverse": false
  },
  {
    "id": 66,
    "dimension": "cognition",
    "text": "J’apprends beaucoup en observant les autres.",
    "reverse": false
  },
  {
    "id": 67,
    "dimension": "cognition",
    "text": "J’analyse souvent mes performances.",
    "reverse": false
  },
  {
    "id": 68,
    "dimension": "cognition",
    "text": "Je me fie à mon intuition dans le jeu.",
    "reverse": false
  },
  {
    "id": 69,
    "dimension": "cognition",
    "text": "Je réfléchis aux stratégies possibles.",
    "reverse": false
  },
  {
    "id": 70,
    "dimension": "cognition",
    "text": "J’apprends en expérimentant directement.",
    "reverse": false
  },
  {
    "id": 71,
    "dimension": "cognition",
    "text": "Je cherche à comprendre précisément mes erreurs.",
    "reverse": false
  },
  {
    "id": 72,
    "dimension": "cognition",
    "text": "Je me fie d’abord à mes sensations.",
    "reverse": false
  },
  {
    "id": 73,
    "dimension": "cognition",
    "text": "J’aime analyser ce qui fonctionne ou non.",
    "reverse": false
  },
  {
    "id": 74,
    "dimension": "cognition",
    "text": "J’observe beaucoup les situations de jeu.",
    "reverse": false
  },
  {
    "id": 75,
    "dimension": "cognition",
    "text": "Je réfléchis aux solutions avant d’agir.",
    "reverse": false
  },
  {
    "id": 76,
    "dimension": "cognition",
    "text": "Je fais confiance à mon instinct dans l’instant.",
    "reverse": false
  },
  {
    "id": 77,
    "dimension": "cognition",
    "text": "J’aime comprendre la logique globale du jeu.",
    "reverse": false
  },
  {
    "id": 78,
    "dimension": "cognition",
    "text": "J’organise mentalement ma progression.",
    "reverse": false
  },
  {
    "id": 79,
    "dimension": "cognition",
    "text": "Je prends facilement de la hauteur pour comprendre la situation.",
    "reverse": false
  },
  {
    "id": 80,
    "dimension": "cognition",
    "text": "Je préfère improviser sans trop analyser.",
    "reverse": true
  },
  {
    "id": 81,
    "dimension": "cognition",
    "text": "Je mémorise mieux quand j’ai compris le sens de l’exercice.",
    "reverse": false
  },
  {
    "id": 82,
    "dimension": "cognition",
    "text": "Je préfère une consigne claire à une simple démonstration.",
    "reverse": false
  },
  {
    "id": 83,
    "dimension": "action",
    "text": "Je préfère répéter un geste jusqu’à le maîtriser.",
    "reverse": false
  },
  {
    "id": 84,
    "dimension": "action",
    "text": "Je suis plus performant quand je joue instinctivement.",
    "reverse": false
  },
  {
    "id": 85,
    "dimension": "action",
    "text": "Je ressens bien mon corps dans le mouvement.",
    "reverse": false
  },
  {
    "id": 86,
    "dimension": "action",
    "text": "Je m’adapte facilement aux situations imprévues.",
    "reverse": false
  },
  {
    "id": 87,
    "dimension": "action",
    "text": "J’aime une technique précise et des repères stables.",
    "reverse": false
  },
  {
    "id": 88,
    "dimension": "action",
    "text": "Je joue mieux quand je me sens libre.",
    "reverse": false
  },
  {
    "id": 89,
    "dimension": "action",
    "text": "Je ressens facilement le rythme du jeu.",
    "reverse": false
  },
  {
    "id": 90,
    "dimension": "action",
    "text": "Je m’ajuste rapidement aux changements.",
    "reverse": false
  },
  {
    "id": 91,
    "dimension": "action",
    "text": "Je recherche la précision technique.",
    "reverse": false
  },
  {
    "id": 92,
    "dimension": "action",
    "text": "Je joue de manière spontanée.",
    "reverse": false
  },
  {
    "id": 93,
    "dimension": "action",
    "text": "Je sens bien mes appuis et mes placements.",
    "reverse": false
  },
  {
    "id": 94,
    "dimension": "action",
    "text": "Je modifie naturellement mon geste selon la situation.",
    "reverse": false
  },
  {
    "id": 95,
    "dimension": "action",
    "text": "Je progresse grâce à la répétition.",
    "reverse": false
  },
  {
    "id": 96,
    "dimension": "action",
    "text": "Je suis efficace quand je laisse venir le geste.",
    "reverse": false
  },
  {
    "id": 97,
    "dimension": "action",
    "text": "Je préfère des repères simples pour exécuter.",
    "reverse": false
  },
  {
    "id": 98,
    "dimension": "action",
    "text": "Je m’enferme parfois trop dans la technique.",
    "reverse": true
  },
  {
    "id": 99,
    "dimension": "action",
    "text": "Je suis meilleur quand je peux adapter mon action.",
    "reverse": false
  },
  {
    "id": 100,
    "dimension": "action",
    "text": "Je trouve facilement le bon timing dans le mouvement.",
    "reverse": false
  }
];