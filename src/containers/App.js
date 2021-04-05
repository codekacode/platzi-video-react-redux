import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import Footer from '../components/Footer'
import "../assets/styles/App.scss"

const App = () => {
  const [videos, setVideos] = useState(
    {
      'mylist': [],
      'trends': [],
      'originals': []
    }
  );

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(res => res.json())
      .then(data => setVideos(data))
  }, [])

  console.log(videos)

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carrusel>
            {videos.mylist.map(item => 
              <CarruselItem key={item.id} {...item} />
            )}
          </Carrusel> 
        </Categories> 
      }
      
      <Categories title="Tendencias">
        <Carrusel>
          {videos.trends.map(item =>
            <CarruselItem key={item.id} {...item}/>  
          )}
        </Carrusel> 
      </Categories>
      
      <Footer />
    </div>
  );
};

export default App;