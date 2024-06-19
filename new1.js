let div = document.querySelector("div");
div.onmouseover =()=> {
    console.log(("you hovered"));
};
let btn = document.querySelector("#btn");

// btn.onclick =()=> {
//     console.log("button clicked");

//     let a = 25;
//     a++
//     console.log(a);
// }
// btn.onclick=(evt) => {
// console.log(e);
// //console.log(evt.type);

// }
//event listner


btn.addEventListener("click",(e)=>{
    console.log("Button was clicke-handler-1.");
    
});
btn.addEventListener("click",(e)=>{
    console.log("Button was clicked-handler-2");
    
});
btn.addEventListener("click",(e)=>{
    console.log("Button was clicked handler-3");
    
});
const handler =(e)=>{
    console.log("Button was clicked handler-4");
btn.addEventListener("click",handler)
};

btn.removeEventListener("click",handler);

