let notas = [
        {
            id: 1,
            titulo: "Sacar la basura",
            texto: "si no saco la basura mi mama se va a enojar",
            realizada: true,
        },
        {
            id: 2,
            titulo: "pintar la casa",
            texto: "le tocan 3 manos de pintura",
            realizada: false,
        },
        {
            id: 3,
            titulo: "ir al super",
            texto: "comprar elote, calabaza y chamberete para hacer caldo de res",
            realizada: true,
        },
        {
            id: 4,
            titulo: "lavar el carro",
            texto: "lavar por fuera y limpiar tapetes",
            realizada: true,
        },
    ]
let IdGlobal = [4]

function pintarNotas(notas) {
  let contenedor = document.getElementById("contenedorTarjetas")
          for (let i = 0; i < notas.length; i++) {
            
          let idGlobal = [4]
          let tarjeta = document.createElement('div')
          
          tarjeta.className= "card"

          tarjeta.innerHTML= `<input class="form-check-input mt-0" type="checkbox">
            <h5 class="card-title">Sacar la basura</h5>
            <p class="card-text">Mi mama me va a regañar si no lo hago.</p>
          </div>
          <button type="button" class="btn btn-danger">Borrar</button>`

        contenedor.appendChild(tarjeta)
          }
}
pintarNotas(notas)

 /*
        function pintarNotas(notas) {
          
          }  
    }
   
    pintarTarjetas(notas)

    
    function addNote(title, text) {
      idGlobal++;
      let newNote = { id: idGlobal, title, text, realizada: false };
      notes.push(newNote);
      renderNotes();
  }*/