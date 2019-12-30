import React, { useEffect } from "react";
// import styled from "styled-components";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableCell, makeStyles, TableFooter } from '@material-ui/core';
import MonthPicker from "../MonthPicker"



// style
// const StyledList = styled.div``;
function createData(time, item, cash, nonCash) {
  return { time, item, cash, nonCash };
}

const rows = [
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", "", 2000),
  createData('12/25', "資金", 22000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
  createData('12/25', "資金", 2000, ""),
];

const useStyles = makeStyles({
  table: {
    "max-height": '80%',
  },
});

export default props => {

  useEffect(() => { });
  const classes = useStyles();
  return <>

  <MonthPicker/>

    <TableContainer component={Paper} className={classes.table}>
      <Table size="small" aria-label="a dense table" stickyHeader stickyFooter>
        <TableHead>
          <TableRow>
            <TableCell>時間</TableCell>
            <TableCell align="left">項目</TableCell>
            <TableCell align="left">現金</TableCell>
            <TableCell align="left">非現金</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left" component="th">{row.time}</TableCell>
              <TableCell align="left">{row.item}</TableCell>
              <TableCell align="left">{row.cash}</TableCell>
              <TableCell align="left">{row.nonCash}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell rowSpan={1} component="th" scope="row"></TableCell>
            <TableCell rowSpan={1} component="th" scope="row"></TableCell>

            <TableCell align="right">4000</TableCell>
            <TableCell align="center">6000</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* <TableCell colSpan={2} component="th"></TableCell> */}
            {/* <TableCell rowSpan={3}></TableCell> */}
            {/* <TableCell align="left" colSpan={2} scope="row">總花費</TableCell> */}
            {/* <TableCell align="left">4000</TableCell> */}
            {/* <TableCell align="left" colSpan={3} >6000</TableCell> */}

            <TableCell rowSpan={1} component="th" scope="row"></TableCell>
            <TableCell rowSpan={1} component="th" scope="row"></TableCell>
            <TableCell align="left" scope="row">總花費</TableCell>
            <TableCell align="center">12000</TableCell>

          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
};
