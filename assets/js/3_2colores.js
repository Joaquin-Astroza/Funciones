let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    color = "pink";
  } else if (event.key === "s" || event.key === "S") {
    color = "orange";
  } else if (event.key === "d" || event.key === "D") {
    color = "skyblue";
  }
  if (["a", "A", "s", "S", "d", "D"].includes(event.key)) {
    document.getElementById("key").style.backgroundColor = color;
  }
  let color2;
  if (event.key === "q" || event.key === "Q") {
    color2 = "purple";
  } else if (event.key === "w" || event.key === "W") {
    color2 = "gray";
  } else if (event.key === "e" || event.key === "E") {
    color2 = "brown";
  }
  if (color2){
    contenedor = document.getElementById("key");
    divNuevo = document.createElement("div")
    divNuevo.style.width = "200px";
    divNuevo.style.height = "200px";
    divNuevo.style.backgroundColor = color2;
    divNuevo.style.border = "1px solid black";
    contenedor.appendChild(divNuevo)
  }
});
