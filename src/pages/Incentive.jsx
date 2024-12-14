import MenuPrincipal from "../componentes/MenuPrincipal";
import "../css/Incentive.css"

export default function incentive(){
    return(
        <>
            <MenuPrincipal/>
            <div className="incentive">
                <div className="incentive__container">
                    <h1>Doe para a Instituição Vivendo Sonhos</h1>
                    <p>Pelo Pix: vivendosonhosinstituto@gmail.com</p>
                </div>
            </div>
        </>
    )
}