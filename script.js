function calculate() {
    var primaryVoltage = parseFloat(document.getElementById('primary-voltage').value);
    var secondaryVoltage = parseFloat(document.getElementById('secondary-voltage').value);
    var coreLength = parseFloat(document.getElementById('core-length').value);
    var coreWidth = parseFloat(document.getElementById('core-width').value);

    if (isNaN(primaryVoltage) || isNaN(secondaryVoltage) || isNaN(coreLength) || isNaN(coreWidth)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    var coreArea = coreLength * coreWidth;
    var turnsPerVolt = 42 / coreArea;
    var power = coreArea * coreArea;
    var primaryTurns = primaryVoltage * turnsPerVolt;
    var secondaryTurns = secondaryVoltage * turnsPerVolt;
    var primaryCurrent = power / primaryVoltage;
    var secondaryCurrent = power / secondaryVoltage;
    var primaryWireSize = calculateWireSize(primaryCurrent);
    var secondaryWireSize = calculateWireSize(secondaryCurrent);

    document.getElementById('result').innerHTML = `
        <p>Turns Per Volt: ${turnsPerVolt.toFixed(2)}</p>
        <p>Power: ${power.toFixed(2)} W</p>
        <p>Primary Turns: ${primaryTurns.toFixed(2)}</p>
        <p>Secondary Turns: ${secondaryTurns.toFixed(2)}</p>
        <p>Primary Current: ${primaryCurrent.toFixed(2)} A</p>
        <p>Secondary Current: ${secondaryCurrent.toFixed(2)} A</p>
        <p>Primary Wire Size: ${primaryWireSize}</p>
        <p>Secondary Wire Size: ${secondaryWireSize}</p>
        <p>Core Area: ${coreArea.toFixed(2)} cm²</p>
    `;
}

function calculateWireSize(current) {
    if (current <= 0) {
        return "24 AWG";
    } else if (current <= 1) {
        return "23 AWG";
    } else if (current <= 3) {
        return "18 AWG";
    } else if (current <= 6) {
        return "16 AWG";
    } else if (current <= 10) {
        return "14 AWG";
    } else if (current <= 15) {
        return "12 AWG";
    } else if (current <= 20) {
        return "10 AWG";
    } else {
        return "8 AWG or larger";
    }
}
