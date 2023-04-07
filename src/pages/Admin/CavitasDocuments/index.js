import React, {useState, useEffect} from 'react'
import SuccessMessage from '../../../components/SnackbarMessages/SuccessMessage';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import useCavitasDocs from '../../../hooks/useCavitasDocs';
import { useNavigate } from 'react-router-dom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CreateCavitasDocs from './Components/CreateCavitasDocs';
import Page from '../../../components/Page/Page';
import { API_KEY } from '../../../config/helpers/variables';
import DeleteCavitasDocs from './Components/DeleteCavitasDocs';
import UpdateCavitasDocs from './Components/UpdateCavitasDocs';


const CavitasDocument = () =>  {
    const navigate = useNavigate();
    const { getCavitasDocsByAdmin } = useCavitasDocs();
    const [errorMessage, setErrorMessage] = useState(null);
    const [cavitasDocs, setCavitasDocs] = useState([]);
    const [successMessage, setSuccessMessage] = useState();
  
    const fetchCavitasDocs = async () => {
      debugger
      const response = await getCavitasDocsByAdmin();
      debugger
      if (response?.status < 300) {
        setCavitasDocs(response?.cavitas_documents)
      } else if (response?.status > 300) {
        setErrorMessage(response.message);
      }
    }
  
    useEffect(() => {
        fetchCavitasDocs();
    }, [])
  
  
    return (
      <Page>
        <SuccessMessage successMessage={successMessage}/>
        <AlertMessage errorMessage={errorMessage} />
        <section className='uploadClient'>
          <header style={{display: "flex", justifyContent: "space-between"}}>
          <div className='insuredClientView__header__left'>
            <  TextSnippetIcon   className='insuredClientView__header__left__icon' />
            <h1>Cavitas Documents</h1>   
                   </div>
            

            <CreateCavitasDocs setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} fetchCavitasDocs={fetchCavitasDocs}/>
          </header>
          <div className='insuredClientView__container'>
          {cavitasDocs ?
            <table >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Vaid Date</th>
                  <th>PDF Docs</th>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {cavitasDocs?.map((row, index) => (
                    <tr>               
                        <td>{row?.title}</td>
                        <td>{row?.valid_date}</td>
                        <td><a href={`${API_KEY}/${row?.document?.url}`} target="_blank">{row?.document?.filename}</a></td>
                        <td style={{display: "flex", justifyContent: "center"}}>
                            <UpdateCavitasDocs cavitasDocs_id={row?.id} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} fetchCavitasDocs={fetchCavitasDocs} />
                            <DeleteCavitasDocs cavitasDocs_id={row?.id} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} fetchCavitasDocs={fetchCavitasDocs} />
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
            :
            <div style={{textAlign: "center"}}>
              <p>No records.</p>
            </div>
          }
          </div>
        </section>
      </Page>
    )
  }

export default CavitasDocument