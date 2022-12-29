import CardWrapper from "../componentes/CardWrapper"
import EjemploEvento from "../componentes/EjemploEvento"
import EjemploState from "../componentes/EjemploState"

export default function Home () {
    return (
        <> 
            <h1>Estás en la home</h1>
            <EjemploState />
            <EjemploEvento />
            <CardWrapper 
                titulo={'Ofertas'}
            />
        </>
    )
}
