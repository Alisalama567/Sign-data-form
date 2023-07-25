let Sgin = document.querySelector(".sgin")
let exit = document.querySelector(".close");
let submit = document.querySelector(".btn")

exit.onclick= (()=> Sgin.remove());
submit.onclick=((e)=>Sgin.remove());
