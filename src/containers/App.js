import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import "../assets/styles/App.scss"

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initalState = useInitialState(API);
  return initalState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header />
      <Search />
      {initalState.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carrusel>
            {initalState.mylist.map(item => 
              <CarruselItem key={item.id} {...item} />
            )}
          </Carrusel> 
        </Categories> 
      }
      
      <Categories title="Tendencias">
        <Carrusel>
          {initalState.trends.map(item =>
            <CarruselItem key={item.id} {...item}/>  
          )}
        </Carrusel> 
      </Categories>

      <Categories title="Originales de Platzi">
        <Carrusel>
          {initalState.originals.map(item =>
            <CarruselItem key={item.id} {...item}/>  
          )}
        </Carrusel> 
      </Categories>
      
      <Footer />
    </div>
  );
};

export default App;