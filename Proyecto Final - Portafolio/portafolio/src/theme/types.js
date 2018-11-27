import styled from 'styled-components';

export const A = styled.a`
    color: #3CDBD3;
    text decoration: none;
    position: relative;

    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: #3CDBD3;
        z-index:-1;
        transition: height .1s. background-color .1s;
    }

    &:hover:after {
        height: 40%;
        background-color: #EEFFD1;
    }

`;

export const B = styled.a`
    color: #CED2FF;
    text decoration: none;
    position: relative;

    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: #CED2FF;
        z-index:-1;
        transition: height 1s. background-color 1s;
    }

    &:hover:after {
        height: 40%;
        background-color: #00722D;
    }

`;

export const C = styled.a`
    color: #EAB63C;
    text decoration: none;
    position: relative;

`;