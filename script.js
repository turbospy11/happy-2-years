const letters = {
    "miss-you": {
        title: "happy 2 year anniversary! ",
        message:
            "Hi, luke! I love you so much that i tried my best to learn how to code like you. I love spending time with you so much you are my best friend, and I feel like I can be any version of myself around you. You make me so happy and I think you are incredible. Love from Harriet <3"
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