
document.getElementById("verify").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim() ;

const age = document.getElementById("age").value ;
if (age >= 18) {
        alert ("You are an adult,"  + name +  "! Welcome to our website.");}
else {
        alert("You are not an adult, " + name + ".");
    }
});


 for (let i=1; i<= 5; i++) {

 if (i % 2 === 0) {
    console.log(i + " is even.");
 }
 else if (i % 2 !== 0) {
    console.log(i + " is odd.");
 }

else{
    console.log(i + " is neither odd nor even.");
} 
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
 
 
