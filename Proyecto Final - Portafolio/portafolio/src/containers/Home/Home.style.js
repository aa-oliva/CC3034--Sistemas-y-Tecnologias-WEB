
import styled, { css } from 'styled-components';

export const Image = styled.img`
width: 30%;
`;
 //no me funciona el transform... 
export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {
        transition: transform .3s;
    }
    
    &:hover {
        & > img {
            transform: scale (1.2);
        }
    }
`;

export const AndresImage = styled.div`
    height: 100vh;
    background-image: url('${require('../../assets/andres.jpg')}');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-content: center;

    text-align: center;
    color: black;

    h1{
        margin-bottom:0;
    }
`;

export const RevealP = styled.p`
    position: relative;
    &:after {
        content: ' ';
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        
        transform-origin: left;
        transform: rotateY(90deg);
        transition: transform 3s;
        }
        ${({hide}) => hide && css`
            &:after {
                transform: rotateY(0deg);
            }
        `}
`;