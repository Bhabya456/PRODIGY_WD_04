// Typing Animation

const typingText = document.querySelector(".typing");

const words = [

    "Web Developer",
    "Frontend Developer",
    "CSE Student",
    "JavaScript Learner"

];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingText.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }
    else{

        setTimeout(eraseEffect, 1500);

    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }
    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }
}

window.onload = typeEffect;

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const revealTop =
            reveals[i].getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }
    }
}