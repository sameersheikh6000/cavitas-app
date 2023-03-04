import React from 'react'
import Page from '../../../components/Page/Page'
import FAQTabs from './Components/FAQTabs'

const FAQ = () => {
  return (
    <Page>
      <section className='faq'>
        <header>
          <h1>Frequently asked questions</h1>
        </header>
        <div className='faq__tabs'>
          <FAQTabs />
        </div>
      </section>
    </Page>
  )
}

export default FAQ