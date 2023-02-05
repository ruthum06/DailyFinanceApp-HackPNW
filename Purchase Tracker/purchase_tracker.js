function newPurchase() {
    /*
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
    */

    var date = document.getElementById("dateInput");
    var money = document.getElementById("moneyInput");
    var title = document.getElementById("titleInput");

    var purchaseLI = document.createElement("li");
    
    purchaseLI.innerHTML = date.value + " , \"" + title.value + "\", $" + money.value;
    date.value = "";
    title.value = "";
    money.value = "";
    document.getElementById("purchaseList").appendChild(purchaseLI);
}

function removePurchase() {
   var memo = getElementById("memo");
   memo.moneyList.removeChild(memo);
}

function createCloseButton() {
    // Create a "close" button and append it to each list item
    var crossList = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < crossList.length; i++) {
        var spanVar = document.createElement("span");
        var txt = document.createTextNode("f");
        spanVar.className = "close";
        spanVar.innerText = txt;
        crossList[i].appendChild(span);
    }
}


function hideListItem() {
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


