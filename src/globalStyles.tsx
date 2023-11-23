import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .App {
    text-align: center;
  }

  .App-link {
    color: #61dafb;
  }

  kbd {
    background-color: #444;
    border-top: 3px solid #aaa;
    border-left: 3px solid #999;
    border-right: 3px solid #333;
    border-bottom: 4px solid #222;
    border-radius: 4px;
    color: whitesmoke;
    display: inline-block;
    font-size: 0.8em;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    line-height: 100%;
    margin: 0 0.1em;
    padding: 0.2em 0.5em;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`

export default GlobalStyle
