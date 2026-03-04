function applyDiscount(total, originalId, discountId, finalId) {

    var age = document.getElementById("age").value;
    var isSenior = document.getElementById("seniorCheck").checked;

    var discount = 0;

    if (age >= 60 || isSenior) {
        discount = total * 0.12;
    }

    var finalTotal = total - discount;

    document.getElementById(originalId).innerHTML = total.toFixed(2);
    document.getElementById(discountId).innerHTML = discount.toFixed(2);
    document.getElementById(finalId).innerHTML = finalTotal.toFixed(2);
}

// MAIN COURSE
function computeMainCourse() {

    let chickenS = 106 * document.getElementById("chickenSQty").value;
    let sschicken = 106 * document.getElementById("sschickenQty").value;
    let porkchao = 134 * document.getElementById("porkchaoQty").value;

    let total = chickenS + sschicken + porkchao;

    let age = document.getElementById("age").value;
    let checked = document.getElementById("seniorCheck").checked;
    let discount = 0;

    if (age >= 60 || checked) {
        discount = total * 0.12;
    }

    let finalTotal = total - discount;

    document.getElementById("originalMain").innerText = total.toFixed(2);
    document.getElementById("discountMain").innerText = discount.toFixed(2);
    document.getElementById("finalMain").innerText = finalTotal.toFixed(2);
}



// DRINKS
function computeDrinks() {

    let milkT = 69 * document.getElementById("milkTQty").value;
    let icedT = 77 * document.getElementById("icedTQty").value;
    let coke = 69 * document.getElementById("cokeQty").value;

    let total = milkT + icedT + coke;

    let age = document.getElementById("age").value;
    let checked = document.getElementById("seniorCheck").checked;
    let discount = 0;

    if (age >= 60 || checked) {
        discount = total * 0.12;
    }

    let finalTotal = total - discount;

    document.getElementById("originalDrinks").innerText = total.toFixed(2);
    document.getElementById("discountDrinks").innerText = discount.toFixed(2);
    document.getElementById("finalDrinks").innerText = finalTotal.toFixed(2);
}



// DESSERT
function computeDesert() {

    let haloS = 76 * document.getElementById("haloSQty").value;
    let haloM = 100 * document.getElementById("haloMQty").value;
    let buchi = 37 * document.getElementById("buchiQty").value;
    let total = haloS + haloM + buchi;

    let age = document.getElementById("age").value;
    let checked = document.getElementById("seniorCheck").checked;

    let discount = 0;

    if (age >= 60 || checked) {
        discount = total * 0.12;
    }

    let finalTotal = total - discount;

    document.getElementById("originalDessert").innerText = total.toFixed(2);
    document.getElementById("discountDessert").innerText = discount.toFixed(2);
    document.getElementById("finalDessert").innerText = finalTotal.toFixed(2);
}