
// product of price calculate 

function getcostNumber(product,price){
    let productCost =document.getElementById(product +'-cost');
    let cost =productCost.innerText;
    productCost.innerText=price;
    getTotal();
  
}
// Total price calculate 

function getTotal(){

const bestPrice =document.getElementById('best-price');
const totalbest =bestPrice.innerText;

const memorytotal=document.getElementById('memory-cost').innerText;
const storagetotal=document.getElementById('storage-cost').innerText;
const deliverytotal=document.getElementById('delivery-cost').innerText;

const previousTotal =document.getElementById('total-cost').innerText= parseFloat (totalbest)+parseFloat(memorytotal) + parseFloat(storagetotal) + parseFloat(deliverytotal);
const updateTotal = document.getElementById('total');
const total =updateTotal.innerText;
updateTotal.innerText=previousTotal;

}
// input promo code setup and change total amount 

document.getElementById('promo-btn').addEventListener('click',function(){
    const promoCode =document.getElementById('promo-input');
    const promoInput = promoCode.value;
    const totalprice =document.getElementById('total-cost').innerText;
    const offer = parseFloat(totalprice)*0.2;
    const total = document.getElementById('total');
    const totalcoste =total.innerText;
    if(promoInput =='stevekaku'){
        total.innerText= parseFloat (totalcoste) - parseFloat (offer);
        const error=document.getElementById('error-message');
        error.style.display='none';
        
    }
    else if(promoInput!='stevekaku'){
        const error=document.getElementById('error-message');
        error.style.display='block';
    }
 
    
})
// memeory  evenhanglar

const memory2Button =document.getElementById('memory-2ndbtn').addEventListener('click',function(){
   
    getcostNumber('memory',180);
   
})
const memory1Button =document.getElementById('memory-firstbtn').addEventListener('click',function(){
    
    getcostNumber('memory',0);
   
})
// storage  evenhanglar

const storage1button =document.getElementById('storage-1stbtn').addEventListener('click',function(){
   
    getcostNumber('storage',0);
})

const storage2button =document.getElementById('storage-2ndbtn').addEventListener('click',function(){
  
    getcostNumber('storage',100);
})

const storage3button =document.getElementById('storage-3rdbtn').addEventListener('click',function(){
   
    getcostNumber('storage',180);
})

//DeliveryCost evenhanglar

const delivery1btn = document.getElementById('delivery-1stbtn').addEventListener('click',function(){
    
    getcostNumber('delivery',0);
})

const delivery2btn = document.getElementById('delivery-2ndbtn').addEventListener('click',function(){
    
    getcostNumber('delivery',20);
})



