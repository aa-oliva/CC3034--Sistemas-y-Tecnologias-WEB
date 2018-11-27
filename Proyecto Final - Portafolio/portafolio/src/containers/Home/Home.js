import React, { Component, PropTypes } from 'react';
import { Image, AndresImage, RevealP, ImageButton } from './Home.style'
import {Container} from '../../theme/grid'
import WhenInView from '../../components/WhenInView/WhenInWiew'



export default class Home extends Component {
    static PropTypes = {};

    render(){
        return(
            <Container>
                <AndresImage>
                    <h1>Andres Oliva 12149</h1>
                    <h2>CC3034 -Sistemas y Tecnologias WEB</h2>
                </AndresImage>
                <WhenInView>
                    {({isInView})=>
                        <RevealP hide={!isInView}>
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        </RevealP>
                    }
                </WhenInView>
                <ImageButton onClick = "location.href='https://codepen.io/oli12149/pen/ZmeNdB';">
                    <h1>
                        laboratorio # 3 - CSS Only
                    </h1>
                    <img
                    src = {require('../../assets/lab3.PNG')}
                    alt ="laboratorio # 3 - CSS Olny"/>
                    
                       
                        
                    
                </ImageButton>
                <WhenInView>
                    {({isInView})=>
                        <RevealP hide={!isInView}>
                        Objetivos
                        Que los alumnos practiquen conceptos básicos de css al rededor de posicionamiento y layout
                        Que los alumnos aprendan a traer imágenes y diseños al html
                        Que los alumnos creen una cuenta en codepen, y aprendan sobre la importancia de sitios similares
                        Que los alumnos aprendan a distinguir criterios de evaluación que no solo podrían ser muy difíciles 
                        de cumplir, sino que también podrían bloquear otros criterios.

                        Consiste en elegir una imagen y por producirla utilizando unicamente html y css
                        </RevealP>
                    }
                </WhenInView>
            </Container>

        );
    }
}