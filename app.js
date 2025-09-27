const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score-display");
const colors = ['purple' ,'orange' , 'blue' , 'green' , ];
let score = 0;

function createColorBox(color){
     const box = document.createElement('div');
     box.classList.add('color-box');
     box.style.backgroundColor = color;
     box.addEventListener('click' , checkColor);
     gameContainer.appendChild(box);
     return  box;

}

function checkColor(event){
    const clickedBox = event.target;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (clickedBox.style.backgroundColor === randomColor){
        score ++ ;
        scoreDisplay.textContent = `score: ${score}`;
        alert ("Yay! You match the color 🎉")
    }
    else{
       alert(`Oops! The color was ${randomColor}. Try again! 😊`);
    }

  
}
 for (let i = 0; i < colors.length; i++) {
    createColorBox(colors[i]);
}
