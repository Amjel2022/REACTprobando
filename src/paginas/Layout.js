import {Outlet} from "react-router-dom"

import Navegacion from "./componentes/Navegacion"

export default function Layout () {
    return (
        <>
            <Navegacion />
            {/* El Outlet es el lugar donde se muestra el contenido de cada página */}
            <Outlet />
            <Pie />
        </>
    )
}