window.addEventListener("DOMContentLoaded", () => {
  const glitchText = document.querySelector('.glitch');
  glitchText.classList.add('flicker');

  setTimeout(() => {
    glitchText.classList.remove('flicker');
  }, 1500);
});
