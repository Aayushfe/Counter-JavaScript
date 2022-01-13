let count = 0;
let number = document.getElementById("value");

function increase(){
    count = count + 1;
    number.innerHTML = count;
    changeColor()
}

function decrease(){
    count = count - 1;
    number.innerHTML = count;
    changeColor();
}
function reset(){
    count = 0;
    number.innerHTML = count;
    changeColor();
}
function changeColor(){
    if(count>0){
        number.style.color = "#2ecc71"
    }else if(count<0){
        number.style.color= "#e74c3c"
    }else{
        number.style.color="#2c3e50"
    }
}

// function changeColor(){
//     if(count>0){
//         counter.style.color = "#2ecc71";
//     }else if(count<0){
//         counter.style.color ="#e74c3c";
//     }else{
//         counter.style.color= "#2c3e50";
//     }
// };
// let count = 0;
// const counter = document.getElementById("value");


// function increase(){
//     count = count+1;
//     counter.innerHTML = count;
//     changeColor();
// };


// function decrease(){
//     count = count-1;
//     counter.innerHTML = count;
//     changeColor();
// }

// function reset(){
//     count = 0;
//     counter.innerHTML = count;
//     changeColor();
// }

