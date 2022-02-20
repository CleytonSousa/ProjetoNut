import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    
    *{
        scroll-behavior: smooth;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: teal;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        background: #FFFFFF;
    
        button{
            cursor: pointer;
        }

    }
`;