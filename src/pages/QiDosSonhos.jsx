import InfoProjeto from "../componentes/InfoProjeto";
import MenuPrincipal from "../componentes/MenuPrincipal";
import QI1 from '../assets/qi1.jpeg'
import QI2 from '../assets/qi2.jpeg'
import QI3 from '../assets/qi3.jpeg'
import QI4 from '../assets/qi4.jpeg'

export default function QiDosSonhos(){

    const style = {
        textAlign: "center"
    }

    return(
        <div>
            <MenuPrincipal/>
            <h1 style={style}>Qi Dos Sonhos</h1>
            <InfoProjeto imagem={QI1} paragrafo='O projeto "QI dos Sonhos" do Instituto Vivendo Sonhos, localizado na região Noroeste de Campinas, tem como principal objetivo atender crianças e adolescentes de 6 a 14 anos que se encontram em situação de vulnerabilidade social. As atividades são realizadas no período oposto ao escolar, nas segundas, quartas e sextas-feiras, e incluem uma combinação de cultura, lazer e serviços de convivência.'/>
            <InfoProjeto display='row-reverse' imagem={QI2} paragrafo='Esse projeto visa proporcionar um ambiente seguro e estimulante, onde os jovens possam desenvolver suas habilidades, fortalecer vínculos familiares e comunitários, e encontrar apoio para o seu crescimento integral. A programação do "QI dos Sonhos" inclui oficinas culturais, como teatro, música, dança e artes plásticas, além de momentos de lazer e recreação que incentivam a cooperação e o convívio social.'/>
            <InfoProjeto imagem={QI3} paragrafo='Além disso, são oferecidos serviços de convivência, que abordam temas essenciais para o desenvolvimento dos participantes, como cidadania e prevenção à violência. Para garantir o bem-estar dos jovens, o Instituto também oferece uma alimentação adequada e nutricional, preparada com o acompanhamento de nutricionistas, de forma a atender às necessidades específicas dessa faixa etária.'/>
            <InfoProjeto display='row-reverse' imagem={QI4} paragrafo='O "QI dos Sonhos" é uma resposta às necessidades de crianças e adolescentes que, muitas vezes, enfrentam dificuldades em suas trajetórias, proporcionando a eles não apenas atividades educativas e recreativas, mas também o suporte emocional e social necessário para um futuro mais promissor.' />
        </div>
    )
}