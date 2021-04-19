//local storage
 let carts = document.querySelectorAll('.add-cart');

 let products = [
   {
     name: 'Mini shaker de fruit',
     tag:'nomimage',     
     calories:'56 KCal',
     price:7,
     inCart:0
   },
   {
     name: 'Make me healthy',
     calories:'415 Kcal',
     price:15,
     inCart:0
   },
   {
     name: 'Shaker de fruit',
     calories:'80 KCal',
     price:10,
     inCart:0
   } , 
   {
     name: 'Chiche champi',
     calories:'506 KCal',
     price:20,
     inCart:0
   },
   {
     name: 'Compote de pommes',
     calories:'64 KCal',
     price:12,
     inCart:0
   },
   {
     name: 'Mexchiken',
     calories:'633 KCal',
     price:25,
     inCart:0
   },
   {
     name: 'Pita pomme' ,   
     calories:'468 KCal',
     price:30,
     inCart:0
  },
   {
     name: 'Avo caesar',
     calories:'600 KCal',
     price:35,
     inCart:0
   },
   {
     name: 'Combo quiche saumon',
     calories:'483 KCal',
     price:35,
     inCart:0
   }
  ];

 for (let i=0; i< carts.length; i++) {
     carts[i].addEventListener('click', () => {
         cartNumbers(products[i]);
         totalCost(products[i]);
     });
 }

 function onLoadCartNumbers() {
 let productNumbers = localStorage.getItem('cartNumbers');
 if( productNumbers ) {
  document.querySelector('.cart span').textContent = productNumbers;
     }
 }

function cartNumbers(product, action) {
     let productNumbers = localStorage.getItem('cartNumbers');
     productNumbers = parseInt(productNumbers);

     let cartItems = localStorage.getItem('productsInCart');
     cartItems = JSON.parse(cartItems);

     if( action ) {
         localStorage.setItem("cartNumbers", productNumbers - 1);
         document.querySelector('.cart span').textContent = productNumbers - 1;
         console.log("action running");
     } else if( productNumbers ) {
         localStorage.setItem("cartNumbers", productNumbers + 1);
         document.querySelector('.cart span').textContent = productNumbers + 1;
     } else {
         localStorage.setItem("cartNumbers", 1);
         document.querySelector('.cart span').textContent = 1;
     }
     setItems(product);
 }

///////////////////////////////////////////////////////////////////////////////

let add = document.querySelectorAll('.add-cart')
let item = document.querySelector('.item-card')
let total = []
let totalCart = document.querySelector('.total')

for (let i = 0 ; i < add.length ; i++){

    add[i].addEventListener('click', addTOCart)
  
}


function addTOCart(event) {

 let btn = event.target
 let shop = btn.parentElement
 let name = shop.querySelector('.title').innerText
 let price = shop.querySelector('.price').innerText
 let imgSrc = shop.querySelector('.imgcard').src
 
 console.log (name , price , imgSrc)

 addToModal (name , price , imgSrc)

 total.push( parseFloat(price))
console.log(calculTotal())
addQuantity()
}



 function addToModal (name , price , imgSrc){
    
  
     item.innerHTML += ` 
     <br>
     <div class="row mt-3 ">
     <div class="col-md-3">
       <img src="${imgSrc}" class="imagecard" >
     </div>
     <div class="col-md-2">
       <strong>${name}</strong>
     </div>
     <div class="col-md-3">
       <strong>${price}</strong>
     </div>
     <div class="col-md-2">
       <span>1</span>
     </div>
     <div class="col-md-2">
     <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
     </div>
   </div>
     ` 
     
} 
//Somme
function addQuantity () {
  totalCart.innerHTML = 
 `<div class="pos">
  <h4>Total</h4> 
  <h4>${calculTotal()} Dt</h4>
  </div>` 
 
}

function calculTotal(){

return total.reduce((a,b) => (a+b) )
}

//Vider le panier 
document.querySelector('.all').addEventListener('click', purchaseClicked)
function purchaseClicked() {
  var cartItems = document.querySelector('.item-card')
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)

  }
  addQuantityRomove ()
}


function addQuantityRomove () {
  totalCart.innerHTML = 
 `<div class="pos">
  <h4> <b>Total Price   </b>   0 Dt</h4>
  </div>` 
 
}







////////////////////////////////////////////////////////////////////////////////
//Text animation navbar//
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//////////////////////////////////////////////////////////////////////////////////
  //Night mood
  
  //Récupérer le button nightmode
let nightMode=document.getElementById('nightMode');

//Ecouter l'evènement 
nightMode.addEventListener("click",tonight);
 // Exécution de ce code lors d'un click
function tonight(){

    document.body.classList.toggle("dark-theme");
     }
//change image 
     function changeImage() {

      if (document.getElementById("imgClickAndChange").src == "") 
      {
          document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
      }
      else 
      {
          document.getElementById("imgClickAndChange").src = "";
      }
  }