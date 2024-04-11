


document.getElementById("button1").onclick = function(){
    let number = 1;
    
    document.getElementById("submitBtn").onclick = function(){
        payment = document.getElementById("myText").value;
        payment = Number(payment);
        console.log(payment, typeof(payment));
    
        let coin = Math.floor(Math.random() * 3)
    
        if (coin == number){

        document.getElementById("p2").innerHTML = "heads!"
        document.getElementById("p1").innerHTML = "you have won $" + payment * 2;s
        }

        else{
            document.getElementById("p2").innerHTML = "tails!"
            document.getElementById("p1").innerHTML = "You have lost $" + payment;
        }
        console.log(roll)
        console.log(number)
    }
    
}

document.getElementById("button2").onclick = function(){
    let number = 2;

    document.getElementById("submitBtn").onclick = function(){
        payment = document.getElementById("myText").value;
        payment = Number(payment);
        console.log(payment, typeof(payment));
    
        let coin = Math.floor(Math.random() * 3)
    
        if (coin == number){
            
        document.getElementById("p2").innerHTML = "tails!"
        document.getElementById("p1").innerHTML = "you have won $" + payment * 2;
        }
        else{
            document.getElementById("p2").innerHTML = "heads!"
            document.getElementById("p1").innerHTML = "You have lost $" + payment;
        }
        console.log(roll)
        console.log(number)
    }
    
}




/* document.getElementById("submitBtn").onclick = function(){
    payment = document.getElementById("myText").value;
    payment = Number(payment);
    console.log(payment, typeof(payment));

    let roll = Math.floor(Math.random() * 7)

    if (roll = number){
    document.getElementById("p1").innerHTML = "you have won $", payment * 2;
    }
    else {
        document.getElementById("p1").innerHTML = "You have lost $", payment;
    }
}
*/