 // Aquí tu código

 const listEl = document.getElementById("lista");
 const butoEl = document.getElementById("agregar");

 let listado = [];
 
 function addElemento (padre,etiqueta,lista){
   padre.innerHTML = "";

   for (let newEl of lista){
      let addlist = document.createElement(etiqueta);
      addlist.textContent=newEl;

      padre.appendChild(addlist);
   }
   
 }

 butoEl.addEventListener("click",function(){
    let newEl =prompt("Introduce un nuevo elemento:");

    if (newEl.trim()===""){
      console.log("campo vacio");
    }else{
      listado.push(newEl);
      /* FORMA NORMAL Y LOGICA
      let addlist = document.createElement("li");
      addlist.textContent=newEl;

      listEl.appendChild(addlist);
      */

    }
    // FORMA "IMPLEMENTAR CON CALZADOR UN ARRAY"
    addElemento(listEl,"li",listado);
 });
 