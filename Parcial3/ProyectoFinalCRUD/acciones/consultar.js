document.getElementById('consultar-Emp').addEventListener('click',async(e)=>{
    e.preventDefault()
    const form = new FormData(document.getElementById('Form-Emp'))
    const results = await fetch('./consultas/consultar.php',{
        method:'POST',
        body: form
    })
    results.status==200?
    swal('Empleado encontrado!','','success')
    :
    swal('No se encontró el empleado','','error')
    let data= await results.json()
    
        $("#Nombre-Emp").val(data.nombre)
        $('#AP-Emp').val(data.ap_paterno)
        $('#AM-Emp').val(data.ap_materno)
        $('#Edad-Emp').val(data.edad)
        $('#Dir-Emp').val(data.domicilio)
        $('#Ciudad-Emp').val(data.ciudad)
        $('#Estado-Emp').val(data.estado)
        $('#CodP-Emp').val(data.codigo_postal)
        $('#Email-Emp').val(data.correo)
        $('#Curp-Emp').val(data.curp)
        $('#Rfc-Emp').val(data.rfc)
        
        $('#exampleModal').modal('hide')

})