function newpurchase() {
    var money = document.getElementById("moneyInput");
    alert(money.value);
    var date = document.getElementById("dateInput");
    alert(date.value);
    var moneyLI = document.createElement("li");
    moneyLI.innerHTML = money.value;
    alert(moneyLI);
    money.value = "";
    document.getElementById("past").appendChild(moneyLI);
}

function removepurchase() {

}