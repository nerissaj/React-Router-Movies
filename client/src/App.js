import React, {useState} from 'react';
import {BrowserRouter as Router}  from 'react-router-dom';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';


const  App = () => {
 
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] )
  };
  
  return (
   
    <div>
      <Router>
      <SavedList list={savedList} />
      <Route path="/movielist" component={MovieList}/>      
      <Route path="/movie/:id" component={Movie} />
      
      </Router>
    </div>
    
  );

  }
  
export default App;
