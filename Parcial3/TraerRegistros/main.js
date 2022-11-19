
const buttons = document.querySelectorAll('.btnEditar')
let Empleado= {
}

buttons.forEach(el => el.addEventListener('click',()=>{
    fetch('./Datos.php')
    .then(res=> res.json())
    .then(data=>{
        $("#Nombre-Emp").val(data.Nombre)
        $('#AP-Emp').val(data.Apellido_Paterno)
        $('#AM-Emp').val(data.Apellido_Materno)
        $('#Edad-Emp').val(data.Edad)
        $('#Dir-Emp').val(data.Domicilio)
        $('#Ciudad-Emp').val(data.Ciudad)
        $('#Estado-Emp').val(data.Estado)
        $('#CodP-Emp').val(data.CodigoP)
        $('#Email-Emp').val(data.Correo)
        $('#Curp-Emp').val(data.Curp)
        $('#Rfc-Emp').val(data.RFC)
        $("#staticBackdrop").modal("show")
    })
    
    
}))

// document.getElementById('Form-Emp').addEventListener('submit',(e)=>{
//     e.preventDefault()

//     Empleado={
//         nombre:document.getElementById('Nombre-Emp').value,
//         Ap_Paterno:document.getElementById('AP-Emp').value,
//         Ap_Materno:document.getElementById('AM-Emp').value,
//         Edad:document.getElementById('Edad-Emp').value,
//         Direccion:document.getElementById('Dir-Emp').value,
//         Ciudad:document.getElementById('Ciudad-Emp').value,
//         Estado:document.getElementById('Estado-Emp').value,
//         Cod:document.getElementById('CodP-Emp').value,
//         email:document.getElementById('Email-Emp').value,
//         curp:document.getElementById('Curp-Emp').value,
//         rfc:document.getElementById('Rfc-Emp').value,
//     }
//     console.log(Empleado)


    
// })


// document.addEventListener('DOMContentLoaded',(e)=>{
    
     
// })


const listaEmpleados= async () =>{
    const res= await fetch('./conexion.php')
    const data= await res.json()
    console.log(data)
}


window.addEventListener('load',async()=>{
    await listaEmpleados()
})