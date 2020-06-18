import React,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../services/api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Users() {
  const classes = useStyles();

  const initialValues = [
    { name:"Gustavo", lastName:"Matos", age:19 },
    { name:"Manuela", lastName:"Oliveira", age:22 },
    { name:"Daniel", lastName:"Santos", age:24 }
  ]
  const [ users, setUsers ] = useState(initialValues);

  /*
  Get users 

  async function listUsers() {
    try {
      const response = await api.get('', {
        headers:{
          "Authorization": `bearer ${token}`
        }
      });
      return setUsers(response.data);
    } catch (error) {
      //console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    listUsers(token); 
  },[users])
  */

  return (
    <div>
      <h1>List users</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Names</TableCell>
              <TableCell >Last Name</TableCell>
              <TableCell >Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.lastName}</TableCell>
                <TableCell >{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}