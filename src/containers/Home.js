import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import "../assets/styles/App.scss"


const Home = ({myList, trends, originals}) => {
  return (
    <>
      <Search />
      {myList.length > 0 &&
        <Categories title="Mi lista">
          <Carrusel>
            {myList.map(item => 
              <CarruselItem 
              key={item.id} 
              {...item} 
              isList
              />
            )}
          </Carrusel> 
        </Categories> 
      }
      
      <Categories title="Tendencias">
        <Carrusel>
          {trends.map(item =>
            <CarruselItem key={item.id} {...item}/>  
          )}
        </Carrusel> 
      </Categories>

      <Categories title="Originales de Platzi">
        <Carrusel>
          {originals.map(item =>
            <CarruselItem key={item.id} {...item}/>  
          )}
        </Carrusel> 
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps, null)(Home);