import "./Card.css";

//parámetros a seguir:
// - imagen (string)
// - title (string)
// - precio (number)
// - envio_gratis (boolean)

//Card recibe un objeto con los datos, se llama "card"

export default function Card ({card}) {
    //let imagen = "images/perritoTierno1.jpg";
    // let title = "Teléfono celular";
    let precio = 25000;
    // let precio_descuento = precio *0.9;
    let envio_gratis= true;

    return (
        <div className="card">
            <img className="card-img" src={card.imagen} alt="" />
            <div>
                <h3>{card.titulo} </h3>
                <p>${precio}</p>
                {/* {envio_gratis} esto no puede verse! */}
                {/* Conditional rendering 
                && es un "entonces"
                Para más de una condición: 
                envio_gratis && precio < 200 && 
                No existe el else
                se pregunta el contrario, la negación, 
                ! para preguntar si es falso
                */}
                {precio > 20000 &&
                    <p>OH POR DIOS</p>
                }
                
                {envio_gratis &&  
                <p className="gratis">¡Envío gratis!</p>
                }
                {!envio_gratis &&
                    <p>No es gratis</p>
                }
            </div>  
        </div>
    )
}
