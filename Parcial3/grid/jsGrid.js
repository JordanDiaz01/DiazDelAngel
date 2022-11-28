$(document).ready(()=>{
   users()
    // var clients = [
    //     { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
    //     { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
    //     { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
    //     { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
    //     { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
    // ];
    
    // var countries = [
    //     { Name: "", Id: 0 },
    //     { Name: "United States", Id: 1 },
    //     { Name: "Canada", Id: 2 },
    //     { Name: "United Kingdom", Id: 3 }
    // ];

})

const users= ()=>{
    $.ajax(
    {
        type:'GET',
        url: './conexion.php',
        contentType: 'application/json',
        async: true,
        success: (empleados)=> {console.log(empleados)
       const emp= JSON.parse(empleados)
        $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
    
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
    
        data: emp,
    
        fields: [
            { name: "Nombre", type: "text", width: 150, validate: "required" },
            { name: "Apellido_Paterno", type: "text", width: 50 },
            { name: "Apellido_Materno", type: "text", width: 50 },
            //{ name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
            
            { type: "control" }
        ]
    });
        },
        error: (error)=> console.log(error),
    }
    )
}