
async function loadData(){
const q = await fetch('questions.json').then(r=>r.json())
const container = document.getElementById('test')

q.forEach(item=>{
let div=document.createElement('div')
div.className="question"
div.innerHTML=`<p>${item.text}</p>
<select id="q${item.id}">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>`
container.appendChild(div)
})
}

async function calculate(){

const q = await fetch('questions.json').then(r=>r.json())
const mapping = await fetch('mapping.json').then(r=>r.json())

let scores={}

q.forEach(item=>{

let v=parseInt(document.getElementById("q"+item.id).value)

if(item.dimension!="mbti"){
if(!scores[item.dimension]) scores[item.dimension]=0
scores[item.dimension]+=v
}

})

let report=document.getElementById("report")

report.innerHTML=`
<div class="report-section">
<h2>Portrait mental</h2>
<p>Votre profil mental révèle une manière spécifique d’entrer dans l’action et de mobiliser vos ressources.</p>
</div>

<div class="report-section">
<h2>Forces mentales</h2>
<p>Les résultats indiquent des ressources importantes en engagement et en progression.</p>
</div>

<div class="report-section">
<h2>Axes de progression</h2>
<p>Certaines dimensions peuvent être stabilisées afin d’améliorer la constance sous pression.</p>
</div>

<div class="report-section">
<h2>Plan de progression mentale</h2>
<p>Le travail mental peut s’appuyer sur des routines de concentration, de respiration et de gestion de l’erreur.</p>
</div>
`
}

loadData()
