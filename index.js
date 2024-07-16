document.querySelector(".img1").setAttribute("src", "./images/dice"+ random() +".png")
var player1 = rand
document.querySelector(".img2").setAttribute("src", "./images/dice"+ random() +".png")

var player2 = rand






function random(){
    return rand = Math.floor(Math.random()*6)+1

} 
var text = ""

if (player1>player2){
        text = "🎲 Player 1 wins"
}else if (player1<player2) {
        text = "🎲 Player 2 wins"   
} else if (player1===player2) {
        text = "🎲 It is a draw"
        } else {
            console.error()
        }
            
        document.querySelector("h1").innerHTML = text



/*var text = ""
switch(player1, player2){
    case player1>player2:
        text = "Player 1 wins"
    case player2>player1:
        text = "Player 2 wins"
    case player1===player2:
        text = "It is a draw"
}
document.getElementsByClassName[0].innerHTML = text;*/