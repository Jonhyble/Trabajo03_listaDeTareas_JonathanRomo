let newId = 0;

function changeText() {
    // Obtener el texto del input para evaluar si hay algo escrito
    const textInput = document.getElementById("input-text");
    const textValue = textInput.value;
    if (textValue === "") {
        alert("Ingrese un texto")
    } else {
        // Creación del elemento de la lista
        const listElement = document.createElement("li");
        // Asignación de id al elemento de la lista para futura eliminación
        const actualId = "li-" + newId;
        listElement.setAttribute("id", actualId);
        // Asignar la clase list-element
        listElement.setAttribute("class", "list-element");
        // Creación de un elemento div
        const divElement = document.createElement("div");
        divElement.setAttribute("class", "div-element active");
        divElement.setAttribute("id", actualId + "-div");
        divElement.setAttribute("onclick", "changeClass('" + actualId + "-div')");
        // Creación de elemento p
        const pElement = document.createElement("p");
        // Asignación de atributos onclick, id y class al elemento p
        pElement.setAttribute("class", "p-element");
        // Asignación de texto de la nueva tarea en p
        const nodo = document.createTextNode(textValue);
        pElement.appendChild(nodo);
        // Agregar divElement al elemento de la lista
        divElement.appendChild(pElement);
        listElement.appendChild(divElement);
        // Crear elemento de botón
        const buttonElement = document.createElement("button");
        // Agregar atributos id, class y onclick del elemento botón
        buttonElement.setAttribute("class", "button-element");
        buttonElement.setAttribute("onclick", "deleteListElement('" + actualId + "')");
        // Crear elemento svg
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "2rem");
        svg.setAttribute("height", "2rem");
        svg.setAttribute("viewBox", "0 -960 960 960");
        svg.setAttribute("fill", "#ffffff");
        // Crear el elemento con path
        const link = document.createElementNS("http://www.w3.org/2000/svg", "path");
        link.setAttributeNS(null, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z")
        // Agregar path al svg y el svg al botón
        svg.appendChild(link);
        buttonElement.appendChild(svg);
        // Agregar buttonElement a listElement
        listElement.appendChild(buttonElement);
        // Obtener el elemento lista del documento y agregar listElement a este
        const element = document.getElementById("lista");
        element.appendChild(listElement);
        // Aumentar el id del elemento
        newId++;
    }
}

function deleteListElement(elementToRemove) {
    // Buscar elemento y eliminarlo
    const element = document.getElementById(elementToRemove);
    element.remove();
}

function changeClass(idOfElement) {
    // Buscar elemento para cambiar su estado de activo a inactivo
    const listElement = document.getElementById(idOfElement);
    let classes = listElement.getAttribute("class").split(" ");
    if (classes[1] === "active"){
        classes[1] = "deactive";
    } else {
        classes[1] = "active";
    }
    listElement.setAttribute("class", classes.join(" "))
}