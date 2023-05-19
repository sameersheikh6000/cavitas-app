import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../config/helpers/i18n';


const CavitasMeaning = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])

  return (
    <section className='aboutUs__cavitasMeaning'>
      <div className='aboutUs__cavitasMeaning__detailsBox'>
        <h1>{t("about.cavitasMeaning")}</h1>
        <p>{t("about.Meaningofcavitas")}</p>
        </div>
      <div className='aboutUs__cavitasMeaning__pictureBox'>
        <img src={require("../../../../assets/CavitasMean-image.png")} alt="" />
      </div>
    </section>
  )
}

export default CavitasMeaning