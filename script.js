var btn = document.querySelector('#btn');

var box = document.querySelector('#box');

var color = document.querySelector('#color-code')

btn.addEventListener('click',function(){
    var C1 = Math.floor(Math.random()*256);
    var C2 = Math.floor(Math.random()*256);
    var C3 = Math.floor(Math.random()*256);

    console.log(`${C1}, ${C2}, ${C3}`);
    
    box.style.backgroundColor = `rgb(${C1}, ${C2}, ${C3})`;

    color.innerHTML = `rgb(${C1}, ${C2}, ${C3})`
})