let boxe = document.getElementById("box"); //selection de la div à deplacer
boxe.setAttribute("draggable", true); // attribut à activer afin que l'objet soit deplaçable

let zone = document.getElementById("target"); //selection de la zone de depot

// les differents evenements pour le deplacement et le depot de l'objet

boxe.addEventListener("dragstart", dragStart); // cet evenement permet de definr l'instant où le deplacement à debuter

zone.addEventListener("dragover", allowDrop); // cet evenement indique l'instant où l'objet sur vol la zone de depot
zone.addEventListener("drop", dragDrop); // cet evenement indique l'instant où l'objet est deposé

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let box = document.getElementById(data);
  event.target.appendChild(box);
}
