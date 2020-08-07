var loadChance1 = Math.floor(Math.random() * 19);

var loadChance2 = Math.floor(Math.random() * 51);

var loadChanceComplete = loadChance1 + loadChance2;

console.log( loadChance1)

console.log( loadChance2)

console.log( 'Code Generated: ', loadChanceComplete )

if ( loadChance1 + loadChance2 == 16) {
    window.open("/pages/youwon.html" , "_blank");
    console.log("You won!!")
}

if ( loadChance1 + loadChance2 == 21) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ" , "_blank");
    console.log("Fuck You LOL")
}

if ( loadChance1 + loadChance2 == 57) {
    window.open("https://www.youtube.com/watch?v=qRdK18gZems" , "_blank");
    console.log("lol")
}