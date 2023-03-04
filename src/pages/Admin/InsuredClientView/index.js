import React, { useState, useEffect } from 'react'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../hooks/useClientInsurance';

const AdminInsuredClientView = () => {
  const navigate = useNavigate();
  const { getAllClientInsuranceAdmin } = useClientInsurance();
  const [insuranceList, setInsuranceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)


  const getClientInsurance = async () => {
    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      setInsuranceList(response.insured_clients);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }
  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <div style={{ margin: "2rem", }}>
      <p onClick={() => navigate("/admin/dashboard")}>Back</p>
      <h1>Insured Clients</h1>
      <AlertMessage errorMessage={errorMessage} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "black", color: "white" }}>
            <TableRow >
              <TableCell align="right" style={{ color: "white" }}>Name</TableCell>
              <TableCell align="right" style={{ color: "white" }}>Email</TableCell>
              <TableCell align="right" style={{ color: "white" }}>Phone</TableCell>
              <TableCell align="right" style={{ color: "white" }}>Creation time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {insuranceList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AdminInsuredClientView