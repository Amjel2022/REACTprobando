import CardWrapper from "../componentes/CardWrapper"
import EjemploEvento from "../componentes/EjemploEvento"

export default function Home () {
    return (
        <> 
            <h1>Estás en la home</h1>
            <EjemploEvento />
            <CardWrapper 
                titulo={'Ofertas'}
            />
        </>
    )
}
