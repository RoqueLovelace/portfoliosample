let dialogue = document.getElementById("text").firstElementChild;
dialogue.innerHTML = "";

let devBelowName = document.getElementById("name").lastElementChild.firstElementChild;
devBelowName.innerHTML = "";

let getToKnowMe = document.getElementById("button").firstElementChild;
let introduction = ["Hello! My name is Anthony", "and I'm a developer"];
let introductionIndex = 0;
let charIndex = 0;
let writingDeveloper = false;
const typingSpeed = 100; // velocidad en ms

function writeIntroduction() {
    if (charIndex < introduction[introductionIndex].length) 
    {
        if (introduction[introductionIndex].charAt(charIndex) == 'd' && charIndex != 2) 
        {
            //dialogue.innerHTML += "<span id=\"dev\">";    
            writingDeveloper = true;
        }
        
        if (writingDeveloper)
        {
            devBelowName.innerHTML += introduction[introductionIndex].charAt(charIndex);
        }
        dialogue.innerHTML += introduction[introductionIndex].charAt(charIndex);
        charIndex++;
        setTimeout(writeIntroduction, typingSpeed);
    } 
    else 
    {
        charIndex = 0;
        introductionIndex++;
        if (introductionIndex < introduction.length) 
        {
            setTimeout(function() {
                dialogue.innerHTML += "<br>"; // Añadir salto de línea entre frases
                writeIntroduction(); }, typingSpeed);
        } 
    }
}

writeIntroduction();
