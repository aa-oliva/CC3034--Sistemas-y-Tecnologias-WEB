import React, { Component, PropTypes } from 'react';
import { Image, AndresImage, RevealP, ImageButton } from './Home.style'
import {Container, Flex} from '../../theme/grid'
import WhenInView from '../../components/WhenInView/WhenInWiew'
import { A } from '../../theme/types'


export default class Home extends Component {
    static PropTypes = {};

    render(){
        return(
            
            <Container>
            
            <h2>Directorio Completo <A href="https://github.com/aa-oliva/CC3034--Sistemas-y-Tecnologias-WEB">Github</A></h2>
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
            <h1>
                laboratorio # 3 - CSS Only
            </h1>
                    <ImageButton onClick = 'https://codepen.io/oli12149/pen/ZmeNdB'>
                        
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

                <h1>
                laboratorio # 7 - Laberinto
            </h1>
                    <ImageButton onClick = 'https://codepen.io/oli12149/pen/ZmeNdB'>
                        
                        <img
                        src = {require('../../assets/lab7.PNG')}
                        alt ="laboratorio # 7 - Laberinto"/>
                    </ImageButton>
                <WhenInView>
                    {({isInView})=>
                        <RevealP hide={!isInView}>
                        Objetivos:

                        Que los alumnos re-utilicen el ambiente de desarrollo que trabajaron en el laboratorio pasado para crear un nuevo proyecto
                        Que los alumnos practiquen conceptos básicos al rededor de linting
                        Que los alumnos practiquen combinar los temas de fetch con los temas de react                                      

                        Deben consumir el endpoint en la siguiente dirección: GET http://34.210.35.174:3001 (Enlaces a un sitio externo.)Enlaces a 
                        un sitio externo. y deben construir el laberinto en base a la información que el endpoint provee. Deben crear un jugador en
                         la posición "p" y este se debe mover utilizando las flechas del teclado. Al llegar a la posición "g" se debe mostrar un 
                         mensaje de victoria. El personaje no puede atravesar las paredes.      
                        </RevealP>
                    }
                </WhenInView>
                <h1>
                laboratorio # 8 - Calculadora React
            </h1>
                    <ImageButton onClick = 'https://codepen.io/oli12149/pen/ZmeNdB'>
                        
                        <img
                        src = {require('../../assets/lab8.PNG')}
                        alt ="laboratorio # 3 - CSS Olny"/>
                    </ImageButton>
                <WhenInView>
                    {({isInView})=>
                        <RevealP hide={!isInView}>
                        La calculadora debe consistir de una pantalla (display) y de un teclado numérico compuesto de botones de html. Todo input debe hacerse desde los botones. 
                        Al presionar un número en el teclado numérico, se debe mostrar en el display. Cada número que se presione después de éste, debe concatenarse a la derecha 
                        del despliegue. Si se presiona una tecla de "operación", el siguiente número que se presione debe limpiar el despliegue antes de colocarse. Si se presiona 
                        una operación nuevamente, y para cada operación subsiguiente, se debe mostrar el resultado al momento de presionar la operación. Debe tener un botón de 
                        igual que muestre el resultado y regrese a la calculadora a su estado inicial.
                        </RevealP>
                    }
                </WhenInView>

                <h1>
                Projecto # 1 - Minimal React Boilerplate
            </h1>
                    <ImageButton onClick = 'https://codepen.io/oli12149/pen/ZmeNdB'>
                        
                        <img
                        src = {require('../../assets/portafolio.PNG')}
                        alt ="laboratorio # 3 - CSS Olny"/>
                    </ImageButton>
                <WhenInView>
                    {({isInView})=>
                        <RevealP hide={!isInView}>
                        Ponner en practica todos los conocimientos aprendidos en el curso en el tema de stack de desarrollo de Java Script.
                        starter-kit/boilerplate que se pueda utilizar para crear nuevas aplicaciones de react desde cero. No pueden haber utilizado un boilerplate existente ni 
                        ninguna herramienta que cree ambientes.
                        </RevealP>
                    }
                </WhenInView>
            </Container>
        );
    }
}