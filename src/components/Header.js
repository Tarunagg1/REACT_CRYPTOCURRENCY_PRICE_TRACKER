import React from 'react'
import { AppBar, Container, createTheme, FormControl, ThemeProvider, InputLabel, makeStyles, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../context/CryptoContext';

const usestyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}))

function Header() {
  const classes = usestyles();

  const history = useHistory();
  // console.log(CryptoState());
  const { currency, setCurrency } = CryptoState();


  // console.log(currency);
  const handleChange = (e) => {
    setCurrency(e.target.value);
  }

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" onClick={() => history.push('/')} className={classes.title}>Crypto hunnder</Typography>
            <Select
              variant='outlined'
              value={currency}
              onChange={handleChange}
              style={{
                width: 100,
                height: 40,
                marginRight: 15
              }}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header