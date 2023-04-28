// Използваме window.onload, за да изчакаме документа да се зареди напълно преди да започнем с изпълнението на скрипта
window.onload = function() {

    // Създаваме нов елемент за изображението
    var logoImage = new Image();
    logoImage.src = "game-logo.png";
    logoImage.style.maxWidth = "800px"; // Задаваме максимална ширина на изображението
  
    // Създаваме нов елемент за бутона за стартиране на играта
    var startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startGame); // Добавяме събитие на бутона при кликване, което ще стартира играта
  
    // Създаваме нов елемент за Highscore менюто
    var highscoreMenu = document.createElement("div");
    highscoreMenu.style.fontSize = "18px";
    highscoreMenu.style.textAlign = "center";
    var highscoreHeader = document.createElement("h2");
    highscoreHeader.textContent = "Highscore: ";
    var highscoreValue = document.createElement("span");
    highscoreValue.id = "highscore";
    highscoreValue.textContent = "0";
    highscoreHeader.appendChild(highscoreValue);
    highscoreMenu.appendChild(highscoreHeader);
  
    // Добавяме елементите към HTML документа
    document.body.appendChild(logoImage);
    document.body.appendChild(startButton);
    document.body.appendChild(highscoreMenu);
  
    // Функция, която ще се изпълни при кликване на бутона за стартиране на играта
    function startGame() {
      // Премахваме елементите от страницата и започваме играта
      document.body.removeChild(logoImage);
      document.body.removeChild(startButton);
      document.body.removeChild(highscoreMenu);
      gameStarted = true;
      // Добавете кода на вашата игра тук...
    }
  
  };