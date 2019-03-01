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

// Exercise 4
function accept(){
    let B_rValue = document.getElementById("border-red-value").value;
    let B_gValue = document.getElementById("border-green-value").value;
    let B_bValue = document.getElementById("border-blue-value").value;
    let B_wValue = document.getElementById("width-value").value;
    let Bk_rValue = document.getElementById("background-red-value").value;
    let Bk_gValue = document.getElementById("background-green-value").value;
    let Bk_bValue = document.getElementById("background-blue-value").value;
    paragraph.style.border =  "thick solid rgb(" + B_rValue + "," + B_gValue + "," + B_bValue + ")";
    paragraph.style.borderWidth = " "+ B_wValue +" ";
    paragraph.style.backgroundColor = "rgb(" + Bk_rValue + "," + Bk_gValue + "," + Bk_bValue + ")";
    console.log(B_rValue);
    console.log(B_gValue);
    console.log(B_bValue);
    console.log(B_wValue);
    console.log(Bk_rValue);
    console.log(Bk_gValue);
    console.log(Bk_bValue);


}

