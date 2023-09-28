import React, {useState, useEffect} from 'react';
import 'moment/locale/uk';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow} from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

// import { AddAdminForm } from "./AddAdminForm";
// import { DeleteConfirmModal } from "../DeleteConfirmModal"
// import { ViewModal } from "../ViewModal";
interface Admin {
    _id: string, 
    firstName: string, 
    lastName: string, 
    email: string, 
    createdAt: string
}

export const AdminTab = ():JSX.Element =>  {
  const fetchUrl = 'https://cktour.club/api/v1/users/';
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, isLoading] = useState(false);
//   moment.locale('uk');

  const fetchData = async () => {
    isLoading(true)
      const fetching = await fetch('http://localhost:8000/admin',
        {
          method: "GET",
        });
      const json = await fetching.json();
      console.log(json)
      isLoading(false);
      return setAdmins(json);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box>
      {/* <AddAdminForm props={fetchData}/> */}
      {loading ?
        <Box sx={{marginTop: 2}}><CircularProgress/></Box> :
        <TableContainer>
          <Table sx={{ width: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Ім'я</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map(({_id, firstName, lastName, email, createdAt}) => (
                  <TableRow
                      key={_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {_id}
                    </TableCell>
                    <TableCell align="right">{firstName + ' ' + lastName}</TableCell>
                    <TableCell align="right">{email}</TableCell>
                    <TableCell align="right">{createdAt.slice(0, 10)}</TableCell>
                    {/* <TableCell align="right" sx={{display: 'flex'}}><DeleteConfirmModal props={{id, fetchUrl, fetchData}}/><ViewModal id={id}/></TableCell> */}
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </Box>
  );
}
