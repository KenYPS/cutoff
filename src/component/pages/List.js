import React, {  useEffect } from "react";
// import styled from "styled-components";
import {Table,TableBody ,TableContainer,TableHead,TableRow,Paper,TableCell} from '@material-ui/core';

// style
// const StyledList = styled.div``;
function createData(time, item, cash, nonCash) {
  return { time, item, cash,nonCash};
}

const rows = [
  createData('12/25', "資金", 2000,""),
  createData('12/25', "資金", "",2000),
  createData('12/25', "資金", 2000,""),
];
export default props => {

  useEffect(() => {});
  return  <TableContainer component={Paper}>
  <Table size="small" aria-label="a dense table">
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
          <TableCell align="left">{row.time}</TableCell>
          <TableCell align="left">{row.item}</TableCell>
          <TableCell align="left">{row.cash}</TableCell>
          <TableCell align="left">{row.nonCash}</TableCell>

        </TableRow>
      ))}
    </TableBody>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell align="left"></TableCell>
        <TableCell align="left">4000</TableCell>
        <TableCell align="left">6000</TableCell>
      </TableRow>
    </TableHead>
  </Table>
</TableContainer>;
};
