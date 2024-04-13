let number = 0

document.getElementById("button").onclick = function(){
    number = number + 1
    document.getElementById("paragraph").innerHTML = number
}