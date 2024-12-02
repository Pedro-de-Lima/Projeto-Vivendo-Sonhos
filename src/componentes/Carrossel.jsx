import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemCarrossel from './ItemCarrossel';
import Conselho from '../assets/Conselho_Fiscal.jpeg'
import Conselho2 from '../assets/Conselho_Fiscal2.jpeg'
import Coodernador from '../assets/Coodernador.jpeg'
import Secretaria from '../assets/Secretaria.jpeg'
import Tesoureira from '../assets/Tesoureira.jpeg'
import VicePresidente from '../assets/Vice_Presidente.jpeg'
import '../css/Carrossel.css'

export default function Carrossel() {
    return(
        <>
            <Carousel id='carrossel'>
                <Carousel.Item>
                    <ItemCarrossel cargo='Presidente' texto='O presidente de uma organização atua como o principal executivo responsável pelo planejamento estratégico de negócios e pela visão da empresa. Ao liderar a organização, o presidente responsabiliza todas as operações comerciais perante as partes interessadas e as políticas da empresa.'></ItemCarrossel>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='vice-presidente' texto='Descrição do cargo' img={VicePresidente}/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Tesoureira' texto='' img={Tesoureira}/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Coordenador' texto='' img={Coodernador}/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Secretaria' texto='' img={Secretaria}/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Suplente' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Conselho' texto='' img={Conselho}/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Conselho' texto='' img={Conselho2}/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Conselho' texto=''/>
                </Carousel.Item>
            </Carousel>
        </>
    )
}