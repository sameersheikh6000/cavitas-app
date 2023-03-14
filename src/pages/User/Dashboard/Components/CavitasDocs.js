import { Button } from '@mui/material'
import React from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useNavigate } from 'react-router-dom';
const CavitasDocs = () => {
  const navigate = useNavigate();
  return (
    <section className='dashboard__container__content__cavitasDocs'>
      <header className='dashboard__container__content__cavitasDocs__header'>
        <div className='dashboard__container__content__cavitasDocs__header__iconBox'>
          < TextSnippetOutlinedIcon className='dashboard__container__content__cavitasDocs__header__iconBox__icon' />
          <p>Cavitas Documents</p>
        </div>
        <Button size='small' onClick={() => navigate("/cavitasdocs/view")}>All Documents</Button>
      </header>
      <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
              <th>Document type</th>
              <th>Valid from</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cavitas dental insurance terms and conditions</td>
              <td>01.03.2023</td>
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