
document.getElementById('eliminar-Emp').addEventListener('click',async ()=>{
    const form = new FormData(document.getElementById('Form-Emp'))
    const res= await fetch('./consultas/eliminar.php',{
        method:'POST',
        body: form
    })
    res.status==200?
    swal('Empleado eliminado con éxito!','','success')
    :
    swal('No se pudo eliminar el empleado','','error')
    $('#exampleModal2').modal('hide')
})