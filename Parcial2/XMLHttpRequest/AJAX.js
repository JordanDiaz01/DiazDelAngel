//fetch('https://randomuser.me/api/?results=50')
//.then(response => response.json())
//.then(data => console.log(data))

window.onload=()=>{
    document.getElementById('enca').addEventListener('click',pedirHeader);
    document.getElementById('menulat').addEventListener('click',iniciarHeader);
}

const pedirHeader=()=>{
    const Req= new XMLHttpRequest()
    
    Req.onreadystatechange= ()=>{
        let obj= JSON.parse(Req.responseText)
        Req.readyState == 4 && Req.status ==200 ? document.getElementById('col1').innerHTML=JSON.stringify(obj)  : console.log('error')

    }

    Req.open('GET', 'https://randomuser.me/api/?results=1',true)
    Req.send()
}

const iniciarHeader=()=>{
    document.getElementById('col1').innerHTML='<h2>Este es un header nivel 2</h2>'
}