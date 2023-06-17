import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/helpers/i18n";
import Page from "../../../components/Page/Page";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import useCavitasDocs from '../../../hooks/useCavitasDocs';
import { API_KEY } from '../../../config/helpers/variables';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';

const CavitasDocsView = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  const {getCavitasDocs} = useCavitasDocs();
  const [cavitasDocs, setCavitasDocs] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getAllCavitasDocs = async () => {

      const response = await getCavitasDocs();

      if (response?.status < 300) {
        setCavitasDocs(response?.cavitas_documents)
      } else if (response?.status > 300) {
        setErrorMessage(response.message);
      }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
    getAllCavitasDocs();
  }, [])
  return (
    <Page>
      <AlertMessage errorMessage={errorMessage}/>
      <section className='cavitasDocsView'>
        <header className='cavitasDocsView__header'>
          <TextSnippetOutlinedIcon className='cavitasDocsView__header__icon' />
          <p>{t("Pannel_Dashboard.Cavitasdocuments")}</p>
        </header>
        {/* {cavitasDocs.length > 0 ? cavitasDocs.map((row, index) => (
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
        } */}
        <div style={{display:"flex"}}>
          <div className='c' style={{ width:"100%", marginTop: "30px"}}>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
              <p>{t("Cavitasdocuments.card1")}</p>
              <span>{t("Cavitasdocuments.date")}</span>
              <br />
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <a  style={{color: "black"}} target="_blank">
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='cavitasDocsView__container' style={{ width:"100%"}}>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
            <p>{t("Cavitasdocuments.card2")}</p>
              <span>{t("Cavitasdocuments.date")}</span>
              <br />
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <a  style={{color: "black"}} target="_blank">
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{display:"flex"}}>
          <div className='c' style={{ width:"100%", marginTop: "30px"}}>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
            <p>{t("Cavitasdocuments.card3")}</p>
              <span>{t("Cavitasdocuments.date")}</span>
              <br />
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <a  style={{color: "black"}} target="_blank">
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='cavitasDocsView__container' style={{ width:"100%"}}>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
            <p>{t("Cavitasdocuments.card4")}</p>
              <span>{t("Cavitasdocuments.date")}</span>
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <a  style={{color: "black"}} target="_blank">
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{display:"flex"}}>
          <div className='c' style={{ width:"50%", marginTop: "30px"}}>
          <div className='cavitasDocsView__container__cards'>
            <div className='cavitasDocsView__container__cards__card'>
            <p>{t("Cavitasdocuments.card5")}</p>
              <span>{t("Cavitasdocuments.date")}</span>
              <br />
              <div className='cavitasDocsView__container__cards__card__icons'>
                <VisibilityOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <ShareOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                <a  style={{color: "black"}} target="_blank">
                <FileDownloadOutlinedIcon className='cavitasDocsView__container__cards__card__icons__icon' />
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </Page>
  )
}

export default CavitasDocsView
