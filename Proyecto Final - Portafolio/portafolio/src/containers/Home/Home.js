import React, { Component, PropTypes } from 'react';
import { Image, AndresImage, RevealP } from './Home.style'
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
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEs
                        EstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEstoEsto
                        </RevealP>
                    }
                </WhenInView>
                
            </Container>
        );
    }
}