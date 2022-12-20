import './CardWrapper.css';
import tarjetas from '../data/tarjetas.json';
import Card from './Card';

export default function CardWrapper ({titulo}) {
    // JSX fragments, para evitar tantos divs
    // <React.Fragment> (requiere un import de react)s
    return (
        <>
            <h2>{titulo}</h2>
            <div className="grilla">
                {/* Recorrer con un .map tarjetas mostrar en un párrafo cada título, números [indice] */}
                {/* Cuando usamos un .map los elementos internos necesitan una propiedad "key" con un valor único. Podemos utilizar un ID o el indice del array. */}
                
                {/* {tarjetas.map((tarjeta, index) => (
                    <p key={index} > {tarjeta.titulo}</p>
                )) }
                 */}

                {tarjetas.map((tarjeta, index) => (
                    <Card 
                        key={index} 
                        card={tarjeta}
                    />
                )) }

                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </>
    )
}