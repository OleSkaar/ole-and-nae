window.onload = ( _e => {
  document.getElementById("email-copyer").addEventListener('click', () => {
    navigator.clipboard
    .writeText(document?.getElementById("email")?.innerText)
})})