import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const PolicyDocuments = () => {
  return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        <p>Policy Documents</p>
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Documnent type:</p>
          <p></p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Masterpolicy:</p>
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
            <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
          </div>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Policy terms and conditions:</p>
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
            <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
          </div>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>IPID:</p>
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox'>
            <VisibilityOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <ShareOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
            <FileDownloadOutlinedIcon className='insuredClientGroup__container__cardsBox__card__detailsBox__data__iconsBox__icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyDocuments