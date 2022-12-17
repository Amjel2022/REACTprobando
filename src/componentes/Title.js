// los componentes está bueno que tengan los nombres con inicio en mayúsculas //
// Exportamos nuestro componente
//Los componentes son funciones
import './Title.css';

export default function Title ({
    titulo, 
    subtitulo
}) {
    return (
        <div>
            <h1 className="title">
                {titulo}
            </h1>
            {/* Se utiliza el condicional con los && para preguntar sobre la existencia del parametro */}
            <p>{subtitulo ? subtitulo : "predeterminado"}</p>
        </div>
    )
    } 

// if (subtitulo) {
//     mostrar subtitulo 
// } else {
// Esta era la segunda opcion con la forma normal de if y else...


