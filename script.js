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
let initialState = 0;

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
function showSlide(){
    let slide = document.getElementsByClassName("slides");
    //initialize all slides to not be displayed
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[slideNum-1].style.display = "block";
    console.log("show slide function triggered")
    }