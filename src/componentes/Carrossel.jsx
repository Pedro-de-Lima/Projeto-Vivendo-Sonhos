import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemCarrossel from './ItemCarrossel';

export default function Carrossel() {
    return(
        <>
            <Carousel id='carrossel' style={{width:'100%', height:'100vh',backgroundColor:'grey', display:'flex', alignItems:'center', justifyContent: 'center'}}>
                <Carousel.Item>
                    <ItemCarrossel cargo='Presidente' texto='Descrição do cargo'></ItemCarrossel>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='vice-presidente' texto='Descrição do cargo'/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Tesoureira' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Coordenador' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Secretaria' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Suplente' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Conselho' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Conselho' texto=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarrossel cargo='Conselho' texto=''/>
                </Carousel.Item>
            </Carousel>
        </>
    )
}