import React from 'react';
import './App.css';
import Gif from './components/Gif';
import GifList from './components/GifList';
import GifForm from './components/GifForm';
import { connect } from 'react-redux';

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';

  const { loading } = props;

  

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

export default connect(mapStateToProps)(App);