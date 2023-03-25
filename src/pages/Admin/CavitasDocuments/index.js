import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';


const AdminUploadCavitasDocuments = () => {

    const navigate = useNavigate();
    const { createClientInsuranceAdmin } = useClientInsurance();
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
        const response = await createClientInsuranceAdmin(data);
        if (response.status < 300) {
            navigate("admin/dashboard");
        } else if (response.status > 300) {
            setErrorMessage(response.message);
        }
    }


    return (
        <Page>
            <AlertMessage errorMessage={errorMessage} />
            <section className='uploadClient'>
                <header>
                    <h1>Upload Cavitas Documents</h1>
                </header>
                <div className='uploadClient__container'>
                    <div className='uploadClient__container__content'>
                        <p>Upload Broker PolicyInformation</p>
                        <form className='uploadClient__container__content__form' onSubmit={handleSubmit}>

                            <div className='uploadClient__container__body__participation'>
                                <p>Add Title</p>
                                <input
                                    className='uploadClient__container__body__participation__headInput'
                                    type='text'
                                    placeholder=''
                                    name="title"
                                    required={true}
                                />
                            </div>

                            <div className='uploadClient__container__body__participation'>
                                <p>Add Valid Date</p>
                                <input
                                    className='uploadClient__container__body__participation__headInput'
                                    type='date'
                                    placeholder='Name of insurance broker company'
                                    name="valid_date"
                                    required={true}
                                />

                            </div>

                            <div className='uploadClient__container__body__participation'>
                                <p>Please upload the Cavitas Documents (.pdf)</p>
                                <div className='uploadClient__container__body__participation__fileUpload'>
                                    <label for="file-input">
                                        <FileUploadOutlinedIcon className='uploadClient__container__body__participation__fileUpload__icon' />
                                        Upload file
                                    </label>
                                    <input id="file-input" type="file"
                                        name="file"
                                        required={true}
                                    />
                                </div>
                            </div>

                            <br></br>
                            <Button type='submit'>Submit</Button>
                        </form>


                    </div>
                </div>



            </section>
        </Page>
    )
}

export default AdminUploadCavitasDocuments