function musicBtn() {
    const audio = document.getElementById("song");
    audio.play();
    
    const popup = document.getElementById("popup");
    popup.style.display = 'none';
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = 'none';
      }
