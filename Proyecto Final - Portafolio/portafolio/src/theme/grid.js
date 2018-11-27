import styled, {css} from 'styled-components';

export const Container = styled.div`
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 30px;
    h1 {
        font-size: 3em;
    }
    
`;

export const ContainerProyects = styled.div`
    padding-left: 10%;
    padding-right: 0%;
    padding-top: 15%;
    padding-bot: 15%
    h1 {
        font-size: 3em;
    }
`;
export const Descripcion1 = styled.div`
    padding-left: 0%
    padding-right: 30%
    padding-bot: 50%
    left: 0;
    right: 0;
    text-align: justify;
    p {
        font-size: 1.5em;
    }
`;

export const Descripcion = styled.div`
    padding-left: 0%
    padding-right: 30%
    padding-bot: 50%
    position: center;
    left: 0;
    right: 0;
    text-align: justify;
    p {
        font-size: 1.5em;
    }
`;

export const Div = styled.div`
    ${({ marginBottom })=> marginBottom && css`
    margin-direction:${marginBottom};
    `}
`;

export const Relative = styled.div`
    position: relative;
`;

export const Flex = styled.div`
    display: flex;

    ${({ column })=> column && css`
        flex-direction: column;
    `}

    ${({ justify })=> justify && css`
        justify-direction:justify;
    `}

    ${({ align })=> align && css`
        align-direction: ${align};
    `}
`;