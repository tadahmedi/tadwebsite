var butoni = document.getElementById('btn1')
var butoni2 = document.getElementById('btn2')
var butoni3 = document.getElementById('btn3')
var butoni4 = document.getElementById('btn4')
var teksti = document.getElementById('teksti')

butoni.onclick = function(){
    alert('you have bought the game')
}

butoni2.onmouseover= function(){
    alert('you are on me')
}

butoni3.onmouseleave = function(){
    alert('you left me')
}


butoni4.onclick = function(){
    teksti.style.color = 'blue'
}