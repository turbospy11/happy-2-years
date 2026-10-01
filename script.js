const letters = {
    "miss-you": {
        title: "happy 2 year anniversary! ",
        message:
            "Hi, luke, happy 2 year anniversary. You are my favourite person in the world and my best friend. I cant imagine my life without you now, I want to share everythig with you and I cant wait to see us in the future. I think you're my person and I want to be yours. I love you so much, Robot Harriet <3"
    },
    sad: {
        finalImage: "images/sad.jfif"
    },
    stressed: {
        finalImage: "images/girl.jfif"
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    if (letter.title && letter.message) {
        document.getElementById("letter-title").innerHTML = letter.title;
        document.getElementById("letter-message").textContent = letter.message;
    } else {
        document.querySelector(".letter-text").remove();
    }
} 

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = letter?.finalImage || "images/letter-final.png";
    if (letterText) {
        letterText.classList.remove("hidden");
    }
}, 1200);