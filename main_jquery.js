let banderaSaldos = 0;

leer();
leer2();

// ------------------------- CARGA INGRESOS Y GASTOS -------------------------


$("#holaIngresos").click(function (e) {
    
    e.preventDefault();
    
    let tituloIHtml = document.getElementById('tituloIngreso').value;
    let precioIHtml = document.getElementById('precioIngreso').value;
    
    let ingresoForm = {
        tituloIHtml,
        precioIHtml
    }
    
    if (localStorage.getItem('storageIngresos') === null) {
        
        if (tituloIHtml != "" && precioIHtml > 0) {
            
            let ingresosDeForm = [];
            ingresosDeForm.push(ingresoForm)
            localStorage.setItem('storageIngresos', JSON.stringify(ingresosDeForm))
            
            let ingresitoI = "ing_" + tituloIHtml.toString();
            localStorage.setItem(ingresitoI, JSON.stringify(precioIHtml));
            
            document.getElementById('tbody').innerHTML +=
            `
            <tr class="borrarIngresos" id="${ingresitoI}TR">
            <td>${tituloIHtml}</td>
            <td>${precioIHtml}</td>
            <td><button id="${ingresitoI}X" onclick="eliminarIngreso(this);"> <img src="img/xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
            
        }
        
    } else {
        
        if (tituloIHtml != "" && precioIHtml > 0) {
            
            let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'))
            ingresosDeForm.push(ingresoForm);
            localStorage.setItem('storageIngresos', JSON.stringify(ingresosDeForm))
            
            let ingresitoI = "ing_" + tituloIHtml.toString();
            localStorage.setItem(ingresitoI, JSON.stringify(precioIHtml));
            
            
            document.getElementById('tbody').innerHTML +=
            `
            <tr class="borrarIngresos" id="${ingresitoI}TR">
            <td>${tituloIHtml}</td>
            <td>${precioIHtml}</td>
            <td><button id="${ingresitoI}X" onclick="eliminarIngreso(this);"> <img src="img/xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
            
        }
        
    }
    
    document.getElementById('formularioIngresos').reset();
    
});



$("#holaGastos").click(function (e) {
    
    e.preventDefault();
    
    let tituloGHtml = document.getElementById('tituloGasto').value;
    let precioGHtml = document.getElementById('precioGasto').value;
    
    let gastoForm = {
        tituloGHtml,
        precioGHtml
    }
    
    if (localStorage.getItem('storageGastos') === null) {
        
        if (tituloGHtml != "" && precioGHtml > 0) {
            
            let gastosDeForm = [];
            gastosDeForm.push(gastoForm)
            localStorage.setItem('storageGastos', JSON.stringify(gastosDeForm))
            
            let gastitoG = "gas_" + tituloGHtml.toString();
            localStorage.setItem(gastitoG, JSON.stringify(precioGHtml))
            
            
            document.getElementById('tbody2').innerHTML +=
            `
            <tr class="borrarGastos" id="${gastitoG}TR">
            <td>${tituloGHtml}</td>
            <td>${precioGHtml}</td>
            <td><button id="${gastitoG}X" onclick="eliminarGasto(this);"> <img src="img/xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
        }
        
    } else {
        
        if (tituloGHtml != "" && precioGHtml > 0) {
            
            let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'))
            gastosDeForm.push(gastoForm);
            localStorage.setItem('storageGastos', JSON.stringify(gastosDeForm))
            
            let gastitoG = "gas_" + tituloGHtml.toString();
            localStorage.setItem(gastitoG, JSON.stringify(precioGHtml))
            
            
            document.getElementById('tbody2').innerHTML +=
            `
            <tr class="borrarGastos" id="${gastitoG}TR">
            <td>${tituloGHtml}</td>
            <td>${precioGHtml}</td>
            <td><button id="${gastitoG}X" onclick="eliminarGasto(this);"> <img src="img/xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
        }
        
    }
    
    document.getElementById('formularioGastos').reset();
    
});


// ------------------------- LEER INGRESOS Y GASTOS -------------------------


function leer() {
    
    if (localStorage.getItem('storageIngresos') != null) {
        
        let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
        
        for (let i = 0; i < ingresosDeForm.length; i++) {
            let ingresito1 = "ing_" + ingresosDeForm[i].tituloIHtml.toString();
            let titulo1 = ingresosDeForm[i].tituloIHtml;
            let precio1 = ingresosDeForm[i].precioIHtml;
            localStorage.setItem(ingresito1, JSON.stringify(precio1))
            
            
            document.getElementById('tbody').innerHTML +=
            `
            <tr class="borrarIngresos" id="${ingresito1}TR">
            <td>${titulo1}</td>
            <td>${precio1}</td>
            <td><button id="${ingresito1}X" onclick="eliminarIngreso(this);"> <img src="img/xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `;
            
            
        }
        
    }
    
}


