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
interface Comment {
    _id: string,
    name: string, 
    message: string, 
    email: string, 
    createdAt: string  
}
export const CommentTab = ():JSX.Element =>  {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, isLoading] = useState(false);
//   moment.locale('uk');

  const fetchData = async () => {
    isLoading(true)
      const fetching = await fetch('http://localhost:8000/comment',
        {
          method: "GET",
        });
      const json = await fetching.json();
      console.log(json)
      isLoading(false);
      return setComments(json);
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
                <TableCell align="right">Повідомлення</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map(({_id, name, message, email, createdAt}) => (
                  <TableRow
                      key={_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {_id}
                    </TableCell>
                    <TableCell align="right">{name}</TableCell>
                    <TableCell align="right">{email}</TableCell>
                    <TableCell align="right">{message}</TableCell>
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
