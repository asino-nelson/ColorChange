
let name = document.getElementById("name");
let btn = document.getElementById("btn");


let colors = ["royalblue", "blue","yellow","green", "pink","crayon"]
let pnames = ["Nelson","Ja Morant","Lamelo Ball"]
const changeColor = () => {
   let randNum  = Math.floor(Math.random()*colors.length);
   document.body.style.backgroundColor = colors[randNum];

   let randNameNum  = Math.floor(Math.random()*pnames.length);
   uname.innerHTML = pnames[randNameNum];
};


//addEventListenr('event', function)
btn.addEventListener('click', changeColor )
