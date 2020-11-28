// récupère toutes les divs avec class key
const keys = document.querySelectorAll('.key');

// fonction qui récupère élément keydown pour lancer l'audio
function playSound(e) {
    // on récupère l'audio et la div correspondante avec le keycode de l'évènement (touche pressée)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // arrête le script
    audio.currentTime = 0; // réinitialise le timer du son si on ré-appuie sur la même touche
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // on interrompt si ce n'est pas une transformation
    this.classList.remove('playing'); // enlève class playing à l'élément
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
