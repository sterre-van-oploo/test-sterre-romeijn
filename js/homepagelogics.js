//these items are our products and the stock
let stock = [10, 7, 3];
let normalstock = [];

//this is how many items we got in our cart
let cartstock = [0, 0, 0]; 
 
//pricing
let ProductPrice = [150, 13, 27];

//bool for shopping kart switch;
let hidden = true;

let popupcontainer = document.getElementById("popupContainer");

//when we load into our site we want to apply the right stock to the right items
//also we want to do it efficiently in a single loop
function onLoad() {

    popupcontainer.style.display = 'none';

    //loop to set all the predetermined stocks rigid and also setting the text in our web-shop correctly
    for (let i = 0; i < stock.length; i++) {
        document.getElementById(("product" + (i + 1))).textContent = "Stock : " + stock[i];
        normalstock[i] = stock[i];
        document.getElementById("checkoutammount" + i).textContent = cartstock[i];
        document.getElementById(("productprice" + i)).textContent = "Price : €" + ProductPrice[i] + ",-";
        document.getElementById(("checkoutprice" + i)).textContent = "€" + ProductPrice[i] + ",-";
        document.getElementById("totalprice").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
        document.getElementById("minbutton" + i).style.visibility = 'hidden';
    }
    document.getElementById("shoppingcart").style.display = "none";
    document.getElementById("cartstock").style.display = "none";
    document.getElementById("totalpricecheckout").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";

}

//Product logic (removing and adding to our cart------------------------------------------------------------------------
//removing product from carts
function removecartproduct(variable) {
    //setting values and checking if we meet the right conditions
    if (stock[product] < normalstock[product]) {
        // add one back to the stock
        stock[product] -= 1;
        removecart(product);

        document.getElementById("cart"+product).textContent = ""+cartstock[product];
        document.getElementById("product" + (product + 1)).textContent = "Stock : " + stock[product];
        document.getElementById("button" + product).style.visibility = 'visible';
        document.getElementById("totalpricecheckout").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
        document.getElementById("totalprice").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
        if (stock[product] === normalstock[product]) {
            document.getElementById("minbutton" + product).style.visibility = 'hidden';
        }
    }

}

//adding product from cart
function addcartproduct(product) {

    if (stock[product] !== 0) {
        addcart(product);
        stock[product] -= 1;
        document.getElementById("cart"+product).textContent = ""+cartstock[product];
        document.getElementById("product" + (product + 1)).textContent = "Stock : " + stock[product];
        document.getElementById("minbutton" + product).style.visibility = 'visible';
        document.getElementById("totalpricecheckout").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
        document.getElementById("totalprice").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
        if (stock[product] === 0) {
            document.getElementById("product" + (product + 1)).textContent = "Out of stock!";
            document.getElementById("button" + product).style.visibility = 'hidden';
        }
    }
}

//CartRemoval System----------------------------------------------------------------------------------------------------
function removecart(item) {
    cartstock[item] -= 1;
    let itemCount = cartstock[0] + cartstock[1] + cartstock[2];
    document.getElementById("cartstock").textContent = "" + itemCount;
    document.getElementById("summary").textContent = "Total Items: " + itemCount;
    document.getElementById("checkoutammount" + item).textContent = cartstock[item];
    document.getElementById("checkouttotal" + item).textContent = "€" + (cartstock[item] * ProductPrice[item]) + ",-";
    document.getElementsByClassName("totalprice").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
    //checking if the items in our cart are 0 because if true we set the icon badge to invisible
    (cartstock[0] + cartstock[1] + cartstock[2]) !== 0 ? document.getElementById("cartstock").style.display = "block" : document.getElementById("cartstock").style.display = "none";
}

function addcart(item) {
    cartstock[item] += 1;
    let itemCount = cartstock[0] + cartstock[1] + cartstock[2];
    document.getElementById("cartstock").style.display = "block";
    document.getElementById("cartstock").textContent = "" + itemCount;
    document.getElementById("summary").textContent = "Total Items: 0";
    document.getElementById("checkoutammount" + item).textContent = cartstock[item];
    document.getElementById("checkouttotal" + item).textContent = "€" + (cartstock[item] * ProductPrice[item]) + ",-";
    document.getElementsByClassName("totalprice").textContent = "Total : €" + ((cartstock[0] * ProductPrice[0]) + (cartstock[1] * ProductPrice[1]) + (cartstock[2] * ProductPrice[2])) + ",-";
}

//show shopping cart system---------------------------------------------------------------------------------------------
function showhidecart() {
    if (hidden) {
        loadproducts();
        document.getElementById("bottomcontainer").style.display = "none";
        document.getElementById("shoppingcart").style.display = "block";
        hidden = false;
    } else {
        document.getElementById("bottomcontainer").style.display = "block";
        document.getElementById("shoppingcart").style.display = "none";
        hidden = true;
    }
}

function loadproducts() {
    for (let i = 0; i < 3; i++) {
        if (cartstock[i] !== 0) {
            document.getElementById("item" + i).style.display = "flex";
        } else {
            document.getElementById("item" + i).style.display = "none";
        }
    }
}

function checkOut() {
    for (let i = 0; i < stock.length; i++) { 
        cartstock[i] = 0;
        loadproducts();
        onLoad();
        hidden = true;
        showhidecart();
    }
}

//POPUP-----------------------------------------------------------------------------------------------------------------
let Blur = document.getElementById("blur");
let containers = document.getElementsByClassName("PopupWindow");
let Maincontainer = document.getElementById("HomePageContainer");
let normal = document.getElementById("normalcontainer");

function popUp(button) {
    Blur.style.display = 'block';
    popupcontainer.style.display = 'flex';
    Blur.appendChild(Maincontainer);

    containers[button].style.display = 'flex';
}

function disablepopUp(){
    Blur.style.display = 'none';
    popupcontainer.style.display = 'none';
    normal.appendChild(Maincontainer);
    for(let i = 0; i < containers.length; i++){
        containers[i].style.display = 'none';
    }
}

//Login system-------------------------------------------------------
let inputfield = document.getElementById("login");
let button = document.getElementById("login");

function logIn(){
    name = button.value;
    button.innerText = "Welcome: " + name;
    inputfield.clear
}


