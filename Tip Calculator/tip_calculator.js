function calculateTip() {
    var menu = document.getElementById("state-names");
    var subTotal = parseInt(document.getElementById("subtotalInput").value);
    var tipPercentage = parseInt(document.getElementById("tipPercentageInput").value);
    var taxPercentage;

    if (menu.value == 'Alabama') {
        taxPercentage = 4.00;
    } else if (menu.value == 'Alaska') {
        taxPercentage = 0.00;
    } else if (menu.value == 'Arizona') {
        taxPercentage = 5.60;
    } else if (menu.value == 'Arkansas') {
        taxPercentage = 6.50;
    } else if (menu.value == 'California') {
        taxPercentage = 7.25;
    } else if (menu.value == 'Colorado') {
        taxPercentage = 2.90;
    } else if (menu.value == 'Connecticut') {
        taxPercentage = 6.35;
    } else if (menu.value == 'Delaware') {
        taxPercentage = 0.00;
    } else if (menu.value == 'Florida') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Georgia') {
        taxPercentage = 4.00;
    } else if (menu.value == 'Hawaii') {
        taxPercentage = 4.00;
    } else if (menu.value == 'Idaho') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Illinois') {
        taxPercentage = 6.25;
    } else if (menu.value == 'Indiana') {
        taxPercentage = 7.00;
    } else if (menu.value == 'Iowa') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Kansas') {
        taxPercentage = 6.50;
    } else if (menu.value == 'Kentucky') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Louisiana') {
        taxPercentage = 4.45;
    } else if (menu.value == 'Maine') {
        taxPercentage = 5.50;
    } else if (menu.value == 'Maryland') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Massachusetts') {
        taxPercentage = 6.25;
    } else if (menu.value == 'Michigan') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Minnesota') {
        taxPercentage = 6.875;
    } else if (menu.value == 'Mississippi') {
        taxPercentage = 7.00;
    } else if (menu.value == 'Missouri') {
        taxPercentage = 4.225;
    } else if (menu.value == 'Montana') {
        taxPercentage = 0.00;
    } else if (menu.value == 'Nebraska') {
        taxPercentage = 5.50;
    } else if (menu.value == 'Nevada') {
        taxPercentage = 6.85;
    } else if (menu.value == 'New Hampshire') {
        taxPercentage = 0.00;
    } else if (menu.value == 'New Jersey') {
        taxPercentage = 6.825;
    } else if (menu.value == 'New Mexico') {
        taxPercentage = 5.125;
    } else if (menu.value == 'New York') {
        taxPercentage = 4.00;
    } else if (menu.value == 'North Carolina') {
        taxPercentage = 4.75;
    } else if (menu.value == 'North Dakota') {
        taxPercentage = 5.00;
    } else if (menu.value == 'Ohio') {
        taxPercentage = 5.75;
    } else if (menu.value == 'Oklahoma') {
        taxPercentage = 4.50;
    } else if (menu.value == 'Oregon') {
        taxPercentage = 0.00;
    } else if (menu.value == 'Pennsylvania') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Rhode Island') {
        taxPercentage = 7.00;
    } else if (menu.value == 'South Carolina') {
        taxPercentage = 6.00;
    } else if (menu.value == 'South Dakota') {
        taxPercentage = 4.50;
    } else if (menu.value == 'Tennessee') {
        taxPercentage = 7.00;
    } else if (menu.value == 'Texas') {
        taxPercentage = 6.25;
    } else if (menu.value == 'Utah') {
        taxPercentage = 6.10;
    } else if (menu.value == 'Vermont') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Virginia') {
        taxPercentage = 5.30;
    } else if (menu.value == 'Washington') {
        taxPercentage = 6.50;
    } else if (menu.value == 'West Virginia') {
        taxPercentage = 6.00;
    } else if (menu.value == 'Wisconsin') {
        taxPercentage = 5.00;
    } else if (menu.value == 'Wyoming') {
        taxPercentage = 4.00;
    }

    var taxAmount = Math.ceil((subTotal * (taxPercentage / 100.00)) * 100) / 100;
    var tipAmount = Math.ceil((subTotal * (tipPercentage / 100.00)) * 100) / 100;
    var totalAmount = subTotal + taxAmount + tipAmount;

    tip.innerHTML = "Tip: $" + tipAmount;
    salesTax.innerHTML = "Sales Tax: $" + taxAmount;
    total.innerHTML = "Total: $" + totalAmount;
}
