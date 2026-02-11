// --- الأسئلة ---
const questions = [
  {q:"1. I found some difficulties while dealing with the new app. The synonyms of the word \"difficulties\" are ________ and ________.",o:["facilities","mistakes","holes","hardships","complications"],a:[3,4]},
  {q:"2. The management team is planning to promote public relations. The antonyms of the word \"promote\" are ________ and ________.",o:["advance","hinder","discourage","advocate","change"],a:[1,2]},
  {q:"3. To improve your English, you should practice speaking regularly. The synonyms of the word \"regularly\" are ________ and ________.",o:["never","rarely","seldom","frequently","routinely"],a:[3,4]},
  {q:"4. She has an international team with colleagues from different countries. The opposites of the word \"international\" are ________ and ________.",o:["national","local","foreign","global","worldwide"],a:[0,1]},
  {q:"5. The price of the ticket will include lunch and drinks. The antonyms of the word \"include\" are ________ and ________.",o:["contain","exclude","involve","omit","cover"],a:[1,3]},
  {q:"6. Learning foreign languages is a great way to understand new cultures.",o:["clear","foreign","regular","national"],a:[1]},
  {q:"7. It's important to be proud of your ______ language and heritage.",o:["subtitle","foreign","native","horizon"],a:[2]},
  {q:"8. She loves traveling to learn about different ______ and traditions.",o:["climates","histories","geographies","cultures"],a:[3]},
  {q:"9. The new job will give you many ______ to grow your career.",o:["opportunities","relatives","obstacles","problems"],a:[0]},
  {q:"10. The company is ______ its business into new international markets.",o:["changing","closing","making","expanding"],a:[3]},
  {q:"11. Successful teamwork requires ______ of different opinions and working styles.",o:["indifference","hostility","tolerance","ignorance"],a:[2]},
  {q:"12. She practices her piano skills ______ to prepare for the concert.",o:["rarely","occasionally","irregularly","regularly"],a:[3]},
  {q:"13. His goal is to achieve ______ in English before he graduates.",o:["familiarity","knowledge","fluency","understanding"],a:[2]},
  {q:"14. She participated in a/an ______ to improve her language skills.",o:["sports program","exchange program","art class","cooking course"],a:[1]},
  {q:"15. He is thinking of ______ a new club to meet new people.",o:["leaving","joining","avoiding","ignoring"],a:[1]},
  {q:"16. Farida Osman, a swimming ______, won a medal in a competition.",o:["journey","competition","discussion","game"],a:[1]},
  {q:"17. It is good to get feedback from your ______ to improve your study.",o:["ideas","managers","peers","skills"],a:[2]},
  {q:"18. The product is sold ______ with customers in every major continent.",o:["locally","nationally","regionally","worldwide"],a:[3]},
  {q:"19. Don't ______ to ask for help if you don't understand the lesson.",o:["decide","refuse","hesitate","forget"],a:[2]},
  {q:"20. Learning a new language can be a/an ______ process, but it's worth it.",o:["time-consuming","real-life","easy","short"],a:[0]},
  {q:"21. He ______ works on his project every day to meet the deadline.",o:["rarely","inconsistently","occasionally","consistently"],a:[3]},
  {q:"22. Reading different books gives you new ______.",o:["problems","perspectives","thoughts","systems"],a:[1]},
  {q:"23. The research team came up with ______ solutions to the problem.",o:["single","one","multiple","none"],a:[2]},
  {q:"24. Traveling is a great way of ______ your horizons.",o:["limiting","narrowing","closing","expanding"],a:[3]},
  {q:"25. A university with a diverse student body is a truly ______ environment.",o:["simple","boring","multicultural","difficult"],a:[2]},
  {q:"26. He can speak five different languages fluently. He is ______.",o:["monolingual","multilingual","bilingual","unilingual"],a:[1]},
  {q:"27. The teams need to ______ to finish the project on time.",o:["compete","argue","collaborate","ignore"],a:[2]},
  {q:"28. You must ______ yourself to finish the project on time.",o:["dedicate","waste","lose","forget"],a:[0]},
  {q:"29. His ______ is to learn 100 new words every week.",o:["respect","target","subtitle","design"],a:[1]},
  {q:"30. She felt ______ about speaking in public for the first time.",o:["calm","confident","relaxed","anxious"],a:[3]},
  {q:"31. We live in a modern world where technology is constantly changing. The opposites of the word \"modern\" are ________ and ________.",o:["up-to-date","ancient","contemporary","old-fashioned","new"],a:[1,3]},
  {q:"32. She was worried about her final exam results. The antonyms of the word \"worried\" are ________ and ________.",o:["anxious","calm","contemporary","relaxed","nervous"],a:[1,3]},
  {q:"33. The company expanded its business to many new countries. The synonyms of the word \"expanded\" are ________ and ________.",o:["shrunk","enlarged","reduced","limited","extended"],a:[1,4]},
  {q:"34. To be a good manager, you need to trust your team to work independently. The antonyms of the word \"independently\" are ________ and ________.",o:["dependently","separately","autonomously","collaboratively","alone"],a:[0,3]},
  {q:"35. She wanted to make a good impression on her new boss. The synonyms of the word \"impression\" are ________ and ________.",o:["effect","impact","disinterest","indifference","neglect"],a:[0,1]},
  {q:"36. Searching for a job can be a challenging process that requires a lot of effort and patience.",o:["avoiding","ignoring","learning","hiring"],a:[2]},
  {q:"37. ______ technology has made communication faster and more convenient than ever before.",o:["Modern","Ancient","Old-fashioned","Traditional"],a:[0]},
  {q:"38. She made a strong ______ during the presentation.",o:["opinion","impression","decision","expression"],a:[1]},
  {q:"39. I have a/an ______ for a job next week.",o:["meeting","assembly","interview","discussion"],a:[2]},
  {q:"40. ______ the job market requires you to understand current trends and opportunities.",o:["Navigating","Avoiding","Escaping","Ignoring"],a:[0]},
  {q:"41. The ______ market has become highly competitive, with many qualified candidates for each position.",o:["entertainment","employment","sports","production"],a:[1]},
  {q:"42. The global job ______ is becoming more competitive every year.",o:["market","scene","environment","landscape"],a:[0]},
  {q:"43. The way companies hire has been dramatically ______ over the past decade.",o:["exchanged","transformed","stopped","remained"],a:[1]},
  {q:"44. A ______ resume focuses on your work history and skills.",o:["report","skills","projects","education"],a:[1]},
  {q:"45. His success was ______ due to his hard work and determination.",o:["slightly","hardly","largely","rarely"],a:[2]},
  {q:"46. Online job ______ allow you to apply for jobs anywhere in the world.",o:["forums","platforms","websites","groups"],a:[1]},
  {q:"47. Job ______ must be prepared to stand out from the crowd.",o:["seekers","viewers","employers","advisors"],a:[0]},
  {q:"48. The lawyer gave a ______ performance that impressed the judges.",o:["polished","rough","weak","careless"],a:[0]},
  {q:"49. There were over 500 ______ for the position.",o:["candidates","people","seekers","applications"],a:[3]},
  {q:"50. Be careful what you post online, as your digital ______ can be seen by employers.",o:["impression","assessment","footprint","image"],a:[2]},
  {q:"51. She is a member of several professional ______ to network with others.",o:["groups","associations","societies","clubs"],a:[1]},
  {q:"52. Avoid sending a ______ cover letter; customize it for each job.",o:["unique","specific","generic","special"],a:[2]},
  {q:"53. You should always ______ your resume to fit the job requirements.",o:["modify","keep","change","ignore"],a:[0]},
  {q:"54. His ______ to solving problem is very creative.",o:["struggle","solution","network","approach"],a:[3]},
  {q:"55. The project will ______ several departments working together.",o:["include","involve","contain","consist"],a:[1]},
  {q:"56. Can you be more ______ about the kind of books you like to read?",o:["specific","broad","general","unclear"],a:[0]},
  {q:"57. A positive attitude is a/an ______ part of finding a job.",o:["unimportant","non-essential","essential","challenging"],a:[2]},
  {q:"58. He is a highly ______ candidate for the position.",o:["qualified","updated","positive","experienced"],a:[0]},
  {q:"59. She sent her resume to ______ of companies before she got a job.",o:["many","dozens","much","few"],a:[1]},
  {q:"60. Your ______ towards your work can determine your success.",o:["feeling","opportunity","attitude","skill"],a:[2]}
];

