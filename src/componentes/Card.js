import "./Card.css";



export default function Card () {
    let imagen = "images/perritoTierno1.jpg";
    let title = "Teléfono celular";
    let precio = 25000
    let envio_gratis= true;

    return (
        <div className="card">
            <img className="card-img" src={imagen} alt="" />
            <div>
                <h3>{title} </h3>
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