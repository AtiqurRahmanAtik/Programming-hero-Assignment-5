


const button = document.getElementsByClassName('button');

let count= 8;
let sum= 0;
for(let btn of button){
     btn.addEventListener('click',function(event){
        count = count - 1;
        let butt = event.target;
        let buttStyle = butt.style.background='#1DD100';
        
        let buttonName = event.target.innerHTML;
        
        //validation
        // if(count <0){
        //     alert('Ticket not available today');
        // }
         sum = sum + 1;


        
         if(sum >4){
            alert('Your ticket purches limit end .you can buy ticket everyday on time only 4 tickets');
            
        }


      setInnerText('seat_8',count);
        
    setInnerText('totalSeat',sum);

     let nameOfSeat = event.target.parentNode.childNodes[1].innerText;
     console.log(nameOfSeat);


   //perseat 
   let taka = document.getElementById('perSeat').innerHTML;
   let takaConver = parseInt(taka);
 //   console.log(typeof takaConver)



    //  let y = document.getElementById('button').innerText;
    // //  console.log(y);
    //change kora labge 
    //   document.getElementById('c2').innerText=nameOfSeat;
    
        let ul = document.getElementById('ul');

    let li = document.createElement('li');

    let p = document.createElement('p');
    p.innerText= buttonName;
    let p2 = document.createElement('p');
    p2.innerText = 'Economoy'
    let p3 = document.createElement('p');
    p3.innerText = takaConver;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    ul.appendChild(li);
   


   


    //toal price
    let totalPrice = document.getElementById('totalprice').innerHTML;

    let totalPriceConver = parseInt(totalPrice);
    
    
    let x = document.getElementById('totalprice').innerHTML=takaConver + totalPriceConver;

    console.log(x);
       


//Grand total calculation
let SeatPrice = document.getElementById('perSeat').innerHTML;
let SeatPriceConvert = parseInt(taka);


let GrandTotal = document.getElementById('grandtotal').innerHTML;
let GrandTotalConvert = parseInt(GrandTotal);

let TotalGrandTotal = document.getElementById('grandtotal').innerHTML= SeatPriceConvert + GrandTotalConvert;
console.log(TotalGrandTotal);



//get  input feild


document.getElementById('apply').addEventListener('click',function(){

  let applyValue = document.getElementById('input_feild').value;
  console.log(applyValue);


  if(applyValue =='Couple 20' ){

    let discount = TotalGrandTotal * 20 /100
    console.log(discount);

    let discStyle = document.getElementById('a');
    discStyle.innerText = 'Discount : '+ discount +" BDT";

    //discount color style
    discStyle.style.color= 'red';
    discStyle.style.fontSize= '1.4rem';
    discStyle.style.fontFamily='Fantasy';
    
    
   //Grand total discount
    let GrandTotalDiscount =  TotalGrandTotal - discount ;
    console.log('total discount : ',GrandTotalDiscount)
    document.getElementById('grandtotal').innerText= GrandTotalDiscount;

    //apply input feild
    let a  = document.getElementById('applyBtnHidden');
    let hide = a.style.display='none';
    console.log(hide);

  }

  else if(applyValue =='NEW15'){

    let discount = TotalGrandTotal * 15 /100;
    console.log(discount);

    let discStyle = document.getElementById('a');
    discStyle.innerText = 'Discount : '+ discount +" BDT";
    
    //discount color style
    discStyle.style.color= 'red';
    discStyle.style.fontSize= '1.4rem';
    discStyle.style.fontFamily='Fantasy';

     //Grand total discount
    let GrandTotalDiscount = TotalGrandTotal - discount;
    console.log(GrandTotalDiscount);
     document.getElementById('grandtotal').innerText= GrandTotalDiscount;

     //apply input feild
     let a  = document.getElementById('applyBtnHidden');
     let hide = a.style.display='none';
     console.log(hide);
    
  }

  else{
    // document.getElementById('a').innerText='No discount ';


    let discStyle = document.getElementById('a');
    discStyle.innerText = 'No Discount';
    
    //discount color style
    discStyle.style.color= 'red';
    discStyle.style.fontSize= '1.4rem';
    discStyle.style.fontFamily='Fantasy';
  }

})






    })
}



//innerText Function

function setInnerText(id,value){
    document.getElementById(id).innerText= value;
}



