import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
// import Breadcrumb from "../components/Breadcrumb"

const InfoPage = () => (
  <Layout crumbLabel="info">
    <SEO title="Info" />
    <p>
      Meu primeiro site fiz aos 11 anos, copiando e colando códigos-fonte HTML.
      Foi um site sobre DBZ em homenagem ao Vegetta.
    </p>
    <p>
      Entrei no mercado aos 18 anos manipulando animações em Flash e fazendo
      manutenção HTML e CSS.
    </p>
    <p>
      Hoje trabalho como Web Developer na <strong><a href="https://www.greenhatwebs.com/" target="_blank" rel="noopener noreferrer">Green Hat Web Solution</a></strong>, de Denver, Colorado.
      Sou estudante em desenvolvimento Fullstack pela <strong><a href="https://rocketseat.com.br/" target="_blank" rel="noopener noreferrer">Rocketseat</a></strong>.
      <br />E trabalho na criação da startup <strong><a href="https://www.instagram.com/edu4dev/" target="_blank" rel="noopener noreferrer">edu4(dev)</a></strong>, criando novos métodos para inserir pessoas no mundo dev.
    </p>
  </Layout>
)

export default InfoPage