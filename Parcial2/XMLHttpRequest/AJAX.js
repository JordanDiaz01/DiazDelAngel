//fetch('https://randomuser.me/api/?results=50')
//.then(response => response.json())
//.then(data => console.log(data))

// window.onload=()=>{
//     document.getElementById('enca').addEventListener('click',pedirHeader);
//     document.getElementById('menulat').addEventListener('click',iniciarHeader);
// }

// const pedirHeader=()=>{
//     const Req= new XMLHttpRequest()
    
//     Req.onreadystatechange= ()=>{
//         let obj= JSON.parse(Req.responseText)
//         Req.readyState == 4 && Req.status ==200 ? document.getElementById('col1').innerHTML=JSON.stringify(obj)  : console.log('error')

//     }

//     Req.open('GET', 'https://randomuser.me/api/?results=1',true)
//     Req.send()
// }

// const iniciarHeader=()=>{
//     document.getElementById('col1').innerHTML='<h2>Este es un header nivel 2</h2>'
// }

//let userRandom=[]

//AJAX CON JQUERY
const users= ()=>{
    $.ajax(
    {
        type:'GET',
        url: 'https://randomuser.me/api/',
        contentType: 'application/json',
        async: true,
        success: (data)=> {//console.log(data)
             renderUser(data)
             //console.log(userRandom)
        },
        error: (error)=> console.log(error),
    }
    )
}

const renderUser=(data)=>{
    let user= data.results[0];
    console.log(user)
    const {name:{first,last},gender,phone,picture:{large}}=user
    //console.log(first,last)   
    $('#col1').html(
        `<h3>${first} ${last}</h3 </br>
        <h3>gender: ${gender}</h3 </br>
        <h3>phone number: ${phone}</h3`
        )
    $('#col2').html(
        `
        <img src='${large}'>
        `
    ) 
}

$(document).ready(() => {
    $("#col1").click((e)=>{
        users()
        })
    
})


