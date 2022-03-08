let contenedor1 = document.getElementById('contenedor1');//Contenedor form
let contenedor_nuevo = document.getElementById('contenedor_nuevo'); //Contenedor vacío

let valorPC = 820000
let descuento = 0
let valor1 = 0
let precioDescuento = 0

let quince = 15
let veinte = 25
let treinta = 35
let noDesc = 0
let descVar

contenedor1.addEventListener('submit', function (e) {
    e.preventDefault()

    input1 = document.getElementById('input1')
    valor1 = valorPC * input1.value

    if (valor1 >= 1640000 && valor1 <= 3280000) {
        descVar = quince
        descuento = valor1 * 0.15
        precioDescuento = valor1 - descuento
        console.log(valor1, descuento, precioDescuento)
    }
    else if(valor1 > 3280000 && valor1 <= 6560000){
        descVar = veinte
        descuento = valor1 * 0.25
        precioDescuento = valor1 - descuento
        console.log(valor1, descuento, precioDescuento)
    }
    else if(valor1 > 6560000 && valor1 <= 9840000){
        descuento = valor1 * 0.35
        descVar = treinta
        precioDescuento = valor1 - descuento
        console.log(valor1, descuento, precioDescuento)
    }
    else if(valor1 > 9840000){
        alert("No hay descuento para esta compra")
        descVar = noDesc
        precioDescuento = valor1 - descuento
        console.log('valor demasiado alto')
    }
    else if(valor1 = 825000){
        alert("No hay descuento para esta compra")
        descVar = noDesc
        precioDescuento = valor1 - descuento
    }
    else(console.log('no hay descuento'))


    let boton2 = document.getElementById('boton2')

        contenedor1.classList.add('hidden')
        contenedor_nuevo.classList.remove('hidden')
        contenedor_grande()

})

console.log(descuento)

let contenedor_grande = () => {
    contenedor_nuevo.innerHTML = `
    <form >
        <div class="calculador3">
            <h3 class="letra2">Cloud Store </h3>
            <h4 class="letra2 titulo4">Ordén de compra</h4>
    
            <label class="letra2">valor de compra</label>
            <input class="input input-1" value=${valor1} disabled></input>
    
            <label class="letra2">valor de descuento</label>
            <input class="input input-2" value=${descuento} disabled></input>
    
            <label class="letra2">total</label>
            <input class="input input-3" value=${precioDescuento} disabled></input>

            <p class="letra2">su descuento fue del ${descVar}% </p>
    
        </div>
    </form>
    `
}
