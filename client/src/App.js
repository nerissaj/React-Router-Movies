import React, {useState} from 'react';

import SavedList from './Movies/SavedList';
import {Route, Link} from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';




const  App = () => {
 
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] )
  };
  
  return (
   
    <div>
      
      <SavedList list={savedList} />
      
    
        
      <Route path="/" exact render={props => { 
        console.log("movies.id.props", props);
        return <MovieList {...props}  />; } }/>
      
      <Route path="/Movies/:id"render={(props) => (
  <Movie
    {...props}
      /> )}/>
    </div>
    
  );

  }
  
export default App;
