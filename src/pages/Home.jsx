import Carrossel from "../componentes/Carrossel"
import Principal from "../componentes/Principal"
import MenuPrincipal from "../componentes/MenuPrincipal"
import Parceiros from "../componentes/Parceiros"
import Projeto from "../componentes/Projeto"

export default function Home (){
    return(
        <div>
            <MenuPrincipal />
            <Principal />
            <Carrossel />
            <Projeto />
        </div>
    )
}