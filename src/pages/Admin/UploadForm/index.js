import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar'
import SidebarDrawer from '../../../components/SidebarDrawer'
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useTemplate from '../../../hooks/useTemplate';


const AdminUploadForm = () => {

  const navigate = useNavigate();
  const { createTemplate } = useTemplate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [template, setTemplate] = useState({
    subject: "",
    description: "",
    file: "",
  });

  const handleChange = e => {
    debugger
    const { name, value } = e.target;
    setTemplate({
      ...template, [name]: name !== "file" ? value : e.target.files[0]
    });
  };

  const handleSubmit = async e => {
    debugger
    e.preventDefault();
    let data = {
      ...template,
    };
    const response = await createTemplate(data);
    if (response.status < 300) {
      navigate("admin//dashboard");
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  return (
    <section className='uploadForm'>
      <AlertMessage errorMessage={errorMessage} />
      <div className='uploadForm__container'>
        <div className='uploadForm__container__sidebar'>
          <div className='uploadForm__container__sidebar__open'>
            <Sidebar />
          </div>
          <div className='uploadForm__container__sidebar__drawer'>
            <SidebarDrawer />
          </div>
        </div>
        <div className='uploadForm__container__content'>
          <p>Upload Clients</p>
          <form className='uploadForm__container__content__form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Subject'
              name='subject'
              onChange={handleChange}
              value={template.subject}
              required={true}
            />
            <input
              type="text"
              placeholder='Description'
              name='description'
              onChange={handleChange}
              value={template.description}
              required={true}
            />
            <input
              type="file"
              name='file'
              onChange={handleChange}
              // value={template.subject}
              required={true}

            />
            <Button type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminUploadForm