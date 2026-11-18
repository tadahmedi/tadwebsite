

const btnRreth = document.getElementById("btn-rreth");
const btnKatror = document.getElementById("btn-katror");
const btnTrekandsh = document.getElementById("btn-trekandsh");


const rreth = document.getElementById("rreth");
const katror = document.getElementById("katror");
const trekandsh = document.getElementById("trekandsh");

btnRreth.addEventListener("click", function() {
    rreth.style.display = "block";
    katror.style.display = "none";
    trekandsh.style.display = "none";
});

btnKatror.addEventListener("click", function() {
    rreth.style.display = "none";
    katror.style.display = "block";
    trekandsh.style.display = "none";
});

btnTrekandsh.addEventListener("click", function() {
    rreth.style.display = "none";
    katror.style.display = "none";
    trekandsh.style.display = "block";
});