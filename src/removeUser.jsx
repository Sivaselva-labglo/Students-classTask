import React, { Component } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default class RemoveUser extends Component {
  constructor() {
    super()
    this.state = {
      students: [
        {
          name: "arun",
          gender: "male",
          marks: "20",
        }, {
          name: "jinusha",
          gender: "female",
          marks: "55",
        }, {
          name: "ramya",
          gender: "female",
          marks: "75",
        }, {
          name: "ajeesh",
          gender: "male",
          marks: "60",
        }, {
          name: "jaison",
          gender: "male",
          marks: "65",
        }, {
          name: "megha",
          gender: "female",
          marks: "49",
        }, {
          name: "thinushiya",
          gender: "female",
          marks: "80",
        }, {
          name: "raja",
          gender: "male",
          marks: "35",
        }, {
          name: "kumar",
          gender: "male",
          marks: "40",
        }, {
          name: "rose",
          gender: "female",
          marks: "75",
        },
        {
          name: "smith",
          gender: "male",
          marks: "90",
        }, {
          name: "warner",
          gender: "male",
          marks: "80",
        }, {
          name: "harleen deol",
          gender: "female",
          marks: "50",
        }, {
          name: "mithali",
          gender: "female",
          marks: "85",
        }, {
          name: "dhoni",
          gender: "male",
          marks: "99",
        },
      ],
      user: '',
    }

    this.findUser = this.findUser.bind(this)
    this.deleteUSer = this.deleteUSer.bind(this)
  }

  findUser(e) {
    this.setState({ user: e.target.value })
  }

  deleteUSer() {
    const findName = this.state.students.filter((el) => el.name != this.state.user)
    this.setState({ students: findName })
  }

  render() {
    console.log('findUSer ', this.state.user)
    console.log('rendering Students ', this.state.students)
    return (
      <div>
        <p>Remove users</p>
        <TextField type='text' name='user' onChange={this.findUser} size='small' placeholder="enter a name" variant="outlined" />
        <Button onClick={this.deleteUSer} variant='contained'>Remove</Button>
        <br /> <br />

        <Table sx={{ maxWidth: '450px' }} >
          <TableHead sx={{ backgroundColor: 'darkgrey' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.students.map((details, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{details.name}</TableCell>
                    <TableCell>{details.gender}</TableCell>
                    <TableCell>{details.marks}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}