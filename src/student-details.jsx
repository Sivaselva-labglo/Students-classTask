import React, { Component } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default class StudentDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        gender: '',
        mark: ''
      },
      students: [],
      view: false
    };
    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.showTable = this.showTable.bind(this)
  }

  inputChange(event) {
    this.setState({ data: { ...this.state.data, [event.target.name]: event.target.value } });
  }

  submitForm(e) {
    e.preventDefault()
    this.state.students.push(this.state.data)
  }

  showTable() {
    this.setState({ view: true })
  }

  render() {
    return (
      <div>
        <form>
          <label> Name :  </label> <br /> <br />
          <TextField name="name" type="text" value={this.state.name} onChange={this.inputChange} required size='small' label="name" variant="outlined" />
          <br /><br />

          <label> Gender : </label> <br /> <br />
          <TextField name="gender" type="text" value={this.state.gender} onChange={this.inputChange} required size='small' label="gender" variant="outlined" />
          <br /> <br />

          <label> Mark : </label> <br /> <br />
          <TextField name="mark" type="text" value={this.state.mark} onChange={this.inputChange} required size='small' label="mark" variant="outlined" />
          <br /> <br />
        </form>
        <Button variant='contained' onClick={this.submitForm}>Add user</Button>
        <br /> <br />
        <Button variant='contained' onClick={this.showTable}>Show Table</Button>

        {
          (this.state.view)
            ? <Table sx={{ maxWidth: '450px' }}>
              <TableHead sx={{ backgroundColor: 'darkgrey' }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Marks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  (this.state.students).map((entries, index) => {
                    return (
                      <TableRow>
                        <TableCell>{entries.name}</TableCell>
                        <TableCell>{entries.gender}</TableCell>
                        <TableCell>{entries.mark}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
            : <p> </p>
        }
      </div>

    );

  }
}