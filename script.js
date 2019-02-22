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