
let tasaCambioMXN = 17.8

        let cantidadInput = document.getElementById("cantidad");
        let resultadoP = document.getElementById("resultado");

        cantidadInput.addEventListener("keyup", () => {
            let cantidadUSD= parseFloat(cantidadInput.value);
            let cantidadMXN = (cantidadUSD * tasaCambioMXN).toFixed(2);
            resultadoP.textContent = `Cantidad en pesos MXN: ${cantidadMXN}`;
        });
        


       

        
        
        
