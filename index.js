let = count = 1;
window.document.getElementById('radio1').checked = true

setInterval(() => {
    nextSlide();
}, 5000);

const nextSlide = () => {
    count++;

    if(count > 4) {
        count = 1;
    };

    window.document.getElementById('radio'+count).checked = true

};

console.log('conectado')