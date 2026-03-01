let clickCount = 0;
let isPlaying = false;

const buzzer = document.getElementById('buzzer');
const counter = document.getElementById('counter');
const originalText = buzzer.textContent;

buzzer.addEventListener('click', () => {
  if (isPlaying) return;
  
  clickCount++;
  
  if (clickCount === 15) {
    isPlaying = true;
    buzzer.textContent = 'ULTIMATE FAAH';
    const audio = new Audio('ultimate-faah.mp3');
    audio.play();
    audio.onended = () => {
      isPlaying = false;
      buzzer.textContent = originalText;
      clickCount = 0;
      counter.textContent = clickCount;
    };
  } else {
    const audio = new Audio('faah.mp3');
    audio.play();
  }
  
  if (!isPlaying) {
    counter.textContent = clickCount;
  }
});
