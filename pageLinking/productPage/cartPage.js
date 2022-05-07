const bookmarkData = JSON.parse(localStorage.getItem('bookmark'));
const tbody = document.querySelector("tbody");
const updateTP = document.querySelector("#updateTP");
const updateButton = document.querySelector("#rightCart>button");

var tp = 0;
displayCartData();
function displayCartData(){
    tbody.innerHTML = null;
    bookmarkData.forEach(element => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('id','cartIMG');
        img.src = element.productIMG;
        let td2 = document.createElement('td');
        td2.innerText = element.productName;
        let td3 = document.createElement('td');
        let qty = document.createElement('input');
        qty.type = 'text';
        td3.setAttribute('id','inputQTY');
        qty.value = element.productQTY;
        let td4 = document.createElement('td');
        let totalPrice = Number(element.productPrice) * Number(element.productQTY);
        td4.innerText = 'RS. '+ totalPrice+'.00';
        tp += totalPrice;
        updateTP.textContent = 'RS. '+ tp +'.00'
    
    
        td1.append(img);
        td3.append(qty);
        tr.append(td1,td2,td3,td4);
        tbody.append(tr);
    });
}

updateButton.addEventListener('click', function(){
    // let updateQTY = document.querySelector("#inputQTY");
    // console.log(updateQTY);
    // bookmarkData.forEach(element => {
    //     // element.productQTY = 2;
    //     // console.log(element.productQTY);
    // });
    tp = 0;
    displayCartData();
    updateTP.textContent = 'RS. '+ tp +'.00';
});

function addToCart(){
    //add to cart
    var bookmarkData = JSON.parse(localStorage.getItem('bookmark')) || [];
    addToCart.addEventListener('click',function(){
        bookmarkObj = {
            productIMG : document.getElementById('productIMG').src,
            productPrice : document.querySelector('#productPrice>span').innerText,
            productQTY : document.getElementById('productQTY').innerText,
            productName : document.getElementById('productName').innerText
        }
        bookmarkData.push(bookmarkObj);
        localStorage.setItem('bookmark',JSON.stringify(bookmarkData));
        console.log(bookmarkData);
    });
}

