let hallo = document.getElementById("tekst");
function randomDyr() {
    let dyr = Math.floor(Math.random() * 3);
    if (dyr === 0) {
        hallo.innerHTML = 'hund';
    }
    else if (dyr === 1) {
        hallo.innerHTML = 'katt';
    }
    else hallo.innerHTML = 'esel';
}
function showCat() {
    document.getElementById("kattebilde").innerHTML = /*HTML*/`
    <img src="cat" alt="">`;
}
function kajgfn() {
    let hei = document.getElementById("abd").value;
    hallo.innerHTML = hei;
}