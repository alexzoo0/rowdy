import React from 'react';
import { Grid } from '@material-ui/core';


import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const Home = () => {


  return (

    <Grid>
      <div> <Navbar /> </div>
      <div className='three'>
        <div className='img'>
          <input placeholder="Type Email Here"></input>
          <button>Submit</button>
        </div>
      </div>
      <div> <Footer /> </div>
    </Grid>
  )

}

export default Home;