import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color__primary: #0B0BD9;
    --color__primary__50: #0B0BD950;
    --color__primary__10: #0B0BD910;
    --color__secondary: #2BBAC7;
    --color__grey: #333333;
    --color__grey__50: #828282;
    --color__grey__20: #E0E0E0;
    --color__grey__0: #F5F5F5;

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol, li{
    list-style: none;
}
`;
