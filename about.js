console.log("about")
document.querySelector('body').addEventListener('mousemove',function(e) {
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},250)`;
    console.log("click");


    
})