const colors = ['PeachPuff']; 
let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; 
}


document.body.addEventListener('click', changeBackgroundColor);