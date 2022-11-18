document.getElementById('btnEditar').addEventListener('click',()=>{
    fetch('./Datos.php')
        .then(res=> res.json())
        .then(data=>console.log(data))
})

