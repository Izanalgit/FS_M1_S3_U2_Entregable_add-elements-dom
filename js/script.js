 // Aquí tu código

 const listEl = document.getElementById("lista");
 const butoEl = document.getElementById("agregar");

 butoEl.addEventListener("click",function(){
    let newEl =prompt("Introduce un nuevo elemento:");
    let addlist = document.createElement("li");

    addlist.textContent=newEl;

    listEl.appendChild(addlist);
 });
 