function leer2() {
    
    if (localStorage.getItem('storageGastos') != null) {
        
        let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
        
        for (let i = 0; i < gastosDeForm.length; i++) {
            let gastito2 = "gas_" + gastosDeForm[i].tituloGHtml.toString();
            let titulo2 = gastosDeForm[i].tituloGHtml;
            let precio2 = gastosDeForm[i].precioGHtml;
            localStorage.setItem(gastito2, JSON.stringify(precio2))
            
            
            document.getElementById('tbody2').innerHTML +=
            `
            <tr class="borrarGastos" id="${gastito2}TR">
            <td>${titulo2}</td>
            <td>${precio2}</td>
            <td><button id="${gastito2}X" onclick="eliminarGasto(this);"> <img src="img/xRoja.png" alt="x" width="20" /></button></td>
            </tr>
            `
        }
    }
}


// ------------------------- ELIMINAR INGRESOS / GASTOS -------------------------

function eliminaI(ingresosDeForm, elem) {
    return ingresosDeForm.filter(e => e.tituloIHtml !== elem.tituloIHtml);
}

function eliminaG(gastosDeForm, elem) {
    return gastosDeForm.filter(e => e.tituloGHtml !== elem.tituloGHtml);
}


function eliminarIngreso(obj) {
    
    let IDIng = $(obj).attr("id");
    
    let eliminar = IDIng.substring(0, IDIng.length - 1);
    let eliminarTR = eliminar + "TR";
    let eliminar2 = document.getElementById(eliminarTR);
    eliminar2.parentNode.removeChild(eliminar2);
    
    let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
    let compare = eliminar.slice(4);
    
    for (let i = 0; i < ingresosDeForm.length; i++) {
        
        if (compare == ingresosDeForm[i].tituloIHtml) {
            
            ingresosDeForm = eliminaI(ingresosDeForm, { tituloIHtml: compare })
            localStorage.removeItem(eliminar);
            localStorage.setItem('storageIngresos', JSON.stringify(ingresosDeForm))
        }
    }
    
    for (let i = 0; i < ingresosDeForm.length; i++) {
        ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
        let ingresito1 = "ing_" + ingresosDeForm[i].tituloIHtml.toString();
        localStorage.setItem(ingresito1, JSON.stringify(ingresosDeForm[i].precioIHtml))
    }
    $("#resultados").remove();
    banderaSaldos = 0;
    bandera_json = 0;
}



function eliminarGasto(obj) {
    
    let ID = $(obj).attr("id");
    
    let borrar = ID.substring(0, ID.length - 1);
    let borrarTR = borrar + "TR";
    let borrar2 = document.getElementById(borrarTR);
    borrar2.parentNode.removeChild(borrar2);
    
    let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
    let comparo = borrar.slice(4);
    
    
    for (let i = 0; i < gastosDeForm.length; i++) {
        
        if (comparo == gastosDeForm[i].tituloGHtml) {
            
            gastosDeForm = eliminaG(gastosDeForm, { tituloGHtml: comparo })
            localStorage.removeItem(borrar);
            localStorage.setItem('storageGastos', JSON.stringify(gastosDeForm))
        }
    }
    
    for (let i = 0; i < gastosDeForm.length; i++) {
        gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
        let ingresito1 = "gas_" + gastosDeForm[i].tituloGHtml.toString();
        localStorage.setItem(ingresito1, JSON.stringify(gastosDeForm[i].precioGHtml))
    }
    $("#resultados").remove();
    banderaSaldos = 0;
    bandera_json = 0;
}



// ------------------------- BOTONES RESET -------------------------



$("#chau").click(function (e) {
    
    e.preventDefault();
    
    let ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
    
    if (localStorage.getItem('storageIngresos') != null) {
        
        if (ingresosDeForm.length > 0) {
            
            for (let i = 0; i < ingresosDeForm.length; i++) {
                let chauIngreso = "ing_" + ingresosDeForm[i].tituloIHtml.toString();
                localStorage.removeItem(chauIngreso);
            }
            
            localStorage.removeItem('storageIngresos');
            $('.borrarIngresos').remove();
            $("#resultados").remove();
            banderaSaldos = 0;
            bandera_json = 0;
            
        }
    }
});



$("#chau2").click(function (e) {
    
    e.preventDefault();
    
    let gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
    
    if (localStorage.getItem('storageGastos') != null) {
        
        if (gastosDeForm.length > 0) {
            
            for (let i = 0; i < gastosDeForm.length; i++) {
                let chauGasto = "gas_" + gastosDeForm[i].tituloGHtml.toString();
                localStorage.removeItem(chauGasto);
            }
            localStorage.removeItem('storageGastos');
            $('.borrarGastos').remove();
            $("#resultados").remove();
            banderaSaldos = 0;
            bandera_json = 0;
            
        }
    }
});


