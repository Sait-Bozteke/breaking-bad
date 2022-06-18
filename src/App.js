import Header from './components/ui/Header';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';

function App() {
const [items, setitems] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
const fetchItems=async ()=>{
  const result = await axios('https://www.breakingbadapi.com/api/characters')
setitems(result.data)
}

 fetchItems()

 
},[])


  return (
    <div className="container">
    <Header/>
    <CharacterGrid items={items}/>
    </div>
  );
}

export default App;
