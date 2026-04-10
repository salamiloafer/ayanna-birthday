window.onload = () => {

  const landing = document.getElementById("landing");
  const gallery = document.getElementById("gallery");
  const boxes = document.querySelectorAll(".box");

  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");
  const letterContent = document.getElementById("letterContent");

  const clickSound = new Audio("click.m4a");
  const openSound = new Audio("click.m4a");

  const letters = {
    letter1: "happy birthday ayanna~ 🎂 i hope you'll have the best day ever, because you deserve that and so much more !",
    letter2: "you are so talented, so caring, the sweetest person ever and a true friend. i am so lucky to have you in my life.",
    letter3: "i hope you find all the joy and happiness you deserve.",
    letter4: "thank you for being my friend. 🌸 i love you!"
  };

  // SAFETY CHECK (this prevents your exact error)
  if (!modal || !closeBtn || !letterContent) {
    console.error("Modal elements missing in HTML");
    return;
  }

  // go to gallery
  landing.onclick = () => {
    clickSound.play();
    landing.classList.remove("active");
    gallery.classList.add("active");
  };

  // box click
  boxes.forEach(box => {
    box.onclick = (e) => {
      e.stopPropagation();

      openSound.currentTime = 0;
      openSound.play();

      const key = box.dataset.letter;

      letterContent.innerText = letters[key] || "no message 💔";

      modal.style.display = "flex";
    };
  });

  // close modal
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // background click sound
  document.body.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
 const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.onclick = (e) => {
  e.stopPropagation(); // prevents click sound spam

  if (!isPlaying) {
    bgMusic.play();
    musicBtn.innerText = "PAUSE";
    isPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.innerText = "PLAY ME!";
    isPlaying = false;
  }
};

};

const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  // random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // random size (SCALE instead of breaking shape)
  const scale = Math.random() * 0.8 + 0.6;
  heart.style.transform = `scale(${scale}) rotate(45deg)`;

  // random speed
  heart.style.animationDuration = (Math.random() * 2 + 4) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);