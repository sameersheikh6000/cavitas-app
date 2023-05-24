import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../../hooks/useUsers';
import DeleteUserConfirmModal from '../../UserInformation/Components/DeleteUserConfirmModal';
import SuccessMessage from '../../../../components/SnackbarMessages/SuccessMessage';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';
import useCavitasDocs from '../../../../hooks/useCavitasDocs';
import CreateCavitasDocs from '../../CavitasDocuments/Components/CreateCavitasDocs';
// import Page from '../../../components/Page/Page';
import { API_KEY } from '../../../../config/helpers/variables';
import DeleteCavitasDocs from '../../CavitasDocuments/Components/DeleteCavitasDocs';
import UpdateCavitasDocs from '../../CavitasDocuments/Components/UpdateCavitasDocs';
const AdminCavitasDocs = () => {
  
  
  const navigate = useNavigate();
  const { getCavitasDocsByAdmin } = useCavitasDocs();
  const [errorMessage, setErrorMessage] = useState(null);
  const [cavitasDocs, setCavitasDocs] = useState([]);
  const [successMessage, setSuccessMessage] = useState();

  const fetchCavitasDocs = async () => {
    
    const response = await getCavitasDocsByAdmin();
    
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
    <section className='dashboard__container__content__cavitasDocs'>
      <header className='dashboard__container__content__cavitasDocs__header'>
        <div className='dashboard__container__content__cavitasDocs__header__iconBox'>
          < TextSnippetOutlinedIcon className='dashboard__container__content__cavitasDocs__header__iconBox__icon' />
          <p>Cavitas Documents</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/CavitasDocuments/")}>VIEW ALL</Button>
      </header>
      <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
            <th>Title</th>
                  <th> Vaid Date</th>
            </tr>
          </thead>
          <tbody>
 {cavitasDocs?.map((row, index) => (
                     <tr>               
                         <td>{row?.title}</td>
                         <td>{row?.valid_date}</td>
                        
                     </tr>
                 ))}
              </tbody>
             </table>
          </div>
    </section>
  )
}

export default AdminCavitasDocs









