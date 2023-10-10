function press(e){
    document.getElementById("inp").textContent += e
}

function calculation(){
    let userValues = document.getElementById("inp")
    userValues.textContent = eval(userValues.textContent)

}

function clr(){
    document.getElementById("inp").textContent = ''
}