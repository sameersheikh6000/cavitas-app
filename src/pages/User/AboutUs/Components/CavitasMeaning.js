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
        <p>
        The Latin word "Cavitas" implies "cavity" or "cavity in the human body." Oral cavity with gums and teeth is very important area of the mouth. Cardiovascular disease, diabetes, and respiratory infections have all been related to poor dental health. Healthy teeth, gums, and mouth can help lower the chance of developing these and other serious illnesses.</p>      </div>
      <div className='aboutUs__cavitasMeaning__pictureBox'>
        <img src={require("../../../../assets/CavitasMean-image.png")} alt="" />
      </div>
    </section>
  )
}

export default CavitasMeaning