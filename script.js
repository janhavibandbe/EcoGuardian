const dynamicText =document.querySelector(".homepage .text h2 span")

const words = ["CATS"," STRAY DOGS","COWS","WORLD ANIMALS",];

let wordIndex = 0;
let charIndex = 0;
let isDelete = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
  
    if(!isDelete && charIndex < currentWord.length){
        // if condition is true,type the next character
        charIndex++;
        setTimeout(typeEffect,200);
    }else if(isDelete && charIndex > 0){
        // if condition is true,remove the previous character
        charIndex--;
        setTimeout(typeEffect,100);
    }else{
        // if word is deleted then switch to the next word 
        isDelete =!isDelete;
        // dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDelete ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect,1200);
    }
}

typeEffect();

let scrollContainer = document.querySelector(".sliders .gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1200;
});

backBtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1200;
});