import InfoProjeto from "../componentes/InfoProjeto";
import MenuPrincipal from "../componentes/MenuPrincipal";
import Futebol1 from "../assets/futebol1.jpg";
import Futebol2 from "../assets/futebol2.jpg";
import Futebol3 from "../assets/futebol3.jpg";
import Futebol4 from "../assets/futebol4.jpg";

export default function Futebol(){

    const style = {
        textAlign: "center"
    }
    return(
        <div>
            <MenuPrincipal/>
            <h1 style={style}>Projeto de Futebol</h1>
            <InfoProjeto imagem={Futebol1} paragrafo='A oficina de futebol, promovida pelo Instituto Vivendo Sonhos, é uma iniciativa voltada para o desenvolvimento de crianças de 6 a 12 anos, realizada aos sábados pela manhã. Muito mais do que apenas uma atividade física, o projeto busca proporcionar um ambiente onde os participantes possam aprender importantes lições de vida através do esporte, preparando-os para enfrentar os desafios do futuro com ética e responsabilidade.' />
            <InfoProjeto display='row-reverse' imagem={Futebol2} paragrafo='O futebol, além de ser uma paixão nacional, é uma poderosa ferramenta educativa que contribui para o desenvolvimento físico, emocional e social das crianças. Durante as oficinas, os jovens não apenas aperfeiçoam suas habilidades motoras e conhecem as regras do jogo, mas também aprendem a trabalhar em equipe, a importância da comunicação e o respeito às regras – tanto no esporte quanto na vida cotidiana.' />
            <InfoProjeto imagem={Futebol3} paragrafo='Ao ensinar as crianças a jogar em equipe, a oficina de futebol promove a cooperação, o espírito de solidariedade e a valorização do coletivo, habilidades essenciais para o convívio social. As crianças aprendem a lidar com vitórias e derrotas de forma saudável, entendendo que o respeito aos adversários e colegas é fundamental em qualquer situação.' />
            <InfoProjeto display='row-reverse' imagem={Futebol4} paragrafo='O projeto não só contribui para a formação de jovens atletas, mas também para o desenvolvimento de cidadãos conscientes, que entendem o valor do trabalho em equipe, da comunicação eficaz e do respeito ao próximo. Ao participar dessa oficina, as crianças estão sendo preparadas para se tornarem homens e mulheres éticos, capazes de enfrentar os desafios do futuro com confiança e integridade.' />
        </div>
    )
}