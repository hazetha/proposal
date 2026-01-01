let current = 1;
const hearts = document.getElementById("hearts");

function next(){
  document.getElementById("s"+current).classList.remove("active");
  current++;
  document.getElementById("s"+current).classList.add("active");

  if(current === 3 || current === 5){
    heartBlast();
  }
}

// NO button escapes
const no = document.getElementById("no");
if(no){
  no.addEventListener("mouseover",()=>{
    no.style.position="absolute";
    no.style.left=Math.random()*(window.innerWidth-100)+"px";
    no.style.top=Math.random()*(window.innerHeight-50)+"px";
  });
}

function finalYes(){
  document.getElementById("s4").classList.remove("active");
  document.getElementById("s5").classList.add("active");
  heartBlast();
}

// hearts animation
function heartBlast(){
  for(let i=0;i<20;i++){
    setTimeout(()=>{
      const h=document.createElement("span");
      h.innerHTML="❤️";
      h.style.left=Math.random()*window.innerWidth+"px";
      h.style.top="100vh";
      hearts.appendChild(h);
      setTimeout(()=>h.remove(),4000);
    },i*150);
  }
}
