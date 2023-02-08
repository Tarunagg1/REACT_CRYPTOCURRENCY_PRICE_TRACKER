import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../context/CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import Coininfo from '../components/Coininfo';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alingItems: 'center'
    }
  },
  sidebar: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alingItems: 'center',
    marginTop: 25,
    borderRight: '2px solid grey'
  }
}));

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const classes = useStyles();



  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log(data)
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>

      </div>
      {/* charts */}
      <Coininfo coin={coin} />
    </div>
  )
}

export default CoinPage