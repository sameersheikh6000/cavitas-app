import React from 'react'
import Page from "../../../components/Page/Page";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const CavitasDocsView = () => {
  return (
    <Page>
      <section className='cavitasDocsView'>
        <header className='cavitasDocsView__header'>
          <TextSnippetOutlinedIcon className='cavitasDocsView__header__icon' />
          <p>Cavitas Documents</p>
        </header>
        <div className='cavitasDocsView__container'>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
              <p>Cavitas dental insurance terms and conditions</p>
              <span>Valid from: xx.xx.xxxx</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
              </div>
            </div>
            <div className='cavitasDocsView__container__cards__card'>
              <p>Cavitas dental insurance terms and conditions</p>
              <span>Valid from: xx.xx.xxxx</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
              </div>
            </div>
            <div className='cavitasDocsView__container__cards__card'>
              <p>Cavitas dental insurance terms and conditions</p>
              <span>Valid from: xx.xx.xxxx</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
              </div>
            </div>
            <div className='cavitasDocsView__container__cards__card'>
              <p>Cavitas dental insurance terms and conditions</p>
              <span>Valid from: xx.xx.xxxx</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
              </div>
            </div>
            <div className='cavitasDocsView__container__cards__card'>
              <p>Cavitas dental insurance terms and conditions</p>
              <span>Valid from: xx.xx.xxxx</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default CavitasDocsView