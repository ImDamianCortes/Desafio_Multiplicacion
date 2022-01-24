let operaciones = () =>
{

    //Tabla
    console.log("Multiplicacion.");
    for (let i= 1; i<=num; i++){
    let resultado = i* num; // por acada iteración se multiplica i x el numero
    console.log(`${i} x ${num} = ${resultado}`);
    };

    //Factorial
    //Ciclo for anidado
    console.log("Factorial.");

    for (let i = 1; i<=num ; i++)
    {
    let res = 1;
    for (let j = 1; j<=i ; j++)
    {
        res = res * j;
    }
    console.log(`Factorial de ${i} es: ${res}`)
    };
};

//ES6 - solicitud de numero a usuario y condicional de validacion.
let solicitud = () =>{

    num = parseInt(prompt(`Ingrese un numero del 1 al 20.`,1));

    //Validacion de condicion inicial 0 < num <= 20
    if (0<num && num<=20)
    {
        operaciones();
    }
    else
    {
    alert(`La opcion no es valida. \n\nDebe seleccionar un numero en el rango de 1 a 20.`)
    
    solicitud();
    }
}

solicitud();