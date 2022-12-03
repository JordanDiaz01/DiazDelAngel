//import swal from './sweetalert'

//swal('Empleado añadido con éxito!','','success')

document.getElementById('Añadir-Emp').addEventListener('click',async ()=>{
    const form= new FormData(document.getElementById('Form-Emp'))
    //console.log(form.get('Nombre-Emp'))
     const res=await fetch('./consultas/agregar.php',{
        method:'POST',
        body:form,
        
    })
    res.status==200?
    swal('Empleado añadido con éxito!','','success')
    :
    swal('No se pudo añadir el empleado','','error')
    document.getElementById('Form-Emp').reset()
})