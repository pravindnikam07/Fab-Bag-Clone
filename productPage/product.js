//DOM variables
const zoomImg = document.querySelector('.image');
const addToCart = document.querySelector('#addToCart');
const enlarge = document.querySelector('#enlarge');
const month = document.querySelectorAll('#months>button');
const count = document.querySelectorAll('.count');
const description = document.querySelectorAll('#descriptionButton>button');

// to zoom image on curser position
zoomImg.style.backgroundImage = 'url(https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Makeup-Reveal-1.gif?v=1651562695)';
zoomImg.addEventListener('mousemove',function(e){
    zoomFun(e);
});
function zoomFun(e){
    zoomImg.style.backgroundSize = '1000px';
    zoomImg.style.backgroundPositionX = -e.offsetX + 'px';
    zoomImg.style.backgroundPositionY = -e.offsetY + 'px';
};
zoomImg.addEventListener('mouseout',function(e){
    zoomImg.style.backgroundSize = 'contain';
    zoomImg.style.backgroundRepeat = 'no-repeat';
    zoomImg.style.width = '90%';
    zoomImg.style.height = '290px';
    zoomImg.style.backgroundPosition = 'center';
});

//popup window for img
enlarge.addEventListener('click',function(){
    alert('This view is not available');
})

//hover on add to cart
addToCart.addEventListener('mouseover',function(){
    addToCart.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
})
addToCart.addEventListener('mouseout',function(){
    addToCart.textContent = 'ADD TO CART';
})

//monthly subscription plans
month.forEach((element) => {
    element.addEventListener('click',function(){
        let monthPrice = document.querySelector("#productPrice>span");
        if(element.textContent == '1 MONTH'){
            monthPrice.textContent = '599.00';
            element.style.backgroundColor = 'rgb(214, 214, 214)';
            document.querySelector('#threeM').style.backgroundColor = 'rgb(236, 235, 235)';
        }
        else{
            monthPrice.textContent = '1,599.00';
            element.style.backgroundColor = 'rgb(214, 214, 214)';
            document.querySelector('#oneM').style.backgroundColor = 'rgb(236, 235, 235)';
        }
    })
});

//increase and decrease the price
var c = JSON.parse(localStorage.getItem('qtyCount')) || 1;
document.getElementById('productQTY').innerText = c;
count.forEach((element) => {
    element.addEventListener('click',function(){
        if(element.textContent== '-') c--;
        if(element.textContent== '+') c++;
        if(c<1 && element.textContent== '-') c = 1;
        else{
            document.getElementById('productQTY').innerText = c;
        }
        localStorage.setItem('qtyCount',JSON.stringify(c));
    })
})

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


//info part description
const descrip = document.getElementById('descrip');
const viewPlans = document.getElementById('viewPlans');
const refundPolicy = document.getElementById('refundPolicy');
const custmerReview = document.getElementById('custmerReview');
description.forEach(element => {
    element.addEventListener('click',function(){
        let selected = element.innerText;
        console.log(element)
        if(selected=='DESCRIPTION'){
            descrip.style.visibility = 'visible';
            viewPlans.style.visibility = 'collapse';
            refundPolicy.style.visibility = 'collapse';
            custmerReview.style.visibility = 'collapse';
            descrip.style.height = 'auto';
            viewPlans.style.height = '0px';
            refundPolicy.style.height = '0px';
            custmerReview.style.height = '0px';
        }
        else if(selected=='VIEW PLANS'){
            descrip.style.visibility = 'collapse';
            viewPlans.style.visibility = 'visible';
            refundPolicy.style.visibility = 'collapse';
            custmerReview.style.visibility = 'collapse';
            descrip.style.height = '0px';
            viewPlans.style.height = 'auto';
            refundPolicy.style.height = '0px';
            custmerReview.style.height = '0px';
        }
        else if(selected=='RETURNS POLICY'){
            descrip.style.visibility = 'collapse';
            viewPlans.style.visibility = 'collapse';
            refundPolicy.style.visibility = 'visible';
            custmerReview.style.visibility = 'collapse';
            descrip.style.height = '0px';
            viewPlans.style.height = '0px';
            refundPolicy.style.height = 'auto';
            custmerReview.style.height = '0px';
        }
        else if(selected=='CUSTOMER REVIEWS'){
            descrip.style.visibility = 'collapse';
            viewPlans.style.visibility = 'collapse';
            refundPolicy.style.visibility = 'collapse';
            custmerReview.style.visibility = 'visible';
            descrip.style.height = '0px';
            refundPolicy.style.height = '0px';
            viewPlans.style.height = '0px';
            custmerReview.style.height = 'auto';
        }
    });
});

