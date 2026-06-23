// رفتن به محصولات

const button = document.querySelector(".hero button");

button.addEventListener("click", function(){

    document.querySelector("#products").scrollIntoView({
        behavior: "smooth"
    });

});


// سبد خرید

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

const buyButtons = document.querySelectorAll(".card button");

const cartCount = document.querySelector("#cart-count");

const cartBox = document.querySelector("#cart-box");

const cartItems = document.querySelector("#cart-items");



// اضافه کردن محصول

buyButtons.forEach(function(button){

button.addEventListener("click", function(){


let product = {

name: button.parentElement.querySelector("h3").innerHTML,

price: Number(
button.parentElement.querySelector("span").innerHTML.replace(/[^0-9]/g,'')
),

quantity: 1

};


cart.push(product);


sessionStorage.setItem("cart", JSON.stringify(cart));


showCart();


});

});




// باز کردن سبد

document.querySelector(".cart").addEventListener("click",function(){

cartBox.style.display="block";

});



// بستن سبد

document.querySelector("#close-cart").addEventListener("click",function(){

cartBox.style.display="none";

});





// نمایش سبد

function showCart(){


cartItems.innerHTML="";


cart.forEach(function(item,index){


cartItems.innerHTML +=

`

<li>

${item.name}

<br>

${item.price.toLocaleString()} تومان

<br>

تعداد: ${item.quantity}

<br>


<button onclick="changeQty(${index},-1)">-</button>


${item.quantity}


<button onclick="changeQty(${index},1)">+</button>


<button onclick="removeItem(${index})">حذف</button>


</li>

`;

});



cartCount.innerHTML = cart.length;



let total = 0;


cart.forEach(function(item){

total += item.price * item.quantity;

});


document.querySelector("#total-price").innerHTML =

"مجموع: " + total.toLocaleString() + " تومان";


}





// تغییر تعداد

function changeQty(index,value){


cart[index].quantity += value;


if(cart[index].quantity <= 0){

cart.splice(index,1);

}


sessionStorage.setItem("cart",JSON.stringify(cart));


showCart();


}





// حذف محصول

function removeItem(index){


cart.splice(index,1);


sessionStorage.setItem("cart",JSON.stringify(cart));


showCart();


}




// پاک کردن کامل سبد

document.querySelector("#clear-cart").addEventListener("click",function(){


cart=[];


sessionStorage.removeItem("cart");


showCart();


});




// لود اولیه

showCart();





// سفارش

document.querySelector("#checkout").addEventListener("click",function(){


document.querySelector("#order-box").style.display="block";


});



document.querySelector("#send-order").addEventListener("click",function(){


let name=document.querySelector("#name").value;

let phone=document.querySelector("#phone").value;



if(name && phone){

alert("سفارش به نام "+name+" ثبت شد ✅");

}else{

alert("لطفاً اطلاعات را کامل کنید");

}


});

document.getElementById("back-cart").onclick = function(){

document.getElementById("order-box").style.display="none";

};

function openSearch(){

document.querySelector("#search-box").style.display="flex";

}

function searchProduct(){

let value=document.querySelector("#search-input").value.toLowerCase();


if(value.includes("black")){

window.location="product1.html";

}

else if(value.includes("classic")){

window.location="product2.html";

}

else if(value.includes("premium")){

window.location="product3.html";

}

else{

alert("محصولی پیدا نشد ❌");

}

}
