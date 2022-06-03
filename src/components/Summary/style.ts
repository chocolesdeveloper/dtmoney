import styled from "styled-components";

export const Container =  styled.div`
/*Serve para deixar os 3 itens um do lado do outro
porque são do mesmo tamanho!*/
    display: grid;
    /*Vai criar 3 coluna */
    grid-template-columns: repeat(3, 1fr);
    /*Cria um espaçamento */
    gap: 2rem;
    margin-top: -10rem;
    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }
`;