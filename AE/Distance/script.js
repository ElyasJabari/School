// Definiere eine Klasse namens "Fahrpreisrechner"
class Fahrpreisrechner {
    constructor(unlock, pricePerUnit) {
        this.unlock = unlock;
        this.pricePerUnit = pricePerUnit;
    }

    calculatePriceByDistance(distance) {
        const totalPrice = this.unlock + distance * this.pricePerUnit;
        return totalPrice.toFixed(2);
    }
}

// Erstelle eine Instanz der Klasse "Fahrpreisrechner"
const fahrpreisrechner = new Fahrpreisrechner(1.20, 0.20);

function calculateTotalPrice() {
    const distanceInput = document.getElementById('usage-distance');
    const distance = parseFloat(distanceInput.value);
    let totalPrice = '';

    if (!isNaN(distance)) {
        totalPrice = fahrpreisrechner.calculatePriceByDistance(distance) + ' Euro (nach Nutzungsstrecke)';
    } else {
        totalPrice = 'Ungültige Eingabe';
    }

    document.getElementById('result').innerHTML = totalPrice;
    distanceInput.value = '';
}

// Event-Listener für die Schaltfläche "Preis berechnen."
document.getElementById('calculate-btn').addEventListener('click', calculateTotalPrice);

