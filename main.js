var allProducts = document.querySelectorAll(".parent .div1 span")

var content = document.querySelector("#content")

var btn = document.querySelector("#addToCart")
var div = document.querySelector("#productPrice")

var totalPrice = 0;

allProducts.forEach(function(item) {
    item.onclick = function() {

        totalPrice += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + "  ";
        if (content.innerHTML != "") {
            btn.style.display = "block"
        }


    }
})


btn.onclick = function() {
    div.innerHTML = totalPrice;
    if (totalPrice >= 70000) {
        div.style.color = "red"
        var x = alert("are you sure the price above 70000")

    } else {
        div.style.color = "blue"
    }
}