$("#resetTotal").click(function (e) {
    
    e.preventDefault();
    $("#jsonMeses").remove();
    $("#chau").click();
    $("#chau2").click();
})



// ------------------------- LLAMADA AJAX GET - JSON LOCAL -------------------------


const MrJSON = "saldos.json"
let bandera_json = 0;

$(document).on('click', '#btn1', function () {
    
    $.getJSON(MrJSON, function (respuesta, estado) {
        
        if (estado === "success" && bandera_json == 0) {
            
            $("#resultados").append(`
            <div class="table-responsive" id="jsonMeses">
            <table class="table table-responsive table-borderless">
            <thead>
            <tr class="bg-light">
            <th scope="col" width="20%">Mes</th>
            <th scope="col" width="20%">Total Ingresos</th>
            <th scope="col" width="20%">Total Gastos</th>
            <th scope="col" width="20%">Saldo</th>
            </tr>
            </thead>
            
            <tbody id="agregoJson">       
            </tbody>
            
            </table>
            </div>
            `)
            
            let misDatos = respuesta;
            for (const dato of misDatos) {
                
                $("#agregoJson").append(`
                <tr>
                <td><span class="fw-bolder">${dato.mes}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
                <td><span class="fw-bolder">$${dato.totalIngresos}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
                <td><span class="fw-bolder">$${dato.totalGastos}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
                <td><span class="fw-bolder">$${dato.saldo}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
                </tr>               
                `)
                
            }
        }
        bandera_json = 1;
    });
});



// ------------------------- LLAMADA AJAX POST - JSON LOCAL -------------------------


//Escuchamos el evento click del botón agregado
$(document).on('click', '#btn5', function () {
    
    let mesEnviado = {
        mes: "Noviembre",
        ingresos: total_ingresos,
        gastos: total_gastos
    };
    
    $.ajax({
        type: 'POST',
        url: "saldos.json",
        data: mesEnviado,
        dataType: "json",
        success: function (mandoMes) {
            alert("¡Envío exitoso!");
        },
    })
    
})



// ------------------------- CALCULADORA SALDOS -------------------------


$("#botonResumen").click(function () {
    
    let ingresosDeForm = [];
    ingresosDeForm = JSON.parse(localStorage.getItem('storageIngresos'));
    let gastosDeForm = [];
    gastosDeForm = JSON.parse(localStorage.getItem('storageGastos'));
    
    if ((ingresosDeForm.length != 0) && (gastosDeForm.length != 0)) {
        
        if (banderaSaldos === 0) {
            
            let total_ingresos = 0;
            let total_gastos = 0;
            let saldo = 0;
            
            for (let i = 0; i < ingresosDeForm.length; i++) {
                total_ingresos = total_ingresos + parseFloat(ingresosDeForm[i].precioIHtml);
            }
            console.log(total_ingresos);
            
            for (let i = 0; i < gastosDeForm.length; i++) {
                total_gastos = total_gastos + parseFloat(gastosDeForm[i].precioGHtml);
            }
            console.log(total_gastos);
            
            saldo = total_ingresos - total_gastos;
            console.log("saldos es" + saldo);
            
            $("#saldos").append(`
            <div class="table-responsive" id="resultados">
            <table class="table table-responsive table-borderless">
            <thead>
            <tr class="bg-light">
            <th scope="col" width="70%">Dinero</th>
            <th scope="col" class="text-end" width="30%"><span>Total</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><img src="img/saldo_ingresos.png" width="25"> Ingresos</td>
            <td class="text-end"><span class="fw-bolder">$${total_ingresos}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
            </tr>
            <tr>
            <td><img src="img/saldo_gastos.png" width="25"> Gastos</td>
            <td class="text-end"><span class="fw-bolder">$${total_gastos}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
            </tr>
            <tr>
            <td><img src="img/logoMain.png" width="25"> Saldo Disponible</td>
            <td class="text-end"><span class="fw-bolder">$${saldo}</span> <i class="fa fa-ellipsis-h ms-2"></i></td>
            </tr>
            </tbody>
            </table>
            </div>
            `);
            
            
            //BOTONES LLAMADAS AJAX
            $("#resultados").append('<div id= botonesJson><button class="btn btn-primary btn-lg" id="btn1">Ver Meses Anteriores</button><button class="btn btn-primary btn-lg" id="btn5">Guardar saldos del Mes</button></div>');
            banderaSaldos = 1;
        }
    }
});