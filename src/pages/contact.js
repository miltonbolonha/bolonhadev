import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
// import Breadcrumb from "../components/Breadcrumb"

const ContactPage = () => (
  <Layout crumbLabel="contact">
    <SEO title="Contact" />
    <p>Você pode me achar nas redes sociais e no git como <a href="https://github.com/bolonhadev" rel="nofollow">@BolonhaDev</a>.
    </p>
    <p>O meu e-mail: miltonbolonha@gmail.com
    </p>
  </Layout>
)

export default ContactPage
