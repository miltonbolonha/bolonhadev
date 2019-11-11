import { createGlobalStyle } from "styled-components"

const BaseStyles = createGlobalStyle`
  input{
    color: #7aed91;
    font-size: 100%;
  }
  p{
    color: #eaf4f4;
    text-align: justify;
  }
  ::-moz-selection { background: #e679fc; color: #eaf4f4; }
  ::selection { background: #e679fc; color: #eaf4f4; }
  
`

export default BaseStyles