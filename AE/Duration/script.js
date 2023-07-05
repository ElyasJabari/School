// Berechnungsfunktion für den Fahrpreis basierend auf der Nutzungsdauer
function calculatePriceByDuration(duration) {
    // Beispielhafte Preisberechnung: 0,10 Euro pro Minute
    const unlock = 1.20;
    const pricePerMinute = 0.10;
    const totalPrice = unlock + (duration * pricePerMinute);
    return totalPrice.toFixed(2); // Auf zwei Dezimalstellen runden
}

// Event-Listener für die Schaltfläche "Preis berechnen."
document.getElementById('calculate-btn').addEventListener('click', function() {
    const durationInput = document.getElementById('usage-duration');
    const duration = parseFloat(durationInput.value);
    let totalPrice = '';

    if (!isNaN(duration)) {
        totalPrice = calculatePriceByDuration(duration) + ' Euro (nach Nutzungsdauer)';
    } else {
        totalPrice = 'Ungültige Eingabe';
    }
    document.getElementById('result').innerHTML = totalPrice;
    durationInput.value = "";
});
