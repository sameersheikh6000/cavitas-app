import React, {useState, useEffect} from 'react'
import Page from "../../../components/Page/Page";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import useCavitasDocs from '../../../hooks/useCavitasDocs';
import { API_KEY } from '../../../config/helpers/variables';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';

const CavitasDocsView = () => {
  const {getCavitasDocs} = useCavitasDocs();
  const [cavitasDocs, setCavitasDocs] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getAllCavitasDocs = async () => {
    debugger
      const response = await getCavitasDocs();
      debugger
      if (response?.status < 300) {
        setCavitasDocs(response?.cavitas_documents)
      } else if (response?.status > 300) {
        setErrorMessage(response.message);
      }
  }

  useEffect(() => {
    getAllCavitasDocs();
  }, [])
  return (
    <Page>
      <AlertMessage errorMessage={errorMessage}/>
      <section className='cavitasDocsView'>
        <header className='cavitasDocsView__header'>
          <TextSnippetOutlinedIcon className='cavitasDocsView__header__icon' />
          <p>Cavitas Documents</p>
        </header>
        {cavitasDocs.length > 0 ? cavitasDocs.map((row, index) => (
          <div className='cavitasDocsView__container' key={index}>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
              <p>{row?.title}</p>
              <span>Valid from: {row?.valid_date}</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <a href={`${API_KEY}/${row?.document?.url}`} style={{color: "black"}} target="_blank">
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        ))
        :
          <div style={{textAlign: "center"}}>
            <p>No Documents!</p>
          </div>
        }
      </section>
    </Page>
  )
}

export default CavitasDocsView