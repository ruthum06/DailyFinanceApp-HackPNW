function newPurchase() {
    var date = document.getElementById("dateInput");
    var money = document.getElementById("moneyInput");
    var title = document.getElementById("titleInput");

    var dateLI = document.createElement("li");
    var moneyLI = document.createElement("li");
    var titleLI = document.createElement("li");

    dateLI.innerHTML = date.value;
    moneyLI.innerHTML = "$" + money.value;
    titleLI.innerHTML = title.value;

    date.value = "";
    title.value = "";
    money.value = "";

    document.getElementById("dateList").appendChild(dateLI);
    document.getElementById("titleList").appendChild(titleLI);
    document.getElementById("moneyList").appendChild(moneyLI);
}

function removePurchase() {
   var memo = getElementById("memo");
   memo.moneyList.removeChild(memo);
}