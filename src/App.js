import React from 'react';
import './App.css';
import Gif from './components/Gif';
import GifList from './components/GifList';
import GifForm from './components/GifForm';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getGifs } from './actions';
// import axios from 'axios';

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';

  const { loading, error, getGifs } = props;

  useEffect(() => {
    // console.log('fetch start');
    getGifs('dogs');
    
    

  }, []);

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />
      {
        (error !== '') && <h3>{error}</h3>
      }
      {
        loading ? <h3>We are loading</h3> : <GifList/>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // gifs: state.gifs,
    loading: state.loading
  }
}

const mapActionsToProps = (actions) => {
  return {                                // Same as just putting { fetchStart } in connect below
    fetchStart: fetchStart                // You would put mapStateToProps, mapActionsToProps()
  }
}

export default connect(mapStateToProps, { getGifs })(App);