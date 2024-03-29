import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        src: url("./fonts/NotoSansKR-Regular.eot");
        /* IE9 Compat Modes */
        src: local("Noto Sans KR Regular"), local("NotoSansKR-Regular"), url("./fonts/NotoSansKR-Regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
        url("./fonts/NotoSansKR-Regular.woff2") format("woff2"), /* Super Modern Browsers */
        url("./fonts/NotoSansKR-Regular.woff") format("woff"), /* Modern Browsers */
        url("./fonts/NotoSansKR-Regular.svg#NotoSansKR") format("svg");
        /* Legacy iOS */
    }

    * {
        box-sizing: border-box;
        transition: background-color 1s, color 0.1s, border 0.5s, right 0.3s;
    }

    :root {
        --background: #ffffff;
        --text: #232323;
        --border: #b6b7b8;
    }

    /* 스크롤바 style */
    html::-webkit-scrollbar, body::-webkit-scrollbar, section::-webkit-scrollbar {
        background-color: ${(props) => props.theme.background};
        width: 15px;
    }

    html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.text};;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
    }

    html::-webkit-scrollbar-track, body::-webkit-scrollbar-track, section::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.background};
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        html::-webkit-scrollbar, body::-webkit-scrollbar, section::-webkit-scrollbar {
            background-color: ${(props) => props.theme.background};
            width: 6px;
        }
        html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb {
            background-color: #b6b7b8;
            border-radius: 10px;
            background-clip: padding-box;
            border: 2px solid transparent;
        }
        html::-webkit-scrollbar-track, body::-webkit-scrollbar-track, section::-webkit-scrollbar-track {
            background-color: ${(props) => props.theme.background};
            border-radius: 10px;
        }
    }

    html, body, #root, #root>div {
        background-color: ${(props) => props.theme.background};
        height: 100%;
        color: ${(props) => props.theme.text};;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        overflow-x: hidden;
        overflow-y: auto;
        font-family: "Noto Sans KR";
    }

    body {
        overflow-x: hidden;
        margin: 0px;
    }

    div {
        border-color: ${(props) => props.theme.border};;
    }

    p {
        margin: 0;
        color: ${(props) => props.theme.text};;
        font-family: "Noto Sans KR";
    }

    a {
        -webkit-tap-highlight-color: transparent;
        text-decoration: none;
    }

    button {
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        background-color: ${(props) => props.theme.background};
        padding: 0px;
        border: none;
        border-radius: 5px;
        border-color: ${(props) => props.theme.border};;
        outline: none;
        color: ${(props) => props.theme.text};;
        font-size: 15px;
        font-family: "Noto Sans KR";
    }

    input {
        background-color: ${(props) => props.theme.background};
        padding: 10px;
        border: 1px solid;
        border-radius: 5px;
        outline: none;
        box-sizing: border-box;
        color: ${(props) => props.theme.text};;
        font-size: 15px;
        font-family: "Noto Sans KR";
    }

    textarea {
        background-color: ${(props) => props.theme.background};
        padding: 10px;
        border: 1px solid;
        border-radius: 5px;
        outline: none;
        resize: none;
        box-sizing: border-box;
        color: ${(props) => props.theme.text};;
        font-size: 15px;
        font-family: "Noto Sans KR";
    }

    svg {
        color: ${(props) => props.theme.text};;
    }
`
