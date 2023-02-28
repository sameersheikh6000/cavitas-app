import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';

const UploadForm = () => {

  const navigate = useNavigate();
  const { createClientInsurance } = useClientInsurance();
  const [errorMessage, setErrorMessage] = useState(null);
  const [insurance, setInsurance] = useState({
    subject: "",
    description: "",
    file: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInsurance({
      ...insurance, [name]: name !== "file" ? value : e.target.files[0]
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let data = {
      ...insurance,
    };
    const response = await createClientInsurance(data);
    if (response.status < 300) {
      navigate("/dashboard");
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />

      <section className='uploadForm'>
        <div className='uploadForm__container'>
          <div className='uploadForm__container__content'>
            <p>Upload Clients</p>
            <form className='uploadForm__container__content__form' onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Subject'
                name='subject'
                onChange={handleChange}
                value={insurance.subject}
                required={true}
              />
              <input
                type="text"
                placeholder='Description'
                name='description'
                onChange={handleChange}
                value={insurance.description}
                required={true}
              />
              <input
                type="file"
                name='file'
                onChange={handleChange}
                required={true}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default UploadForm