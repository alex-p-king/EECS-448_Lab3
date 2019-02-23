//Exercise 1
function validate(){
    let t1 = document.getElementById("enter-text-field").value;
    let t2 = document.getElementById("verify-text-field").value;
    console.log(t1);
    console.log(t2);
    if (t1 == t2){
        alert("Passwords match");
    }
    else{
        alert("Passwords do not match")
    }
}


//Exercise 2
let slideNum = 1;

function lastSlide(){
    if(slideNum == 1){
        slideNum = 5;
        console.log(slideNum);
    }
    else{
        slideNum = slideNum - 1;
        console.log(slideNum);
    }
}
function nextSlide(){
    if(slideNum === 5){
        slideNum = 1;
        console.log(slideNum);
    }
    else{
        slideNum++;
        console.log(slideNum);
    }
}
