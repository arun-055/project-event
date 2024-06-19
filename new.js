// // let div = document.querySelector('div');
// // console.log(div);
// // let value = div.getAttribute("id");
// //  console.log(value);

// //  console.log( div.getAttribute('name'));

// //  console.log(div.setAttribute("id","newbox"));
// // let div = document.querySelector('div');

// // console.log(div);
// // //to add css(style) in js
// // console.log(div.style);

// // div.style.backgroundColor="green";

// // //div.style.visibility ="hidden";

// // div.style.fontSize="20px";
//  //div.innerText ="Hello";

//  //-----------------------------------------


// let newbtn = document.createElement("button");
//  newbtn.innerText="click it";
//  console.log(newbtn);

// let di =document.querySelector("div");
// //let di =document.querySelector("p");
// di.append(newbtn);
// // di.prepend(newbtn);
// // di.before(newbtn);
// // di.after(newbtn);
//........................................

//create a new button element. Give it a text"click me" ,background
//color of redand text color of white//

//insert the button as the first element inside the body EventTarget.

 /*let newBtn=document.createElement("button");

 newBtn.innerText ="click me";
 console.log("newBtn");

 newBtn.style.color="white";
 newBtn.style.color = "red";  

 let body = document.querySelector("body");

 body.prepend(newBtn);*/

 let para = document.querySelector("p");
    //para.setAttribute("class","newPara");

    para.classList.("para","newPara");