import { createGlobalStyle } from "styled-components"

const BaseStyles = createGlobalStyle`
  input{
    color: #7aed91;
    font-size: 100%;
  }
  p{
    color: #eaf4f4;
    text-align: justify;
    margin-bottom: 20px;
  }
  a{
    color: #eaf4f4;

    &:hover{
      color: #e679fc;
    }
  }
  strong{
    font-weight: 900;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.47);
  }
  ::-moz-selection { background: #e679fc; color: #eaf4f4; }
  ::selection { background: #e679fc; color: #eaf4f4; }
  
`

export default BaseStyles