var box=document.querySelector(".box");

function select(btn){
  box.value += btn.textContent;
}

function clearr(c){
    box.value ='';
}

function equal(equ){
    // eval => string opration to opration on number 
    var res=eval(box.value);
    box.value =res;
}
