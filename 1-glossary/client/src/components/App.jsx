import React, { useMemo, useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Form from './Form';
import GlossaryList from './GlossaryList';
import { AppContext } from '../Context';
import axios from 'axios';

export default function App() {

  const [glossaryData, setGlossaryData] = useState([]);


  function fetchGlossary() {
    axios
      .get(`/words`)
      .catch(err => console.log(err))
      .then(results => setGlossaryData(results));
  };

  function updateGlossary(data) {
    axios
      .post(`/words`, data)
      .catch(err => console.log(err))
      // .then(results => setGlossaryData(results));
      fetchGlossary();
  };
  
  useEffect(() => {
    fetchGlossary();
  }, []);

  console.log('this is glossary data', glossaryData.data);
  
  const appProvider = useMemo(() => (
    {
      
    }
  ), []);

  return (
    <AppContext.Provider value={appProvider}>
      <SearchBar />
      <Form />
      <GlossaryList wordList={glossaryData}/>
    </AppContext.Provider>
  )
}

