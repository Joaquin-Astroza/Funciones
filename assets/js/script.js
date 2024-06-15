function pintar(event, color = "green"){
    const ele = event.target
    ele.style.backgroundColor = color
    }
    const ele = document.getElementById("ele1")
    pintar({target: ele})
    ele.addEventListener("click", function(event) {
        pintar(event, "yellow")
    });

