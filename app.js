let newId = 0;

function changeText() {
    const listElement = document.createElement("li");
    const actualId = "li-" + newId;
    listElement.setAttribute("id", actualId);
    listElement.setAttribute("class", "list-element")
    const pElement = document.createElement("p");
    pElement.setAttribute("onclick", "changeClass('" + actualId + "-p')")
    pElement.setAttribute("id", actualId + "-p")
    pElement.setAttribute("class", "p-element active")
    const nodo = document.createTextNode("Nueva tarea de la lista");
    pElement.appendChild(nodo);
    listElement.appendChild(pElement);
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "li-" + newId);
    buttonElement.setAttribute("onclick", "deleteListElement('" + actualId + "')")
    const buttonNode = document.createTextNode("Eliminar");
    buttonElement.appendChild(buttonNode);
    listElement.appendChild(buttonElement);
    const element = document.getElementById("lista");
    element.appendChild(listElement);
    newId++;
}

function deleteListElement(elementToRemove) {
    const element = document.getElementById(elementToRemove);
    element.remove();
}

function changeClass(idOfElement) {
    const listElement = document.getElementById(idOfElement);
    let classes = listElement.getAttribute("class").split(" ");
    if (classes[1] === "active"){
        classes[1] = "deactive";
    } else {
        classes[1] = "active";
    }
    listElement.setAttribute("class", classes.join(" "))
}