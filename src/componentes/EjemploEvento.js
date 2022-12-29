
export default function EjemploEvento () {
    //Declaro la funcion dentro del componete, si la voy a usar en otro lado la puedo declarar afuera y export!!
    //Tambien lo que esta a la derecha de un "onClick", la funcion puede empezar con un "handle" es de buena practica.
    
    // function saludar () {
    //     alert('Hola');
    // }
    
    //Con atajo acá abajo y "normal" o para reutilizar está arriba. Si es algo que lleva muchas líneas de código mejor crear función!! 
    return (
        <button onClick={() => alert('holiiiiis')}>
            Cliqueame
        </button>
    )
}