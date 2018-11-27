import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    left: 0vw;
    width: 100%;
    top: 15 vh;
    height: 100%;
    background-image: url(${require('../../assets/background.jpg')});
    background-color: #39393a;
    outline: 1px solid #4f5055;
    background-size: 100%
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
`;