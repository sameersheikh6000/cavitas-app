import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import Page from '../../../components/Page/Page'
import FAQTabs from './Components/FAQTabs'

const FAQ = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  return (
    <Page>
      <section className='faq'>
        <header>
          <h1>{t("FAQ.FAQ_title")}</h1>
        </header>
        <div className='faq__tabs'>
          <FAQTabs />
        </div>
      </section>
    </Page>
  )
}

export default FAQ