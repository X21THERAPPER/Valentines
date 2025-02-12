document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("card");
    const playMusicButton = document.getElementById("playMusic");
    let audio = new Audio("Jess_Glynne_-_I_ll_Be_There_[Official_Video](256k).mp3");  // Make sure this file is in the same folder

    // Flip card on click
    card.addEventListener("click", function (event) {
        // Prevent flipping when clicking the play button
        if (event.target !== playMusicButton) {
            card.classList.toggle("open");
            createFloatingHearts();
        }
    });

    // Play/Pause song when clicking the button
    playMusicButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents card flipping
        event.preventDefault();  // Prevents default button behavior

        if (audio.paused) {
            audio.play();
            playMusicButton.textContent = "⏸ Pause Song";  // Change button text to pause
        } else {
            audio.pause();
            playMusicButton.textContent = "🎶 Play Song";  // Change back to play
        }
    });

    // Floating hearts animation
    function createFloatingHearts() {
        for (let i = 0; i < 5; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.bottom = "0px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }
});