let i = 0, time = 3600, timer;
questions.forEach(q => q.u = []);

// --- Matrix Rain Logic ---
function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = canvas.width/fontSize;
    const rainDrops = Array.from({length: columns}).fill(canvas.height);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#3b82f6';
        ctx.font = fontSize + 'px monospace';
        for(let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
            rainDrops[i]++;
        }
    }
    
    setInterval(drawMatrix, 30);
}

// --- Quiz Logic ---
function render() {
    const q = questions[i];
    const qBox = document.getElementById("qbox");
    
    qBox.innerHTML = `<div class="q-text">> ${q.q}</div>` + 
        q.o.map((x, idx) => `
        <label>
            <input type="checkbox" ${q.u.includes(idx) ? "checked" : ""} onchange="sel(${idx})"> 
            [ ${String.fromCharCode(65+idx)} ] ${x}
        </label>`).join("");
    
    document.getElementById("result").innerText = "";
    updateSidebar();
}

function sel(x) {
    const u = questions[i].u;
    u.includes(x) ? u.splice(u.indexOf(x), 1) : u.push(x);
    render();
}

function check() {
    const q = questions[i];
    const res = document.getElementById("result");
    if (q.u.length === 0) { 
        res.innerText = "!! [ ERROR ]: NULL DATA DETECTED"; 
        res.style.color = "#ff4f4f";
        return; 
    }
    const isCorrect = JSON.stringify(q.u.sort()) === JSON.stringify(q.a.sort());
    res.innerText = isCorrect ? ">> [ SUCCESS ]: PATTERN MATCHED" : "!! [ FAILED ]: HASH MISMATCH";
    res.style.color = isCorrect ? "#4fffa5" : "#ff4f4f";
}

function nextQ() { 
    i < questions.length - 1 ? (i++, render()) : finish(); 
}

function prevQ() { 
    if (i > 0) { i--; render(); } 
}

function updateSidebar() {
    const list = document.getElementById("unanswered");
    list.innerHTML = "";
    questions.forEach((q, idx) => {
        const li = document.createElement("li");
        li.innerText = (idx + 1).toString().padStart(2, '0');
        if (q.u.length > 0) li.classList.add('answered');
        li.onclick = () => { i = idx; render() };
        list.appendChild(li);
    });
}

function startTimer() {
    timer = setInterval(() => {
        time--;
        const h = Math.floor(time / 3600), m = Math.floor((time % 3600) / 60), s = time % 60;
        document.getElementById("timer").innerText = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        if (time <= 0) finish();
    }, 1000);
}

function finish() {
    clearInterval(timer);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("final").style.display = "block";
    let score = 0;
    questions.forEach(q => { 
        if (JSON.stringify(q.u.sort()) === JSON.stringify(q.a.sort())) score++; 
    });
    document.getElementById("score").innerText = `${score}/${questions.length}`;
}

// --- Initialize on page load ---
window.addEventListener('load', () => {
    initMatrix();
    render();
    startTimer();
});