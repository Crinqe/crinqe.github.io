let slides;
let currentSlide;
let currentSlideNum;
let nextButton;
let previousButton;

let playButtons;

window.onload = function(){
    slides = document.querySelectorAll(".slide");

    nextButton = document.querySelector(".nextButton");
    nextButton.addEventListener("click", nextClick);
    nextButton.addEventListener("mouseenter", hoverButton);
    nextButton.addEventListener("mouseleave", leaveButton);

    previousButton = document.querySelector(".previousButton");
    previousButton.addEventListener("click", previousClick);
    previousButton.addEventListener("mouseenter", hoverButton);
    previousButton.addEventListener("mouseleave", leaveButton);

    playButtons = document.querySelectorAll(".playButton");
    for (let i = 0; i < playButtons.length; i++)
    {
        playButtons[i].addEventListener("mouseenter", hoverButton);
        playButtons[i].addEventListener("mouseleave", leaveButton);
    }
    
    currentSlide = slides[0];
    currentSlideNum = 0;
    displaySlide();
}

function displaySlide(){
    if (slides != null)
    {
        for (let i = 0; i < slides.length; i++)
        {
            if (currentSlide != slides[i])
            {
                let otherSlide = slides[i];
                otherSlide.style.display = 'none';
            }
            else
            {
                currentSlide.style.display = 'initial';
            }
        }
    }
}

function nextClick(){
    console.log("next clicked");
    currentSlideNum += 1;
    if (currentSlideNum < slides.length)
    {
        currentSlide = slides[currentSlideNum];
    }
    else
    {
        currentSlideNum = 0;
        currentSlide = slides[currentSlideNum];
    }
    displaySlide();
}

function previousClick(){
    console.log("prev clicked");
    currentSlideNum -= 1;
    if (currentSlideNum >= 0)
    {
        currentSlide = slides[currentSlideNum];
    }
    else
    {
        currentSlideNum = slides.length - 1;
        currentSlide = slides[currentSlideNum];
    }
    displaySlide();
}

function hoverButton(){
    this.style.backgroundColor = "#CAD2C5";
}

function leaveButton(){
    this.style.backgroundColor = "#84A98C";
}
