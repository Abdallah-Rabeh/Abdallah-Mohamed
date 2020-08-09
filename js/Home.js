"use strict";

let imaes = Array.from(document.querySelectorAll("#Gallary img")),
indicatorsContainer = document.querySelector(".popup .indicators");


let ulElement = document.createElement("ul");
ulElement.className = "list-unstyled";

for (let i = 0; i < imaes.length; i+=1){
    let liElement = document.createElement("li");
    liElement.className = "indicator";
    liElement.setAttribute("index-img", i);
    liElement.textContent = i + 1;
    ulElement.append(liElement);
}
 
indicatorsContainer.append(ulElement);




let mypoper = document.querySelectorAll("#Gallary .item i");
let popup =document.querySelector(".popup");
let opencoles =document.querySelector(".popup .box i.fa-times-circle");
let nextcoles =document.querySelector(".popup .box i.fa-arrow-alt-circle-right");
let prevcoles =document.querySelector(".popup .box i.fa-arrow-alt-circle-left");
let  indicators = document.querySelectorAll(".popup .indicator");
let popupImg =document.querySelector(".popup img");

let i ;
for(i =0;  i< mypoper.length; i+=1){
    mypoper[i].onclick = function(){
        popup.style.cssText =`
            opacity : 1;
            z-index : 3;
        `;
    let del = this.parentElement.firstElementChild.src;
    popupImg.setAttribute("src",del);    
   let indexOfCurrentImg = imaes.findIndex( (image) => {return image.src==popupImg.src});  
   for(let indicator of indicators)  {
    indicator.classList.remove("active");
   }
   indicators[indexOfCurrentImg].classList.add("active");
}
opencoles.onclick= closePopup;
nextcoles.onclick= nextPopup;
prevcoles.onclick= prevPopup;
for(let indicator of indicators)  {
    indicator.onclick=indicatorpopup;
}
function updateindicators(indexOfCurrentImg){
    for(let indicator of indicators)  {
        indicator.classList.remove("active");
       }
       indicators[indexOfCurrentImg].classList.add("active");
      
}
function closePopup(){
    popup.style.cssText =`
    opacity : 0;
    z-index : 3;
`;

}
function nextPopup(){
    let indexOfCurrentImg = imaes.findIndex((image) => { return image.src == popupImg.src });
     indexOfCurrentImg = (indexOfCurrentImg == imaes.length - 1) ? -1 : indexOfCurrentImg;
    popupImg.src = imaes[indexOfCurrentImg + 1].src;
    // for(let indicator of indicators)  {
    //     indicator.classList.remove("active");
    //    }
    //    indicators[indexOfCurrentImg +1].classList.add("active");
    (updateindicators(indexOfCurrentImg+1))     
}
}


function prevPopup(){
    let indexOfCurrentImg = imaes.findIndex((image) => { return image.src == popupImg.src});
    indexOfCurrentImg = (indexOfCurrentImg == 0) ? imaes.length : indexOfCurrentImg;
    popupImg.src = imaes[indexOfCurrentImg - 1].src;
    for(let indicator of indicators)  {
        indicator.classList.remove("active");
       }
       indicators[indexOfCurrentImg-1].classList.add("active");
       
    }

     function indicatorpopup(){
        popupImg.src=imaes[parseInt(this.getAttribute("index-img"))].src;
        updateindicators([parseInt(this.getAttribute("index-img"))].src)
     }

