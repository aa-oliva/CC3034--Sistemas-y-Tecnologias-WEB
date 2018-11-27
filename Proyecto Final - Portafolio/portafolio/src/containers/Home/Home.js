import React, { Component, PropTypes } from 'react';
import { Image, AndresImage, RevealP, ImageButton } from './Home.style'
import {Container, ContainerProyects, Descripcion, Descripcion1} from '../../theme/grid'
import WhenInView from '../../components/WhenInView/WhenInWiew'
import { A, B, C } from '../../theme/types'


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
                <Descripcion1>
                    <WhenInView>
                        {({isInView})=>
                            <RevealP hide={!isInView}>
                            <C>
                            Andres Oliva 12149 Estudiante de Ciencias de la computacion y tecnologias, 
                            de la universidad Del Valle De Guatemala estudiante de 4to año.
                            </C>
                            </RevealP>
                        }
                
                    </WhenInView>
                </Descripcion1>
              


                <ContainerProyects>
                    <h1>
                    <B href="https://codepen.io/oli12149/pen/ZmeNdB">laboratorio # 2 - Pure HTML Story</B>
                    </h1>
                    
                    <ImageButton>
                            
                            <img
                            src = {require('../../assets/lab2.PNG')}
                            alt ="laboratorio # 2 - Basic html Story"/>
                    </ImageButton>
                    <Descripcion>
                        <WhenInView>
                            {({isInView})=>
                                <RevealP hide={!isInView}><C>
                                no haber utilizado css ni javascript y deben entregar su página web en una ip pública en internet. Durante el laboratorio se les mostrará el procedimiento y se les dará los accesos a un servidor público. Adjunten la url de su historia.

Deben escribir una historia de texto corta utilizando solo html. Al final de cada página (que no sea un "final") deben colocar opciones para que el jugador escoja cómo continúa la historia.</C>
                                </RevealP>
                            }
                        </WhenInView>
                    </Descripcion>

                    

                </ContainerProyects>




                <ContainerProyects>
                    <h1>
                    <B href="https://codepen.io/oli12149/pen/ZmeNdB">laboratorio # 3 - CSS Only</B>
                    </h1>
                    
                    <ImageButton>
                            
                            <img
                            src = {require('../../assets/lab3.PNG')}
                            alt ="laboratorio # 3 - CSS Olny"/>
                    </ImageButton>
                    <Descripcion>
                        <WhenInView>
                            {({isInView})=>
                                <RevealP hide={!isInView}><C>
                                Objetivos
                                Que los alumnos practiquen conceptos básicos de css al rededor de posicionamiento y layout          
                                Que los alumnos aprendan a traer imágenes y diseños al html                                         
                                Que los alumnos creen una cuenta en codepen, y aprendan sobre la importancia de sitios similares    
                                Que los alumnos aprendan a distinguir criterios de evaluación que no solo podrían ser muy difíciles 
                                de cumplir, sino que también podrían bloquear otros criterios.                                      

                                Consiste en elegir una imagen y por producirla utilizando unicamente html y css </C>                    
                                </RevealP>
                            }
                        </WhenInView>
                    </Descripcion>

                    

                </ContainerProyects>
                


                <ContainerProyects>
                    <h1>
                        <B href="https://github.com/aa-oliva/CC3034--Sistemas-y-Tecnologias-WEB/tree/master/LAB%20%23%207%20-%20Laberinto/Laberinto">laboratorio # 7 - Laberinto</B>
                    </h1>
                        <ImageButton>
                            
                            <img
                            src = {require('../../assets/lab7.PNG')}
                            alt ="laboratorio # 7 - Laberinto"/>
                        </ImageButton>
                        <Descripcion>
                            <WhenInView>
                            {({isInView})=>
                                <RevealP hide={!isInView}><C>
                                Objetivos:

                                Que los alumnos re-utilicen el ambiente de desarrollo que trabajaron en el laboratorio pasado para crear un nuevo proyecto
                                Que los alumnos practiquen conceptos básicos al rededor de linting
                                Que los alumnos practiquen combinar los temas de fetch con los temas de react                                      

                                Deben consumir el endpoint en la siguiente dirección: GET http://34.210.35.174:3001 (Enlaces a un sitio externo.)Enlaces a 
                                un sitio externo. y deben construir el laberinto en base a la información que el endpoint provee. Deben crear un jugador en
                                la posición "p" y este se debe mover utilizando las flechas del teclado. Al llegar a la posición "g" se debe mostrar un 
                                mensaje de victoria. El personaje no puede atravesar las paredes.    </C>  
                                </RevealP>
                            }
                        </WhenInView>
                        </Descripcion>
                   
                </ContainerProyects>       
                


                <ContainerProyects>
                    <h1>
                    <B href= "https://github.com/aa-oliva/CC3034--Sistemas-y-Tecnologias-WEB/tree/master/LAB%20%23%208%20-%20Calculadora/react-calc" >laboratorio # 8 - Calculadora React</B>
                    </h1>
                        <ImageButton>
                            
                            <img
                            src = {require('../../assets/lab8.PNG')}
                            alt ="laboratorio # 8 - CSS Olny"/>
                        </ImageButton>
                        <Descripcion>
                            <WhenInView>
                            {({isInView})=>
                                <RevealP hide={!isInView}><C>
                                La calculadora debe consistir de una pantalla (display) y de un teclado numérico compuesto de botones de html. Todo input debe hacerse desde los botones. 
                                Al presionar un número en el teclado numérico, se debe mostrar en el display. Cada número que se presione después de éste, debe concatenarse a la derecha 
                                del despliegue. Si se presiona una tecla de "operación", el siguiente número que se presione debe limpiar el despliegue antes de colocarse. Si se presiona 
                                una operación nuevamente, y para cada operación subsiguiente, se debe mostrar el resultado al momento de presionar la operación. Debe tener un botón de 
                                igual que muestre el resultado y regrese a la calculadora a su estado inicial.</C>
                                </RevealP>
                            }
                            </WhenInView>
                        </Descripcion>
                    
                </ContainerProyects>     
                

                <ContainerProyects>
                    <h1>
                        <B href="https://github.com/aa-oliva/CC3034--Sistemas-y-Tecnologias-WEB/tree/master/Proyecto%20%23%201%20-%20React%20Boilerplate/minimal-react-boilerplate">Projecto # 1 - Minimal React Boilerplate</B>
                    </h1>
                        <ImageButton>
                            
                            <img
                            src = {require('../../assets/portafolio.PNG')}
                            alt ="laboratorio # 3 - CSS Olny"/>
                        </ImageButton>
                        <Descripcion>
                            <WhenInView>
                            {({isInView})=>
                                <RevealP hide={!isInView}><C>
                                Ponner en practica todos los conocimientos aprendidos en el curso en el tema de stack de desarrollo de Java Script.
                                starter-kit/boilerplate que se pueda utilizar para crear nuevas aplicaciones de react desde cero. No pueden haber utilizado un boilerplate existente ni 
                                ninguna herramienta que cree ambientes.</C>
                                </RevealP>
                            }
                          </WhenInView>
                        </Descripcion>
                    
                </ContainerProyects>     
                
            </Container>
        );
    }
}