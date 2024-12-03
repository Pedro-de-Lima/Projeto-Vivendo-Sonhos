import InfoProjeto from "../componentes/InfoProjeto";
import MenuPrincipal from "../componentes/MenuPrincipal";

export default function Futebol(){
    return(
        <div>
            <MenuPrincipal/>
            <h1>Projeto de Futebol</h1>
            <InfoProjeto imagem='' paragrafo='O projeto "Arte de Cozinhar", desenvolvido pelo Instituto Vivendo Sonhos, é uma iniciativa voltada para a qualificação de mulheres da comunidade do bairro Campina Grande, na região Noroeste de Campinas. Com o objetivo de promover uma alimentação mais saudável, prática e saborosa, o projeto pretende atender 15 mulheres, oferecendo a elas não apenas conhecimentos culinários, mas também a oportunidade de melhorar a qualidade de vida de suas famílias por meio da alimentação.' />
            <InfoProjeto display='row-reverse' imagem='' paragrafo='As atividades do "Arte de Cozinhar" serão realizadas nas sextas-feiras à tarde e contarão com a participação de profissionais qualificados nas áreas de gastronomia e nutrição. Esses especialistas irão conduzir aulas práticas que ensinam desde técnicas básicas de cozinha até a elaboração de refeições equilibradas e nutritivas. Além do aprendizado prático, as participantes também terão acesso a material didático e insumos necessários para a preparação dos pratos.' />
            <InfoProjeto imagem='' paragrafo='O projeto tem como missão desmistificar a ideia de que uma alimentação saudável é difícil de alcançar ou cara, mostrando que, com orientação adequada, é possível cozinhar de forma simples e deliciosa. Ao capacitar essas mulheres, o "Arte de Cozinhar" não só melhora a saúde e bem-estar de suas famílias, mas também abre portas para novas oportunidades de renda, uma vez que as habilidades adquiridas podem ser aplicadas em iniciativas empreendedoras dentro da própria comunidade.' />
            <InfoProjeto display='row-reverse' imagem='' paragrafo='Essa proposta visa transformar a rotina alimentar dessas mulheres e, consequentemente, impactar positivamente toda a comunidade ao redor, promovendo hábitos mais saudáveis e uma relação mais consciente com a alimentação.' />
        </div>
    )
}