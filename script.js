
const secret="0310";
const startDate = new Date("2025-10-03"); // عدل التاريخ هنا
const text = `احلي حاجه ف حياتي ❤️ اللي دايما سنداني ووقفه جمبي 🙈❤️

أنا مليش غيرك 🙈💖
وبحبك اوي اوي اوي 💖🥰
وبعشقك ❤️🙈
وبدمنك 🫂💋❤️🥰

انتي سبب فرحتي ❤️
انتي سندي ❤️
انتي روحي ❤️
انتي مصدر الأمان ❤️
انتي مصدر الراحه ❤️
بموت فيكي يبطتي ❤️❤️❤️❤️🫂💋`;

function unlock(){
 if(document.getElementById("password").value!==secret){
   alert("كلمة السر غير صحيحة");
   return;
 }
 document.getElementById("login").style.display="none";
 document.getElementById("app").classList.remove("hidden");
 typeWriter();
 updateCounter();
 setInterval(updateCounter,1000);
}

function typeWriter(){
 const el=document.getElementById("message");
 let i=0;
 const timer=setInterval(()=>{
   el.textContent += text[i];
   i++;
   if(i>=text.length) clearInterval(timer);
 },25);
}

function updateCounter(){
 const now = new Date();
 const diff = now - startDate;
 const days = Math.floor(diff/86400000);
 document.getElementById("counter").innerHTML =
 `⏳ مع بعض منذ ${days} يوم ❤️`;
}

setInterval(()=>{
 const s=document.createElement("span");
 s.innerHTML="❤️";
 s.style.left=Math.random()*100+"vw";
 s.style.animationDuration=(5+Math.random()*5)+"s";
 document.getElementById("hearts").appendChild(s);
 setTimeout(()=>s.remove(),9000);
},400);
