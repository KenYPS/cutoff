import React, { useEffect, useContext } from "react";
import get from "lodash/get"
// components
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableCell, makeStyles, TableFooter } from '@material-ui/core';
import MonthPicker from "../MonthPicker"
import StyledClipLoader from "component/Styled/StyledSpinner";

// api
import { apiGetData } from "Api"

// reducer
import { ContextStore } from "reducer"



const useStyles = makeStyles({
  table: {
    "max-height": '80%',
  },
  isAdvanced: {
    "background": "#8792de"
  }
});

export default props => {
  const { state } = useContext(ContextStore);
  const account = state.get("account")
  const selectedMonth = state.get('selectedMonth')

  const { isLoading, fetchApiFunc, fetchData } = apiGetData({ account, selectedMonth })

  useEffect(() => {
    fetchApiFunc()
  }, [account, selectedMonth]);

  useEffect(() => {
    console.log(fetchData.toJS());
    // if (fetchData.count()>0) {
    //   calculaAmount()
    // }
  }, [fetchData])

  const classes = useStyles();


  const calculaAmount = () => {
    let totalCash = 0
    let totalNonCach = 0
    let totalAmount = 0
    fetchData.map(list => {
      const cash = Number(list.get("cash"))
      const nonCash = Number(list.get("nonCash"))
      const amount = Number(list.get("amount"))
      totalCash = totalCash + cash
      totalNonCach = totalNonCach + nonCash
      totalAmount = totalAmount + amount
      return list
    })

    return {
      totalCash,
      totalNonCach,
      totalAmount
    }
  }

  return <>

    <MonthPicker />
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

        {isLoading && <TableCell colSpan={4}>  <StyledClipLoader /></TableCell>}

        <TableBody>

          {fetchData.map((row, index) => (
            <TableRow key={index} className={row.get('advanced') ? classes['isAdvanced'] : null}>
              <TableCell align="left" component="th">{row.get('date')}</TableCell>
              <TableCell align="left">{row.get("itemType")}</TableCell>
              <TableCell align="left">{row.get('cash')}</TableCell>
              <TableCell align="left">{row.get('nonCash')}</TableCell>

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
            <TableCell align="right" colSpan={3}>{get(calculaAmount(), 'totalCash')}</TableCell>
            <TableCell align="center">{get(calculaAmount(), 'totalNonCach')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={1} component="th" scope="row"></TableCell>
            <TableCell align="left" colSpan={3}>總花費</TableCell>
            <TableCell align="center">{get(calculaAmount(), 'totalAmount')}</TableCell>

          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
};
