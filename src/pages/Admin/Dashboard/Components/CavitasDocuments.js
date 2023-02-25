import { Button } from '@mui/material'
import React from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
const CavitasDocs = () => {
  return (
    <section className='cavitasDocs'>
      <header className='cavitasDocs__header'>
        <div className='cavitasDocs__header__iconBox'>
          < TextSnippetOutlinedIcon lassName='cavitasDocs__header__iconBox__icon' />
          <p>Cavitas Documents</p>
        </div>
        <Button size='small'>All Documents</Button>
      </header>
      <div className='cavitasDocs__details'>
        <table className='cavitasDocs__details__table'>
          <thead>
            <tr>
              <th>Document type</th>
              <th>Valid from</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CavitasDocs