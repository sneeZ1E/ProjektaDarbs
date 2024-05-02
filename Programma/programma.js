function calculate() {
    var consumption = parseFloat(document.getElementById('consumption').value) / 100; // Divide consumption by 100
    var price = parseFloat(document.getElementById('price').value);
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelCost = consumption * distance * price;
    document.getElementById('fuelCost').textContent = fuelCost.toFixed(2) + " EUR"; // Display fuel cost with 2 decimal places and add EUR
}
