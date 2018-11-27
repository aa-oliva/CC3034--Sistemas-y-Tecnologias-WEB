import styled, {css} from 'styled-components';

export const Container = styled.div`
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 30px;
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