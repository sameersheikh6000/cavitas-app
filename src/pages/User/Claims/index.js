import React from 'react'
import Page from '../../../components/Page/Page'
import ClaimsPortal from './Components/ClaimsPortal'

const Claims = () => {
  return (
    <Page>
      <section className='claims'>
        <div className='claims__container'>
          <ClaimsPortal />
        </div>
      </section>
    </Page>
  )
}

export default Claims