document.getElementById('btnEditar-Emp').addEventListener('click',()=>{
    fetch('Datos.php')
        .then(res=> res.json())
        .then(data=>console.log(data))
})