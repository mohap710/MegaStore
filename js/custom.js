var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 60; } else { angle = angle - 60; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

function autoSpin(Spinner) {
    sign = ''
    setInterval(() => {
        galleryspin(sign)
    }, 5000);
}

autoSpin()