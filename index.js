scoreHome = document.getElementById("scorehome")
scoreHome.textContent = 0

scoreGuest = document.getElementById("scoreguest")
scoreGuest.textContent = 0
let xd = 0
let dx = 0
function home1(){
    xd = xd + 1
    scoreHome.textContent = xd
  
}

function home2(){
    xd = xd + 2
    scoreHome.textContent = xd

}
function home3(){
    xd = xd + 3
    scoreHome.textContent = xd

}
function guest1(){
    dx = dx + 1
    scoreGuest.textContent = dx
  
}

function guest2(){
    dx = dx + 2
    scoreGuest.textContent = dx

}
function guest3(){
    dx = dx + 3
    scoreGuest.textContent = dx

}
