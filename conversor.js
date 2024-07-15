let tasaCambioUSD = 0.0561862; 

        let cantidadInput = document.getElementById("cantidad");
        let resultadoP = document.getElementById("resultado");

        cantidadInput.addEventListener("keyup", () => {
            let cantidadMXN = parseFloat(cantidadInput.value);
            let cantidadUSD = (cantidadMXN * tasaCambioUSD).toFixed(2);
            resultadoP.textContent = `${cantidadMXN} MXN equivale a ${cantidadUSD} USD`;
        });