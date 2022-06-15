const divContainer = document.getElementById('container');
divContainer.innerHTML += `
<h2 id="title">Hi! I'm Suman Roy, junior web developer. I love to create and design awesome web apps</h2>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="particle" id="particle"></div>
<div class="border" id="border"></div>        
</div>
`
const projectGallery = document.getElementById('projects')

projectGallery.innerHTML += `<div class="myprojects">
<div class="project-box 1" id="project1">
    <h3>Recipe Tips</h3>
    <img  id="i1" src="./images/RT banner.png" alt="">
</div>
<div class="project-box 2" id="project2">
    <h3>Wordle Game</h3>
    <img id="i2" src="./images/WG banner.png" alt="">
</div>
<div class="project-box 3" id="project3">
    <h3>Chat App</h3>
    <img id="i3" src="./images/rtc logo 2.png" alt"">
</div>
<div class="project-box 4" id="project4">
    <h3>Weather App</h3>
    <img id="i4" src="./images/rtc logo 2.png" alt"">
</div>
`


const achievements = document.querySelector('.achievements-ul');
achievements.innerHTML= `<li class="bullets">Scored 82% in Boards of 10+2</li>
<li class="bullets">Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
<li class="bullets">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium praesentium cumque, rem est sint!</li>
<li class="bullets">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus totam eos, cum magnam explicabo quas.</li> `

//scrolling to top
function scrollWindow(){
    window.scrollTo(0,0);
}


// click events on the projects
let paragraph = document.createElement('p');
let pImage;
let paraState = false;


// show the project and manipulate the DOM accordingly
const showProject =(paragraph,pImage,projectNum)=>{
    if(!paraState){
        pImage.style.display="none";
        projectNum.appendChild(paragraph);
        paraState=true;
    }
    else if(paraState){
        pImage.style.display="inline";
        projectNum.removeChild(paragraph);
        paraState=false;
    }
    else{
        paraState=false;
    }
}

// project 1
const project1 = document.querySelector('#project1');
project1.addEventListener("click" ,()=>{
    project1.classList.toggle('clickedp');
    pImage=document.getElementById('i1');
    paragraph.innerText="This is a website which provides tips for famous continental recipes. This project doesn't have any backend and is hosted on Netlify";
    showProject(paragraph,pImage);
    
});

// project 2
const project2 = document.querySelector('#project2');
project2.addEventListener('click',()=>{
    project2.classList.toggle('clickedp');
    pImage=document.getElementById('i2');
    paragraph.innerText="This is a javascript game which resembles the Wordle Game and has almost similar rules and winning conditions.";
    showProject(paragraph,pImage,project1);
});

// project 3
const project3 = document.getElementById('project3');
project3.addEventListener('click',()=>{

    project3.classList.toggle('clickedp');
});

//project 4
const project4 = document.getElementById('project4');
project4.addEventListener('click',()=>{

    project4.classList.toggle('clickedp');
});



// reveal skills
function reveal(){
    let reveals = document.querySelectorAll(".reveal");
    for(let i=0;i<reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 200;
        if(elementTop <(windowHeight - elementVisible)){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll",reveal);