
let div = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let btn = document.getElementById("btn")
let music = document.getElementById("music")
const audio = new Audio();
audio.src = "./mixkit-gasping-zombie-963.wav"

div.addEventListener("mousemove",function(){
    document.getElementById("text1").style.display = "block"
    document.getElementById("text2").style.display = "block"
    document.getElementById("text7").style.display = "block"
})
div2.addEventListener("mousemove",function(){
    document.getElementById("text3").style.display = "block"
    document.getElementById("text4").style.display = "block"
})
div3.addEventListener("mousemove",function(){
    document.getElementById("text5").style.display = "block"
    document.getElementById("text6").style.display = "block"
    document.querySelector("body").style.background = "black"

})
btn.addEventListener("click",function(){
    document.getElementById("rasm").style.display = "block"
})

