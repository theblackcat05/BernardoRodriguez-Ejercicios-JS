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

        function pintarTarjetas(idGlobal) {
          let contenedor = document.getElementById("contenedorTarjetas")
          for (let i = 0; i < notas.length; i++) {
            
          let idGlobal = [4]
          let tarjeta = document.createElement('div')
          
          tarjeta.className= "card"

          tarjeta.innerHTML= `<input type="checkbox" name="realizadas" id="realizadas">
        <div class="card-body">
          <h5  class="card-title" text>Sacar la basura</h5>
          <p class="card-text">si no saco la basura mi mama se va a enojar</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`

        contenedor.appendChild(tarjeta)

          }  
    }
    pintarTarjetas(notas.idGlobal)

    /*
    function pintarTarjetas(events) {

      let contenedor = document.getElementById("contenedorTarjetas")
    
      for (let i = 0; i < events.length; i++) {
        let eventos = events[i]
        let tarjeta = document.createElement('div')
        
        tarjeta.className = "card"
    
        tarjeta.innerHTML = `<div class="card size ">
      <img src = ${eventos.image} class ="card-img-top h-50" alt=${eventos.category}>
        <div class="card-body">
          <h5 class="card-title">${eventos.name}
          </h5><p class="card-text"> ${eventos.description} 
          <a href="./details.html" class="btn btn-danger">Details</a>
        </div >
      </div > `
        contenedor.appendChild(tarjeta)
      }
    }
    pintarTarjetas(data.events)
    */
    