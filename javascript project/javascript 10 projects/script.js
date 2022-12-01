const colors = ["green","red","blue","#f15025"]
const btn = document.getElementById("changerel")
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let n =colors.length;
    const randomnumber =Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});