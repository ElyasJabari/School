// Berechnungsfunktion für den Fahrpreis basierend auf der Nutzungsstrecke
function calculatePriceByDistance(distance) {
    // Beispielhafte Preisberechnung: 0,20 Euro pro Kilometer
    const unlock = 1.20;
    const pricePerKilometer = 0.20;
    const totalPrice = unlock + (distance * pricePerKilometer);
    return totalPrice.toFixed(2); // Auf zwei Dezimalstellen runden
}

// Event-Listener für die Schaltfläche "Preis berechnen."
document.getElementById('calculate-btn').addEventListener('click', function() {
    const distanceInput = document.getElementById('usage-distance');
    const distance = parseFloat(distanceInput.value);

    let totalPrice = '';

    if (!isNaN(distance)) {
        totalPrice += calculatePriceByDistance(distance) + ' Euro (nach Nutzungsstrecke)';
    } else {
        totalPrice = 'Ungültige Eingabe';
    }
    document.getElementById('result').innerHTML = totalPrice;
    distanceInput.value = "";
});
