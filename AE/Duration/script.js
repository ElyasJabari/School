class Fahrpreisrechner {
    constructor(unlock, pricePerMinute) {
        this.unlock = unlock;
        this.pricePerMinute = pricePerMinute;
    }

    calculatePriceByDuration(duration) {
        const totalPrice = this.unlock + duration * this.pricePerMinute;
        return totalPrice.toFixed(2);
    }
}

// Erstelle eine Instanz der Klasse "Fahrpreisrechner"
const fahrpreisrechner = new Fahrpreisrechner(1.20, 0.10);

function calculateTotalPrice() {
    const durationInput = document.getElementById('usage-duration');
    const duration = parseFloat(durationInput.value);
    let totalPrice = '';

    if (!isNaN(duration)) {
        totalPrice = fahrpreisrechner.calculatePriceByDuration(duration) + ' Euro (nach Nutzungsdauer)';
    } else {
        totalPrice = 'Ungültige Eingabe';
    }

    document.getElementById('result').innerHTML = totalPrice;
    durationInput.value = '';
}

document.getElementById('calculate-btn').addEventListener('click', calculateTotalPrice);

